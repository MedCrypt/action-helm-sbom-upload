# Medcrypt Helm SBOM Upload V1

[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

This action uploads an SBOM (Software Bill of Materials) file into Medcrypt's Helm system for tracking and vulnerability
analysis.

# Usage

<!-- start usage -->

```yaml
- uses: medcrypt/action-helm-sbom-upload@v1
  with:
    # Root URL of the medcrypt API. Determines your environment, and provided to you by Medcrypt.
    repository: 'https://helm.environment.medcrypt.co/sub-path/'

    # Name of the product as it is represented in the Helm system. Not case sensitive for matching.
    product-name: 'Fidget Spinner'

    # String representation of the current version. Should be enclosed in quotes to prevent truncation of numeric values.
    product-version-name: '1.2'

    # Indicates if a product and version of that product should be created within Helm if no match is found. USE WITH CAUTION.
    create-product-and-version-if-missing: false

    # Your Medcrypt client ID, provided to you by Medcrypt. KEEP THIS SECURE and populate it from secrets.
    client-id: ${{ secrets.CLIENT_ID }}

    # Your Medcrypt client secret, provided to you by Medcrypt. KEEP THIS SECURE and populate it from secrets.
    client-secret: ${{ secrets.CLIENT_SECRET }}

    # Path to your SBOM file; this should be the location of the file within the current github workspace after
    # checking out the source code or downloading an artifact, etc.
    sbom-file-path: ./api_test_sbom.json
```

<!-- end usage -->

The scripts and documentation in this project are released under the [MIT License](LICENSE)
