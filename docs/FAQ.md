---
title: ❓FAQ
description: Your hottest questions about SourceCred, answered.
---

### Isn't SourceCred gameable? How do you prevent Sybil attacks?

The Sybil resistance comes from a mix of transparency and community moderation. Cred updates retroactively and payouts are long term, so if you get attacked by Sybils (i.e. duplicate accounts farming cred) or an exploit/bug that gives someone too much cred, it's easy to see, and you have time to respond via moderation.

There's many community-level measures that can be implement to mitigate the risk of such an attack. To learn about how the SourceCred community itself handled it, [check out this tweet thread](https://twitter.com/decentralion/status/1276326606684876801).

### What platforms does SourceCred currently support?

SourceCred has plugins for Discourse, GitHub, and Discord. If you are interested in contributing to the development of more plugins, reach out to us on [Discord]. For a technical deep dive into the plugin system, check out [this video](https://www.youtube.com/watch?v=G6cluw6peKM).

### How can you track contributions that don't take place on the supported platforms?

There are many forms of contributions that can't be captured automatically (e.g. meetings, IRL stuff, coordination/outreach, etc). To address this, SourceCred uses the concept of "[Initiatives]", which is a way to manually add contributions to the cred graph in an ad-hoc basis. The initiatives plugin is currently in development and will ship with a visual "admin UI" to make it easy to add contributions and assign custom weights.

### Should I use SourceCred for my Community?

#### Use it if:
- ✅ Your community lives on one, or many of the supported platforms
- ✅ Your community has strong leadership, emotional maturity, and conflict resolution skills
- ✅ The [trust level] of your community is high and/or the stakes are not significant 
- ✅ Your community is relatively small (i.e. not larger than [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number))
- ✅ You're a fan of decentralized economies and changing the way we think about and distribute value

#### Don't use it if:
- ⛔️ You are looking for a silver bullet for community engagement / participation
- ⛔️ You don't want to put time/effort into educating yourself and your community on how SourceCred works
- ⛔️ You're looking for a production ready, ultra-robust system that won't make breaking changes

### How is SourceCred funded and how will it be sustainable long term?

SourceCred is not a corporation and has no investors. It is currently sponsored by [Protocol Labs](https://protocol.ai/) to fund the initial development. In the spirit of [dog-fooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food), all the funding gets distributed directly to contributors through [cred] and [grain].

SourceCred's model for sustainability comes from communities/projects that use it flowing a portion of their cred/grain back to SourceCred as a "tribute". This allows SourceCred to be funded by its users, resulting in strong incentive alignments for everyone involved.

[cred]: /docs/concepts/cred
[grain]: /docs/concepts/grain
[Discord]: https://sourcecred.io/discord
[Initiatives]: /docs/concepts/initiatives.md
[trust level]: /docs/concepts/trust_levels.md
