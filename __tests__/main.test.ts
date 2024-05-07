import fs from "node:fs";
import fsProm from "node:fs/promises";

import * as core from '@actions/core'

import * as main from '../src/main'

const runMock = jest.spyOn(main, 'run');
const CLIENT_ID = 'CLIENT-ID';
const CLIENT_SECRET = 'CLIENT-SECRET';
const PRODUCT_NAME = 'Yoyodyne';
const PRODUCT_VERSION_NAME = '1.0';
const SBOM_FILE_PATH = './sbom-file.json';
const API_BASE_URL = 'https://not.real.domain.com/api';

// a map of input parameters for core.getInput, and what they should return.
const INPUT_DICTIONARY = new Map<string, string> ([
    ['client-id', CLIENT_ID],
    ['client-secret', CLIENT_SECRET],
    ['sbom-file-path', SBOM_FILE_PATH],
    ['product-name', PRODUCT_NAME],
    ['product-version-name', PRODUCT_VERSION_NAME],
    ['api-base-url', API_BASE_URL]
]);
let getInputMock: jest.SpiedFunction<typeof core.getInput>;
let getBooleanInputMock: jest.SpiedFunction<typeof core.getBooleanInput>;
let setFailedMock: jest.SpiedFunction<typeof core.setFailed>;
let fsExistsMock: jest.SpiedFunction<typeof fs.existsSync>;
let readFileMock: jest.SpiedFunction<typeof fsProm.readFile>;

describe('action', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // set up calls to core.getInput() such that they return values from our dictionary
        getInputMock = jest.spyOn(core, 'getInput').mockImplementation();
        getInputMock.mockImplementation(name => {
            const foundValue = INPUT_DICTIONARY.get(name);
            if (foundValue === undefined) {
                throw Error(`Un-stubbed input parameter ${name}`);
            }
            return foundValue;
        });
        getBooleanInputMock = jest.spyOn(core, 'getBooleanInput').mockImplementation();
        // return false to indicate that we should not create the product/version; 
        // this won't be valid for all test paths once this test suite is fleshed out.
        getBooleanInputMock.mockImplementation(name => {
            switch(name) {
                case 'create-product-and-version-if-missing':
                    return false;
                default:
                    throw Error('Un-stubbed getBooleanInput');
            }
        });
        setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation();
        fsExistsMock = jest.spyOn(fs, 'existsSync').mockImplementation();
        readFileMock = jest.spyOn(fsProm, 'readFile').mockImplementation();
    });

    it('sets a failed status because file does not exist', async () => {
        // no arrangement; existsSync() will return false because the file path does not exist
        // act
        await main.run();

        // assert
        expect(runMock).toHaveReturned();
        expect(setFailedMock).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining('SBOM file does not exist')
        );
    });

    it('sets a failed status when no user organization', async() => {
        // arrange
        SetFileExists(SBOM_FILE_PATH);
        const returnBuffer: Buffer = Buffer.from('abc');
        readFileMock.mockImplementation((path) => {
            if (path === SBOM_FILE_PATH) {
                return Promise.resolve(returnBuffer);
            }
            throw Error(`Unsupported buffer for file path ${path}`);
        });


        global.fetch = jest.fn((_url, _request) => {
            // return an empty response for this iteration; 
            // if it turns out we want to proceed futher with using fetch, we'll have to 
            // stub out individual protobuf responses from files.
            return Promise.resolve(new Response);
        });

        // act
        await main.run();

        // assert
        expect(runMock).toHaveReturned();
        expect(setFailedMock).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining('Unable to determine default organization')
        );
        expect(global.fetch).toHaveBeenNthCalledWith(
            1,
            API_BASE_URL + '/listorganizations',
            expect.objectContaining({
                credentials: 'include',
                method: 'POST',
                headers: expect.objectContaining({
                    "Content-Type": 'application/x-protobuf'
                })
            })
        );
        // no more interactions with fetch() should have occurred
        expect(global.fetch).toHaveReturnedTimes(1);
    })
});

/**
 * Sets up the call to existsSync() to indicate that a particular file path exists.
 * @param filePath the file path for which to return a true (file exists) result.
 */
const SetFileExists = (filePath: string) => {
    fsExistsMock.mockImplementation(path => {
        return path === filePath;
    });
}