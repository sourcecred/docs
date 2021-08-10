---
title: ❓ FAQ
description: Your hottest questions about SourceCred, answered.
---

SourceCred is a values-driven project aimed at helping communities measure their
participants’ contributions, both tangible and intangible, and reward engaged
individuals fairly for the value they bring.asdf

## Community & Values

### What problem is SourceCred solving?

Most communities have no fair, transparent, and incentive-compatible way to
value contributions. SourceCred makes this possible by offering a credibly
neutral framework that assigns
[Cred scores](https://sourcecred.io/docs/beta/cred) based on contributions, and
then distributing [Grain tokens](https://sourcecred.io/docs/beta/grain) based on
those scores.

### Can SourceCred be used to empower marginalized people and/or communities?

That is certainly our goal! As a diverse team, we know that marginalized people
face systemic challenges and obstacles in the broader job market, often based
solely on identity. One radical aspect of SourceCred is that it rewards
**contributions** instead of simply contributors, thereby reducing popularity
contests between individuals.

SourceCred is based on social values that prioritize people and communities
first, and is designed to value self-care, job flexibility, personal health and
well-being. We know this is no panacea—technology alone cannot solve human
problems—which is why SourceCred empowers each community to reward members based
on their own health, goals, values, and governance. Every community using
SourceCred will have access to our technology and perspective that, by design,
can improve the disparity between power and lack of power that often occurs
around rewards for labor.

## Cred

For an introduction to what Cred is and how it works, see our dedicated
[How Cred Works](https://sourcecred.io/docs/beta/cred) document.

### How do I earn Cred?

When you contribute to a project in a community using SourceCred, your work is
automatically tracked and measured for its value and impact to the community.
That value is denoted as a Cred score, which is how much Cred you have at the
moment.

### Is Cred a reputation score, or something else?

You can think of it as a reputation score for your contributions, or as a way of
representing the value/impact you‘ve brought to the community.

### When and how is new Cred minted?

If a contribution is valuable, the community can signal their appreciation of it
via mechanisms such as Liking a post, or adding heart emoji reactions. These
mechanisms vary between platforms, and each community can choose which of these
mechanisms will mint Cred and how much, through their community weights. Each
mechanism “mints” (aka creates) new Cred for that contribution node. This Cred
minting is like new water falling into the contribution’s pond in the form of
rain. That new water flows through the creeks to the other ponds downstream of
it.

### What‘s the difference between Cred and Grain?

Cred is a score that shows how valuable your contributions have been in a
specific project. In a sense, it’s a reputation score for the contributions
you‘ve made in that community and therefore cannot be bought, sold, or traded.
It’s simply earned. Grain is the fixed-price digital currency you receive in
proportion to your Cred. It is meant to be bought, sold, or used for governance
depending on the needs of an individual project.

### If I keep giving likes/upvotes, will I run out of Cred?

Your Cred score does not work like a pool from which you hand out Cred. Liking
and upvoting a contribution will increase the Cred score of that contribution
relative to other contributions, including your own, and shift all other scores
in the [Contribution Graph](#what-is-a-contribution-graph) somewhat. Depending
on the shape of the graph, a user liking or upvoting may increase or decrease
their score. For more information, check out
[How Cred Works](https://sourcecred.io/docs/beta/cred).

### Can I manually edit Cred scores for Participants?

No, you cannot manually edit anyone’s Cred score, including your own. If you
feel a person or group is earning Cred that is not equivalent to their
contributions to a project, you can change the weights, which determine how much
Cred each type of contribution earns. A community will determine their own rules
for when to change their community’s weights.

## Grain

For an introduction to what Grain is and how it works, see our dedicated
[How Grain Works](https://sourcecred.io/docs/beta/grain) document.

### How do I earn Grain?

Communities using SourceCred regularly distribute Grain based on participants‘
Cred scores. If you have Cred, then you‘re eligible to earn Grain. Depending on
the project, you might need to explicitly opt-in to receive Grain; for example,
in SourceCred itself, you must
[fill out this form](https://forms.gle/u7NVaYsnbEVhx6PJ9). Note that some
projects might have different names for their Grain, such as SEEDs or Honey or
DAI.

### How does Grain get its value?

The value of Grain depends on the community or project issuing Grain. In
SourceCred itself, every Grain is worth about \$1, thanks to backing from our
sponsors such as Protocol Labs. Whether Grain is valuable in any other community
depends on how that community is using Grain.

### Is Grain always a fixed price?

The price of Grain (and whether Grain has a price at all) depends on the
policies of the community creating Grain.

## Project & Governance

### How is SourceCred governed?

At the moment, SourceCred has a centralized governance model, with our founder
and "Temporary Benevolent Dictator" having final say on decision making.
However, as SourceCred matures, we will be switching to decentralized
governance. We‘re currently building the tools that will enable decentralizing
the project.

### How is this different from being Yet Another Tech Solution to a human problem?

SourceCred is not meant to replace the critical components of human
collaboration, decision making, and social resolution of conflict that help a
community thrive. It enables more effective measuring of meaningful
contributions—such as emotional labor and community cultivation—and rewards
those human caretaking actions, which are historically not valued due to not
being transactional.

### What is a Contribution Graph?

The Contribution Graph is a network of every contribution and participant in a
project, and how they’re connected to each other. You, and every contribution
you make will each be represented as a separate “node” in the graph. SourceCred
uses this Contribution Graph data to create a Cred score for each node via a
modified [PageRank algorithm](http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf).

### Does SourceCred require one governance system across all projects that use it?

No, SourceCred is a technology for communities with their own governance
systems. We do advise however, that while SourceCred is still young, it is
better suited for smaller communities with emotional maturity and a high level
of existing trust.

## Technology & Algorithm

### What is the best way to start using SourceCred in my community or project?

If you have some technical skills and are using currently supported platforms
(GitHub, Discourse, and Discord), take a look at our documentation on
[How To Set Up SourceCred](https://sourcecred.io/docs/beta/setup-guide). Note
that for Discord, you‘ll need the permissions to add a bot to the server.

### How does SourceCred keep track of intangible work? (e.g. organizing meetings, emotional labor, etc.)

Keeping track of intangible contributions is a core part of SourceCred‘s
mission, which any technical algorithm or solution has difficulty tracking. To
solve this, we are using interim solutions like a “Props” channel in Discord,
where anyone can give props to a community member for their contributions. We
are also building a long-term tool called the Creditor, which makes it easy for
members of the community to cleanly reward intangibles such as organizing
meetings or providing emotional support.

### How do I request a feature or plugin for a platform not already offered?

You can request features by
[filing an issue on GitHub](https://github.com/sourcecred/sourcecred/issues).
Also consider dropping by our weekly dev meeting on Mondays at 12pm PT; see
[the SourceCred calendar](https://sourcecred.io/calendar).

### How gameable is SourceCred?

SourceCred strives to be as robust to gaming as possible, but we recognize that
all social systems are gameable to some extent. Rather than trying to make
SourceCred impervious to gaming, we employ a multi-pronged approach with a focus
on transparency and easy community management. The core algorithm, based on
PageRank, has some built-in protections against
[Sibyl attacks](https://en.wikipedia.org/wiki/Sybil_attack); the plugins have a
number of adjustable weights and heuristics, allowing each community to moderate
behaviors as needed. Additionally, since Cred retroactively updates, there is a
natural deterrent against gaming. SourceCred has mostly been used in high-trust
communities, where the natural social cohesion has kept gaming to a minimum. As
SourceCred deploys to projects with lower
[trust levels](https://sourcecred.io/docs/concepts/trust_levels), we‘ll keep
investing in gaming robustness.

### Is my community’s data safe with SourceCred?

SourceCred is not a centralized platform, and doesn‘t store your community‘s
data. It is designed to be transparent, and thus it only operates on publicly
accessible data. All of a community‘s data is stored wherever that community
decides to put their own SourceCred instance—usually on GitHub.
