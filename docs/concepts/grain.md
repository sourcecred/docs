---
title: 🌾 Grain
description: A reward for contribution
---

SourceCred is both a social algorithm for assigning [cred](cred.md)
scores, and a cryptoeconomic system for rewarding a project's contributors
and sponsors. That cryptoeconomic system revolves around _grain_, a cred-based
cryptoasset.

The key properties of grain include:

- **Grain is project-specific.**

It's not a universal token; every project that is using SourceCred
creates its own independent token. They can call it something other
than grain (e.g. "Seeds") if they want.

- **Grain is harvested by contributors, based on cred scores.**

Grain is created during "harvests." In a harvest, a project mints new grain and
distributes it to contributors based on their cred scores. How the grain is
harvested and distributed is up to the project. For example, a project could
mint a fixed amount of grain every week and distribute it to contributors based
on their recent contributions, or it could have a target "grain-per-cred"
payout ratio, and harvest to ensure that all contributors receive at least that
amount.

- **Grain is transferrable and tradeable.**

Holders of grain can freely send it to others, or exchange it. Within a
project, grain is [fungible]. If grain has been put on a blockchain (e.g. as an
[ERC20 token]), then it can be swapped or traded via protocols like [Uniswap]
or [0x], just like any other ERC20.

[fungible]: https://en.wikipedia.org/wiki/Fungibility
[ERC20 token]: https://www.ledger.com/academy/crypto/what-are-erc20-tokens
[Uniswap]: https://uniswap.org/
[0x]: https://0x.org/

- **Grain is held by contributors and sponsors.**

Grain is initially distributed to contributors, based on their cred scores.
Anyone who buys grain is either sponsoring contributors directly (by paying
them for their grain), or is supporting a previous sponsor (by buying their
grain).

Thus, anyone holding grain has supported the project, either directly through
contributions, or indirectly through financial sponsorship.

- **Grain can be used for boosting.**

The main use for grain is _boosting_. Boosting is an act by which a supporter
of the project can spend or "plant" grain to boost a particular contribution.
When a contribution is boosted, its cred increases; it 'mints' cred. It then
also flows a fraction of its cred to its booster.

Boosting is a flexible mechanism. A booster can use it to prioritize work, and
incentivize contributors to focus on it. For example, if there's a bug that
you really want fixed, you can boost it. Because it now has a higher cred score,
contributors will be more interested in focusing on it.

Boosters can also hunt for under-valued contributions and boost them. They are
incentivized to do so, because if the contribution is later seen as important,
they will receive a bunch of cred as its booster. In doing so, they help to
ensure that everyone's contributions are being fairly valued.

A concept guide on boosting will be forthcoming.

- **Grain is opt-in**

Since grain can have financial value, receiving grain might create legal/tax
complications for contributors. As such, grain is opt-in; only contributors
that have explicitly opted in will be eligible to receive any grain. (This
is in contrast to cred, which is not an asset, and which all contributors
recieve automatically.)

## SourceGrain

SourceCred is itself issuing and using grain. We call our grain 'SourceGrain'.
SourceGrain isn't yet "officially live", but you can see our [preview
balances].

[preview balances]: https://discourse.sourcecred.io/t/sourcecred-contributor-payouts/298

