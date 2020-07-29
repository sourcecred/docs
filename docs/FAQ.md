---
title: ❓FAQ
description: Your hottest questions about SourceCred, answered.
---

### Isn't SourceCred gameable? How do you prevent Sybil attacks?

In short, yes. SourceCred's philosophy is that all systems are gamable. The goal is not to eliminate gaming, but to be resistant to it. SourceCred's Sybil resistance comes from a mix of transparency and community moderation. Cred updates retroactively and payouts are long term, so if you get attacked by Sybils (i.e. duplicate accounts farming Cred) or an exploit/bug that gives someone too much Cred, it's easy to see, and you have time to respond via moderation.

There are many community-level measures that can be implemented to mitigate the risk of such an attack. To learn about how the SourceCred community itself handles it, [check out this tweet thread](https://twitter.com/decentralion/status/1276326606684876801).

### What platforms does SourceCred currently support?

SourceCred has plugins for Discourse, GitHub, and Discord. We will be working on supporting additional platforms in the future. If you are interested in contributing to the development of more plugins, check out our [Getting Involved](/docs/get-involved) page.

### How can you track contributions that don't take place on the supported platforms?

There are many forms of contributions that can't be captured automatically (e.g. meetings, IRL stuff, coordination/outreach, etc). To address this, SourceCred uses the concept of "[Initiatives]", which is a way to manually add contributions to the Cred graph in an ad-hoc basis. The initiatives plugin is currently in development and will ship with a visual "admin UI" to make it easy to add contributions and assign custom weights.

You can also use existing plug-ins to capture contributions that are outside those plug-ins. For example, if you post in Discord about a contribution you did IRL and people react with emojis that denoet value in your community, that would Mint Cred to you.

### Should I use SourceCred for my Community?

#### Use it if:
- ✅ Your community lives on one or many of the supported platforms
- ✅ Your community has strong leadership, emotional maturity and conflict resolution skills
- ✅ The [trust level] of your community is high and/or the stakes are not significant 
- ✅ Your community is relatively small (i.e. not larger than [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number))
- ✅ You're a fan of decentralized economies and changing the way we think about and distribute value

#### Don't use it if:
- ⛔️ You are looking for a silver bullet for community engagement/participation
- ⛔️ You don't want to put time/effort into educating yourself and your community on how SourceCred works
- ⛔️ You're looking for a production-ready, ultra-robust system that won't make breaking changes

[comment]: <> (WHAT DOES MAKE BREAKING CHANGES MEAN? CAN WE REPHRASE?)


### How is SourceCred funded and how will it be sustainable long term?

SourceCred is not a corporation and has no investors. It is currently sponsored by [Protocol Labs](https://protocol.ai/) to fund the initial development. In the spirit of [dog-fooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food), all the funding gets distributed directly to contributors through [Cred] and [Grain].

SourceCred's model for sustainability comes from the communities/projects that use it flowing a portion of their Cred/Grain back to SourceCred as a "tribute". This allows SourceCred to be funded by its users, resulting in strong incentive alignments for everyone involved.

[comment]: <> (THIS FAQ SEEMS TO BE FOR DEVS INTERESTED IN USING SC, DO WE WANT TO INCLUDE MORE IN-DEPTH QUESTIONS ABOUT CRED/GRAIN?)

[Cred]: /docs/concepts/cred
[Grain]: /docs/concepts/grain
[Discord]: https://sourcecred.io/discord
[Initiatives]: /docs/concepts/initiatives.md
[trust level]: /docs/concepts/trust_levels.md
