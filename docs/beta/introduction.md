---
title: 🌱 Introduction
description: An introduction to the basic concepts of SourceCred.
---
Welcome to your new favorite rabbit-hole. This doc will offer you a basic overview of the different parts that make up SourceCred and, provide you with links to additional documentation so you can keep exploring your curiosity. 

### So what IS SourceCred?

SourceCred (in the most basic sense) is a technology that makes the labor of individuals more visible and rewardable as they work together in a project or community. The goal of SourceCred is to use this technology to make rewarding labor as nuanced as human contribution can be. We hope to be one piece in the puzzle of a healthier world where systems serve people as we create together, where financial maximization isn't the end-all be-all goal, and wealth actually flows to those who are creating the value in our world. 

### SourceCred's Core Concepts:

#### Cred

SourceCred uses an algorithm to determine how much value a contribution or contributor added to a project overall. When a contribution is made to a project, SourceCred's purpose is to "see" that contribution and assign it an amount of "Cred" based on how much value it brought to the project as a whole. That Cred flows from the contribution to all the people and other contributions that supported it. In this way, you can imagine how a project could be represented as a "node graph" made up of contribution and people dots (aka "nodes") connected by lines (aka "edges") that flow Cred around to each other based on what supported what. The more edges one contribution has to other important contributions in the project, the more Cred is going to have an opportunity to flow to it. In this way, it's easy to tell by the Cred score which contributions (and contributors) are truly foundational to and support future work in the project.

So how does an algorithm determine how much someone's work is worth in the bigger picture of a project? Sounds a little dystopian right? The algorithm uses what we call "Weights" which are a set of rules stating which kinds of contributions are worth what amounts of Cred. The Weights fo Cred distribution are decided by each community individually, thereby giving a community the opportunity to decide what it values and which actions uphold those values as they work together to create something. Every community using SourceCred can decide for themselves what is valuable and deserving of Cred, and what is not. 

Cred is "non-transferable" in that you cannot sell your Cred, or buy someone else's Cred. It is solely a representation of where value in the project has been created.

If you want to dig deeper into the nuances of Cred, check out our [How Cred Works](./cred) documentation. 

#### Grain

On its own, Cred may be a nice signal of what is valuable and who is really doing the work to make your project successful, but it's hard to pay rent or buy dinner with a Cred score. That's where "Grain" comes in.

Grain is a project-specific digital currency which is minted and distributed to contributors who have Cred in that project. Your Grain is tied to your Cred; as you earn Cred, you also earn Grain. Unlike Cred, Grain is a form of currency and is meant to be transferable both inside and outside of the project.

##### Ways you might end up with Grain in a project that's using SourceCred:

* You worked directly as a contributor, earning Cred -and therefore Grain- in that project.
* You bought Grain with another valuable currency (like ETH or Dollars) from a contributor in that project. 

So how is Grain useful? The transferability of Grain makes it a powerful tool in a number of different ways depending on how your project and/or community is operating. Perhaps you have funding already, but don't know how to distribute it. Maybe you'd like to use it as a tool for governance. Or maybe you'd like a way to allow people outside the project to financially support what you're doing by buying the Grain.

Part of what makes Grain (and SourceCred) so powerful is that it can be applied in many different ways based on the needs and parameters of the community. 

##### Examples of how a project might use Grain:

* Paying contributors with grants or funds it already has based on Cred/Grain.
* Creating a project-specific currency that can be traded for other forms of currency e.g.: ETH or US Dollars). 
* Creating an internal currency that could be used solely for governance or to show support for features/ideas. 

##### Examples of how an individual might use Grain:

* Selling their grain back to the project in exchange for money from the project's budget (essentially wages you can claim by selling your Grain). 
* "Boosting" specific initiatives, ideas, goals, etc in the project by "burning" some of their Grain to make more Cred for that initiative. This creates a small flow of Cred from the initiative back to themselves, as a reward for sponsoring it.
* Selling their Grain to people or groups outside the project who would like to use it for Boosting and incentivizing certain features/decisions.

Follow the rabbit hole deeper by reading our [How Grain Works](https://sourcecred.io/docs/beta/grain) documentation.

See an example of SourceCred's Cred and Grain by checking out [our Cred Instance](http://cred.sourcecred.io/#/explorer) (yup, we're dogfooding!).

### SourceCred's Vision

* the nuance of value
* the bias of payment
* decoupling hours worked from money paid

### How can I engage with SourceCred?

* Internal community
* Using it in your community





\[//](Bring the reader around to the sensation of SourceCred as a functioning community with goals, not just a lofty idea and a lot of theories but no action. Highlight the sensation that we are an actual group of people working together successfully to bring this vision to reality"): # (# Editor's Preface:

This doc is still on the journey to be ready for the public eye. I (LB) as the latest author have left spaces to add content where I don't feel I'm able to fully communicate the point. As you edit this, add content in the sections where you have expertise. I've left descriptions of the content that should exist in *\[italicized brackets]* so that all you need to do is fill in that missing paragraph. 

Let's not pre-publish this one until all the content exists and we can remove this "editor's preface" and all the italicized descriptions.)

SourceCred is an open-source tool for communities to measure and reward value
creation.

# The Problem

We're building SourceCred because we believe the way we value things is broken.
We value people based on their credentials or job titles, not based on the true
values they bring--especially if that value is "soft value" like emotional
labor or leadership. We value organizations based on the profits they can
capture, not the broader effects they have on society. We value the environment
in terms of the resources we can harvest from it, not on the role it plays in
sustaining our collective existence.

# Imagine a Different World

SourceCred offers a new perspective on value. First, we don't think value is
universal. It's contextual (intersubjective), and different communities will
have different perspectives on what is or isn't valuable. 

# The Solution of SourceCred

* *basic functions and features (the nuts and bolts like cred, grain, boosting, contribution graphs, et)*
* *the connection between algorithm and a community's social norms which makes SourceCred more finessed, aligned, empowering, and less game-able.*
* *the economic functions and effects which make SC a rational and intelligent choice that interacts well with the reality of money.]*

For that reason,
SourceCred is an open-source project which any community can set up, tweak, or
reconfigure based on their own needs.

Second, we think value isn't about *transactions*, but about *relationships*.
SourceCred doesn't try to assign a dollar score or price to any contribution or
person. Instead, every contribution or contributor earns
[Cred](concepts/cred.md) based on how it was connected to other
contributions, and how much Cred those other contributions earned.
Mathematically, we do this by constructing a network of contributions called a
Contribution Graph, and then running the CredRank algorithm on it.

Finally, we acknowledge that in order to be sustainable, communities need to
interact with the "real world" economy of dollars and cents. For that reason,
every community can issue [Grain](concepts/grain.md), a community-specific
cryptocurrency. Grain is distributed based on Cred, so it is all earned by
community members and contributors. Sponsors purchase Grain, and then use it
for [Boosting](concepts/boosting.md), which allows them to influence the
Cred scores, and thus the community's priorities. Basically, Sponsors help make
the community economically viable, and in gratitude the community gives
sponsors some infuence over the community's goals, values, and priorities.

# The Strategy

In the short term, SourceCred is focused on supporting open-source crypto
projects. Crypto projects are an ideal fit because they need a way to
distribute the tokens that they natively generate, and need a decentralized,
"new-world" appraoch for doing so--the old world approaches of corporations and
shareholder value just don't fit. The key early adopter is the SourceCred
project itself: we have no corporate structure and no investors, but we reward
everyone in the community via Cred and Grain. (Big thanks to [Protocol
Labs](https://protocol.ai/) for being our first and biggest sponsor.) We're
also thrilled to be partnered with other awesome and idealistic projects like
[MetaGame](https://metagame.wtf/) and
[AraCred](https://aracred.github.io/website/).

In the medium term, we want to make the whole open-source ecosystem
economically sustainable. The core idea of open source is that we can make
better technology, and empower more people, if we give away our work for free
rather than encumbering it with licenses and paywalls. This is an incredibly
powerful idea, but it's held back from its full potential because it depends on
unpaid and overworked volunteers. Once enough open-source projects are using
SourceCred, we will create a "MetaCred" instance that flows Cred and Grain
across the open-source dependency graph. This will ensure that every project in
the ecosystem--from flashy user-facing projects to the core infrastructure they
depend on--will share in the success of the ecosystem. The result will be a
golden age of flourishing open-source.

In the long run, we hope that SourceCred can help unlock big transformations to
align the world economy with our shared values. So many of the thorny problems
facing society seem to come down to us valuing the wrong things. We put a price
on medicines when we should be valuing healthiness. We compensate investment
bankers when we should be appreciating teachers. We "redevelop" rainforests
when we should be stewarding them. We hope SourceCred will unlock the paradigm
shift we need so that we can collectively re-orient.

# Our Community

If you'd like to \[get involved] we'd love to
have you. We don't care about college degrees or credentials. There's no
whiteboard interview. If you have skills, creativity, or empathy to offer, then
come earn some Cred. 😉

# Continued Reading:

Get Involved with building SourceCred

Learn about using SourceCred in your own project or community

Do some more general reading
