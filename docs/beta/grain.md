---
title: 🌾 How Grain Works
image: img/uploads/grain-token-icon.png
---

## What is Grain?

Grain is a community-specific digital currency that is issued on the basis of
[Cred scores](https://sourcecred.io/docs/beta/cred). Grain represents how much a
participant has supported that community, either through contributions or
financial support.

Projects can choose to issue their Grain as a cryptocurrency or token, such as
by issuing Grain as an ERC-20 token on Ethereum. This allows Grain to be a
conduit with which a project can pay or financially reward participants.

Note that Grain does not _have_ to be tied to any actual monetary concept, such
as cryptocurrency. A project using SourceCred can name it “Points” and use it
solely as a scoring system in addition to Cred values.

### Grain Distribution Policies

Grain distribution is a two-step process in which the Cred is recomputed (so
scores are as fresh as possible), and Grain is then distributed based on those
Cred scores.

SourceCred currently has two policies for how a project distributes Grain:

- `IMMEDIATE` splits Grain evenly based on how much Cred each participant earned
  in the last week. (This policy ignores all Cred from previous weeks, and is intended
  to give fast rewards to active participants).
- `BALANCED` splits Grain based both on lifetime Cred and on lifetime Grain
  earnings. 'Balanced' tries to ensure that everyone in the project receives a
  total Grain payment which is consistent with their total Cred score. For
  example, suppose that a contributor used to have a low Cred score, and as such
  received a small amount of Grain. However, the community recently changed its
  weights, or added a new plugin, such that the contributor now has a larger
  amount of Cred. The balanced policy sees that this contributor is underpaid,
  so it will pay them extra to "catch them up" to others in the project.
  Conversely, contributors might be "overpaid" and they'll receive less Grain
  until the payouts have been equalized.

A project can use a mixture of policies: e.g., "each week, distribute 10,000
grain according to an immediate policy and 15,000 grain according to a balanced
policy."

### _“What if I contributed a lot before a small Grain distribution, and then less before a bigger Grain distribution?”_

Cred is computed retroactively, and incorporates all your contributions. The
balanced policy also considers all Grain that has been issued to the community.
So, large Grain distributions with an immediate policy will not give you much
reward for old contributions, but large distributions with a balanced policy
will.

## How much is Grain worth?

Each community can choose the price of their own Grain. They can choose a fixed
price, or choose to make their Grain a floating financial asset and let the
market decide the price; their Grain would then fluctuate in price based on
supply and demand. They can also choose for Grain to have no monetary value, and
instead only use it within their community, such as for governance or
prioritization.

Grain is project-specific, not universal. Every project that uses SourceCred
creates its own independent Grain token and calls it whatever their community chooses.

In the SourceCred community, Grain stays at a fixed price of $1 per Grain.

## Other key properties of Grain

### Grain is transferable and tradeable

You can send your Grain freely to others, or exchange it as part of an
agreement. Within a project, Grain is fungible. If Grain has been put on a
blockchain (e.g. as an ERC20 token), it can be swapped or traded via protocols
like Uniswap or 0x, just like any other ERC20 token.

### Grain is opt-in

Since Grain can have financial value, receiving Grain might create legal and/or
tax complications for participants. As such, Grain is opt-in; only participants
that have explicitly opted in will be eligible to receive any Grain. **Note:**
This is in contrast to Cred, which is _not_ an asset, and which all participants
receive automatically.
