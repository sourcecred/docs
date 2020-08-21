---
title: How Grain Works
description: ""
image: img/uploads/grain-token-icon.png
---
## 🌾 What is Grain?

Grain is a community-specific digital currency which is issued on the basis of [Cred](/docs/beta/cred) scores. Grain represents how much a participant has supported that community, either through contributions or financial support. Grain can be used to pay participants, or for “Boosting” contributions or initiatives. 

Boosting allows a participant to burn Grain in order to increase the Cred of a specific contribution. Boosting acts as a way of helping to set the project’s values and priorities, and gives the Booster an increased say in the direction of the project. When you use Grain for Boosting, you get a share of the Cred for whatever you are Boosting, which in turn will earn you future Grain.

Projects can choose to issue their Grain as a cryptocurrency or token, for example by issuing Grain as an ERC-20 token on Ethereum. This allows Grain to be a conduit with which a project can pay or financially reward participants.

Note that Grain does not _have_ to be tied to any actual monetary concept, such as cryptocurrency. A SourceCred project can name it “Points” and use it solely as a scoring system in addition to Cred values.

## How you earn Grain

Grain is created during what we call “Harvests.” A Harvest is a two-step process in which the Cred is recomputed (so scores are as fresh as possible), and Grain is then distributed based on those Cred scores.

#### 1. Cred Calculation
In this cycle, the project recomputes the Cred Contribution Graph by gathering the data your plugins are tracking, and calculating new Cred scores. By default, this cycle runs every 6 hours.

#### 2. Grain Distribution
In this less-frequent cycle, the project distributes Grain based on participants’ newest Cred scores. By default, this cycle runs once a week.

Your Cred score determines the percentage of Grain you receive out of the total amount allocated to the community for each Harvest, regardless of how frequently Cred Calculation happens within it. 

#### Grain Distribution Policies
SourceCred currently has two policies for how a project distributes Grain:

- `IMMEDIATE` splits Grain evenly based on everyone’s Cred earned per the most recent Grain Distribution cycle. (default: last week)
- `BALANCED` splits Grain based on lifetime Cred. This will accommodate a retroactively-updated Cred shift by equalizing compensation as soon as possible, using as few Harvests as possible to achieve lifetime distribution balance. Note: This means that overpaid contributors might receive 0 Grain for some period of time, if it takes more than one full Harvest worth of Grain distribution to achieve balance.


### _“What if I contributed a lot before a small Grain distribution, and then less before a bigger Grain distribution?”_

Since Cred is retroactive, the SourceCred algorithm will make sure your percentage is based on _all_ of your contributions compared to all existing contributions, and make sure your percentage is based on the total amount of Grain that has been issued to the community. _Ever._ 

### _“Can I buy Grain?”_

Yes, you can also get Grain by becoming a sponsor. Buying Grain sponsors participants directly (by paying them for their Grain). Thus, anyone holding Grain has supported the project, either directly through contributions, or indirectly through financial sponsorship. When someone wants to sell their Grain for dollars (or some other currency), the money either comes from sponsors buying their Grain, or a pool their community has previously set up.

## How much is Grain worth?

In the SourceCred community, Grain stays at a fixed price of $1 per Grain. However, each community can choose the price of their Grain, as well as a name for their specific kind of Grain. In other words, Grain is project-specific, and it’s not a universal token. Every project that uses SourceCred creates its own independent token and calls it whatever they choose. Grain in the SourceCred community is sometimes also called “SourceGrain,” to distinguish it from other projects’ Grain tokens.

As for pricing, each community can choose the price of their own Grain. They can choose a fixed price, or choose to make their Grain a floating financial asset and let the market decide the price; their Grain would then fluctuate in price based on supply and demand. 


## ⬆️ Boosting Contributions

Grain can also be used to Boost contributions. This means you can burn your Grain to support a particular contribution. When a contribution is Boosted, its Cred increases because new Cred has just been [Minted](/docs/beta/cred#-cred-minting). It then also flows a fraction of its Cred to its Booster.

Boosting is a flexible mechanism. A Booster can use it to prioritize work and incentivize participants to focus on it. For example, if there is a bug that you really want fixed, you can Boost it. Since it has a higher Cred score from the newly Minted Cred, participants will now be more interested in focusing on it, as they will receive more Cred from their work.

Boosters can also hunt for under-valued contributions and Boost them. They are incentivized to do so, because if the contribution is later seen as important, they will receive a bunch of Cred as its Booster. In doing so, they help to ensure that everyone’s contributions are being fairly valued.

A guide on how to use Grain for Boosting will be coming soon.

## Other key properties of Grain

### Grain is transferrable and tradeable.

You can send your Grain freely to others, or exchange it as part of an agreement. Within a project, Grain is fungible. If Grain has been put on a blockchain (e.g. as an ERC20 token), it can be swapped or traded via protocols like Uniswap or 0x, just like any other ERC20 token. 
[//]: # (MAKE MORE CLEAR)

### Grain is opt-in

Since Grain can have financial value, receiving Grain might create legal and/or tax complications for participants. As such, Grain is opt-in; only participants that have explicitly opted in will be eligible to receive any Grain. **Note:** This is in contrast to Cred, which is _not_ an asset, and which all participants receive automatically.
