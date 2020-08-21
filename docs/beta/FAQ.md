---
title: ❓FAQ
description: Your hottest questions about SourceCred, answered.
---
### Is SourceCred gameable? How do you prevent Sybil attacks?

All systems are gameable and in the end, our goal is not to eliminate gaming but instead become resistant to it. SourceCred's transparency around contribution and reward combined with an emotionally mature community capable of social moderation, creates a system that can quickly identify attacks (intentional or unintentional) and communicate to or shut down the attacker. The retroactive nature of SourceCred's algorithm and long-term + short-term payout system means that from Sybils (one person using multiple accounts to farm Cred), to exploitation, to unintentional gaming or bugs; it's easy to see, correct weights, and respond socially with community moderation.  

There are many community-oriented measures that can be implemented to mitigate the risk of an attack. To learn about how the SourceCred community itself handles it, check out this [tweet thread](https://twitter.com/boredGenius/status/1275963160852221952).

### What platforms does SourceCred currently support?

SourceCred has plugins that can gather data for Cred scores from: 

* Discourse
* GitHub
* Discord

We will be working on supporting additional platforms in the future. If you are interested in contributing to the development of more plugins, check out our [Getting Involved](/docs/beta/get-involved) page.

To learn more about the existing plugins for SourceCred, poke through our [Plugins Documentation](https://sourcecred.io/docs/beta/plugins/github).

### What about contributions that happen outside of the supported platforms?

There are all kinds of contributions that are meaningful, but don't take place on a platform with a plugin. Things like meetings, emotional labor, IRL interactions, logistical labor, etc are all very valuable contributions that the current algorithm is blind to. It is our vision to eventually have a system nuanced enough to catch a spectrum of contributions as varied as we ourselves are. Our first step in this direction is the concept of "[initiatives](plugins/initiatives.md)" which are contributions you can manually define and add to the Cred Graph as they occur. The initiatives plugin is currently in development and will ship with a visual "admin user interface" to make adding contributions and assigning custom weights easier.

Existing plugins can also offer workarounds for communities. For example, the SourceCred community uses a Discord channel called "didathing" to announce contributions the algorithm can't see and let other community members flow Cred via emoji reactions. (Learn more about the didathing channel from the [Our Platforms](https://sourcecred.io/docs/beta/our-platforms) documentation).

### Should I use SourceCred for my Community?

#### Use it if:

* ✅ Your community lives on one or more of the supported platforms
* ✅ Your community has strong leadership, emotional maturity and conflict resolution skills
* ✅ The [trust level](../concepts/trust_levels.md) of your community is high and/or the stakes are low
* ✅ Your community is relatively small (i.e. not larger than [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number))
* ✅ You're a fan of decentralized economies and changing the way we think about and distribute value

#### Don't use it if:

* ⛔️ You are looking for a silver bullet for community engagement/participation
* ⛔️ You don't want to put time/effort into educating yourself and your community on how SourceCred works
* ⛔️ You're looking for a production-ready, ultra-robust system that won't make breaking changes

### How is SourceCred funded and how will it be sustainable long term?

SourceCred is not a corporation and has no investors. It is currently sponsored by [Protocol Labs](https://protocol.ai/) to fund its initial development. In the spirit of [dog-fooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food), all the funding gets distributed directly to contributors through [Cred](cred.md) and [Grain](grain.md).

SourceCred's model for sustainability comes from an ecosystem of communities/projects flowing a "tribute" portion of their Cred and Grain back to the projects they depend on (like SourceCred). This allows SourceCred (and other projects in the ecosystem) to be funded by those who get value from it.
