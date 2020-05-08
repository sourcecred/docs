---
title: 🎚 Trust Levels
description: What level of "community trust" does SourceCred depend on
---

SourceCred is intended to be used by communities to divy up rewards, in the
form of cred and grain. As such, SourceCred needs to be resilient to gaming by
people who explicitly (but perhaps covertly) attempt to maximize their rewards
at all other costs.

The kind of gaming that will happen depends on the ambient level of trust and
social cohesion within the community. A small community of like-minded and
highly aligned people might see very little gaming, with most people explicitly
working together to make sure everyone is fairly credited. On the other hand, a
larger and more anonymous community may have many selfish actors who just want
to increase their scores without regard for the broader mission.

We've developed the conept of "Trust Levels" to try to categorize communities
along this dimension of trust, so that we can reason about which communities
SourceCred is ready to support, and what kinds of problems communities might
encounter along the way.

  - **Trust level 3** (TL3): Collaborative. This is the highest trust level.
    It is taken as [common knowledge][common-knowledge] that everyone in the
    community is acting in good faith. People feel comfortable reflecting on
    their own incentives: “am I subconsciously skewing the cred to benefit
    myself?”; “how have my motivations changed over time?”.
    When asking the same questions of others, we trust that the responses are
    thoughtfully and truthfully given. Discussions of accidental or
    subconscious gaming are treated as precious data to be shared and analyzed,
    never as evidence of any kind of wrongdoing.

    *As an example, imaging group of friends launching a startup together, with
    a bold vision of improving the world.*

  - **Trust level 2** (TL2): Wary. The community has a core backbone of
    contributors that are focused on common goals, but some people may be more
    focused on optimizing their own rewards. Primarily distinguished from TL3
    because good faith is no longer a uniform assumption. Expect skewed voting
    records, underrecognition of others’ help, quarrels over attribution or
    allocation.

    *As an example, imagine the startup is now a growing company. The "core group"
    is motivated by the vision, but some of the new hires just see it as a job.*

  - **Trust level 1** (TL1): Alert. This community controls a scarce
    resource. That resource is considered intrinsically valuable by some
    people outside the community, who are willing to devote their time
    to acquiring that resource without much thought for scruples.
    Primarily distinguished from TL2 because gaming may now be the main
    goal rather than an opportunistic “side hustle” on legitimate
    contributions—noting, of course, that legitimate components may yet
    be a key component of effective gaming strategies! Expect voting
    cliques, [sybils], chains of obfuscated self-dealing, attempts to
    corrupt structures of leadership and governance.

    *As an example, imagine that the startup is now a large company. It has hired
    a lot of ex-management-consultants and business school types.*

[common-knowledge]: https://en.wikipedia.org/wiki/Common_knowledge_(logic)
[sybils]: https://en.wikipedia.org/wiki/Sybil_attack


## Caveats

This is only one dimension among several that will influence a community's
experience with SourceCred.

Using SourceCred healthily also requires emotional maturity,
conflict resolution skills, and community leadership.

## Usage

It’s important to recognize that trust level varies both with time and
with community. As of mid 2020, the SourceCred community is in TL3, but
(e.g.) some cryptocurrency communities are surely in TL1.

A given iteration of the SourceCred system will be appropriate for some subset
of trust levels. As of SourceCred 0.5.0, SourceCred has been tested in TL3, is
experimentally available for Tl2, and should not be used in TL1.

## References

  - This document was drafted on our Discourse:
    <https://discourse.sourcecred.io/t/trust-levels/490>
  - @mzargham was an early proponent of the concept of trust levels, and
    drafted an earlier version of this system:
    <https://discourse.sourcecred.io/t/sourcecred-trust-levels/375>
