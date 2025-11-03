# Medcrypt Helm SBOM Upload V2.0.1

[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

This action uploads an SBOM (Software Bill of Materials) file into Medcrypt's Helm system for tracking and vulnerability
analysis.

# Usage

<!-- start usage -->

```yaml
- uses: medcrypt/action-helm-sbom-upload@v2.0.1
  with:
    # Root URL of the medcrypt API. Determines your environment, and provided to you by Medcrypt.
    api-base-url: 'https://helm.medcrypt.co/api-gw/v1/'

    # Name of the workspace that the product is assigned to. This is optional. If not provided, default workspace will be used.
    workspace-name: 'Fidget'
    
    # Name of the product as it is represented in the Helm system. CASE SENSITIVE.
    product-name: 'Fidget Spinner'

    # Indicates if a product should be created within Helm if no match is found. 
    create-product-if-not-found: false
    
    # Helm's unique identifier for the product. This never changes over the life of the product and is more reliable than product-name.
    product-uuid: '9ef5460a-5246-43dd-89cf-f98cfecaf46d'

    # String representation of the current version. Should be enclosed in quotes to prevent truncation of numeric values.
    product-version-name: '1.2'

    # Indicates if a version of that product should be created within Helm if no match is found. You will most commonly
    # set this to true if your continuous integration process is often creating new versions.
    create-version-if-not-found: false

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
