---
title: Configure the Core Algorithm
description: Configuring CredEquate and CredRank for SourceCred.
---
## Comparing Algorithms

### CredRank
- Uses graph-based, pagerank-based logic
- Lots of code, more difficult to develop on / extend
- Has more complexity, cred can _potentially_ traverse in more sophisticated ways
- Implemented for Discord, Discourse, Github, and Initiatives plugins
- Total earned cred is less than the sum of total minted cred
- Can only apply 1 configuration across all history
- Smooths-out participant cred scores week-to-week to prevent income volatility

### CredEquate
- Uses tree-based, algebra-based logic
- Very little code, easy to develop on / extend
- Runs faster and more memory-efficiently
- Easier-to-interpret output structures
- Implemented for Discord and Github plugins
- Total earned cred equals total minted cred
- No smoothing of weekly cred scores, relies of grain logic to prevent income volatility
- Includes time-scoped-configuration functionality
- In Alpha, missing support for PersonalAttributions feature, and depends on valid legacy plugin configuration files in /config/plugins

## How to configure CredEquate
Example Discord config:
https://github.com/sourcecred/cred2/blob/24c4e74ef9e60e3c701e4117a3dc29ba86bc8d39/sourcecred.json

Github keys:
- operator keys: "reactionsOperator"
- share keys: "pull author", "commit author", "review author"
- weight keys: "pull request", "review", "reaction"

