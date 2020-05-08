This post proposes a system of **trust levels** for SourceCred the
system, which describe how we intend to handle the very real questions
of adversarial actors and gaming resistance over different time scales.

The ideas proposed herein have been discussed informally within our
community, but with somewhat confusingly varying semantics. It may help
to have this shared reference to point to.

**Note:** The term *trust levels* as used in this post is largely
separate from [Discourse trust levels][discourse-trust], which are a
construct of our forum software and not related to the SourceCred
protocol in any way.

[discourse-trust]: https://blog.discourse.org/2018/06/understanding-discourse-trust-levels/

# Motivation

To achieve its goals when applied to real-world projects, SourceCred
will need to be resistant to gaming by people who explicitly (but
perhaps covertly) attempt to maximize their short-term or long-term
profits at all other costs. This is because SourceCred is intended to be
used to allocate scarce resources, and so actors will have incentives to
acquire those resources and may have no natural incentive to contribute
back to the community or behave in accordance with our preferred norms.

However, full resistance to adversarial behavior will require
substantial research, design, and implementation effort. Some of this
effort cannot even begin until we have a fairly stable understanding of
other parts of the pipeline. It doesn’t make sense to discuss defenses
until we’ve defined the protocol in which everyone is to operate.

Furthermore, while the effort required to improve gaming resistance will
surely bring us benefits in the long term, those benefits only
materialize when they actually prevent gaming, which can in turn only
occur if people are trying to game the system in ways that our existing
systems cannot sufficiently mitigate. Thus, as long as our community
remains small enough that manual chastising and blacklisting can rein in
the renegades, we’ll receive no short-term reward for any effort spent
on this. We have *plenty* of other initiatives into which we’d prefer to
invest our energy.

Therefore, we propose that we change our approach to trust over time,
and lay out a plan to do so.

# Trust levels defined

We propose three trust levels, which characterize not the technical
systems built by the SourceCred contributors but rather the composition
of a community:

  - **Trust level 3** (TL3): Collaborative. It is taken as [common
    knowledge][common-knowledge] that everyone in the community is
    acting in good faith. People feel comfortable reflecting on their
    own incentives: “am I subconsciously skewing my ‘votes’ to benefit
    myself?”; “how have my motivations for votes, etc. changed over
    time?”. When asking the same questions of others, we trust that the
    responses are thoughtfully and truthfully given. Discussions of
    accidental or subconscious gaming are treated as precious data to be
    shared and analyzed, never as evidence of any kind of wrongdoing.

  - **Trust level 2** (TL2): Wary. While the community’s core backbone
    of contributors are still dedicated to the original ideals, perhaps
    some new members are more interested in expanding their share of the
    pie rather than the pie as a whole. Primarily distinguished from TL3
    because good faith is no longer a uniform assumption. Expect skewed
    voting records, underrecognition of others’ help, quarrels over
    attribution or allocation.

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

[common-knowledge]: https://en.wikipedia.org/wiki/Common_knowledge_(logic)
[sybils]: https://en.wikipedia.org/wiki/Sybil_attack

(As a point of syntax, note that the numbers decrease as the community
is understood to be less trustworthy. That is, the number indicates the
degree of trust, not the passage of time. This is for simplicity that
“high trust level should mean more trust”, as well as consistency with
systems like DEFCON or Discourse’s own trust levels.)

# Usage

It’s important to recognize that trust level varies both with time and
with community. As of late 2019, the SourceCred community is in TL3, but
(e.g.) some cryptocurrency communities are surely in TL1.

A given iteration of the SourceCred system will be appropriate for some
subset of trust levels. As of late 2019, SourceCred is probably only
appropriate for communities in TL3. As we begin to service communities
at lower trust levels—perhaps including our own at a later time—we’ll
need to anneal down, investing into systems that can handle the
corresponding heat.

# References

  - This document was drafted on our Discourse:
    <https://discourse.sourcecred.io/t/trust-levels/490>
  - @mzargham was an early proponent of the concept of trust levels, and
    drafted an earlier version of this system:
    <https://discourse.sourcecred.io/t/sourcecred-trust-levels/375>
