---
title: CSV Grain Integration
description: Distributing tokens on-chain with SourceCred.
---
Instead of doing Grain balance accounting in SourceCred, you can instead make Grain distributions output CSV files to directly send payouts to participants using Disperse.app or Gnosis Safe CSV app.

To use this feature, use the below example configs to configure your instance, and then look for the CSV files in the `./output/grainintegration` folder.

# Example configs

currencyDetails.json for USDC payouts
```
{
  "currencyName": "USDC",
  "currencySuffix": " USDC",
  "integrationCurrency": {
    "type": "EVM",
    "chainId": "1",
    "tokenAddress": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  }
}
```

grain.json for use with disperse.app
```
{
  "allocationPolicies": [
    {
      "budget": "100.1234",
      "numIntervalsLookback": 8,
      "policyType": "IMMEDIATE"
    }
  ],
  "maxSimultaneousDistributions": 1,
  "integration": { "type": "csv" },
  "accountingEnabled": false
}
```

grain.json for use with Gnosis Safe CSV app
```
{
  "allocationPolicies": [
    {
      "budget": "100.1234",
      "numIntervalsLookback": 8,
      "policyType": "IMMEDIATE"
    }
  ],
  "maxSimultaneousDistributions": 1,
  "integration": { "type": "csv", "config": { "gnosis": true } },
  "accountingEnabled": false
}
```

NOTE: setting `"accountingEnabled": false` will wipe all existing Grain balances.