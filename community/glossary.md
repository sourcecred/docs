# Glossary

This is the SourceCred glossary of terms. While some of these terms can be
easily defined with a search, the definitions here are specific to SourceCred.
If you would like to suggest a change to a term or addition of a term,
please [open an issue](https://github.com/sourcecred/docs/issues).


## User Glossary

The "User Glossary" is ideal if you want to understand SourceCred 
from the perspective of using it in your project. For example, you
might need to understand what terms SourceCred uses to define people
or currency.

### Champion

A champion is an individual that starts an initiative with a determined promise
to finish it. The individual generally takes charge of a well-scoped task, and
provides clear direction and confidence about completing it. By calling someone
a champion, you are placing faith in their ability as a leader and visionary.

#### What does this mean for development?

While the term champion may inspire mental imagery of soliders and stallions,
in the development battle field, champions wear much less flashy armor. A champion
might be:

 - A team member that proposes a new feature, clearly describes the problem that it solves, and then proceeds to get feedback and create a plan for implementation. The team member them executes, all the while being clear about timeline, goals, and having clear communication.
 - An open source contributor who commits to working on a particular component, and proceeds to follow through and becomes a primary maintainer of that component.
 - An individual that provides leadership for an under-represented or under-served demographic in the community, and helps to empower that group to have a stronger voice.

#### When should someone be called a champion?

It may be the case that a contributor doesn't want to be called a champion directly,
so it's suggested to use the term in a verb sense. For example, you might say:

> This individual has offered to champion this initiative.

which is a different thing than:

> This individual is a champion.

The first suggests taking action, which is empowering and positive. The second says something about the character of the individual, which could be unwanted if it places un-needed
stress or expectation on the individual.

#### References

 - [@Beanow definition on discourse](https://discourse.sourcecred.io/t/about-champions-and-heroes/291)

### Cred

SourceCred, as the name might suggest, is all about attributing cred. Cred is a metric that describes every contribution and contributor in a project to give a sense of how important they were.

For example, forum posts can earn cred. If I post on the [sourcecred discourse](https://discourse.sourcecred.io/) and earn 5 cred, and another user posts and their post earns 10 cred, we can say that the other post is considered twice as important as my post.

The contributions are arranged in a [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) where contributions are nodes, and have edges indicating how they relate to other contributions. For example, if someone writes a reply to my post, there will be an edge connecting the reply and my post. Edges have "types" that give some information about what kind of edge they are; that edge might have an "IS_REPLY" type. The connections are also directional, meaning their are relationships that connect nodes to it, and relationships that connect nodes from it. An edge without a direction is considered bi-directional.

Contributors — like you or me — are also nodes in the graph, and are connected to the contributions that they create. So there is an "AUTHORS" edge connecting me (the author) to my post.

SourceCred converts this graph into a numerical score via [PageRank](https://en.wikipedia.org/wiki/PageRank). Basically, we assign cred to the nodes so that every node receives cred from every node that connects to it, and in turn sends its cred to every node that connects from it. This means that cred accumulates at important nodes. For example, a core maintainer is connected to all of the posts, comments, and issues that they’ve written, so they have a lot of cred. On the other hand, a spam post on the forum may be sparsely connected, or connected to almost no other nodes, so it will have very little cred. (PageRank is a very interesting algorithm, and was actually the basis of Google search! If you want to learn more, I recommend the original [PageRank paper](http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf)).

One important thing to remember is that amount of cred a node receives is the same as the amount that it sends to other nodes. This means that being connected to a high-cred node is much more valuable than being connected to a low-cred node, especially if that high-cred node isn't connected to many other nodes.

We can explore all of this in the [SourceCred explorer](https://sourcecred.io/prototype/). To walk through this in detail, see this [post](https://discourse.sourcecred.io/t/a-gentle-introduction-to-cred/20).

#### References

 - [cred on discourse](https://discourse.sourcecred.io/t/a-gentle-introduction-to-cred/20)

### Grain

A big part of SourceCred’s vision is the desire to create project-specific cryptoassets, called "Grain" that represent contribution to or support of a project. These cryptoassets
hold promise to make open-source projects financially sustainable which is
currently an unsolved problem.

#### Properties of Grain

 - Grain is always project-specific. For example, "SourceCred grain" and "Maker Community grain" would be wholly different assets.
 - Every week, new grain is created, or "harvested" by the project.
 - Most of the harvested grain goes to people that have directly worked on the project.
 - A fraction of the harvested grain flows to those who hold grain in the project’s dependencies. For example, if you have grain in Python, then you would continually earn a small share of NumPy’s grain, and so forth.
 - Grain is a freely transferrable and exchangeable asset. Most likely it will be implemented as an [ERC20 token](https://cointelegraph.com/explained/erc-20-tokens-explained), meaning that it can be bought or sold using the [0x Protocol 2](https://0x.org/).

#### How is Grain Acquired?

There are three ways to acquire grain in a project:

  - Contribute to the project directly.
  - Financially support the project (either directly, or by buying grain from a contributor)
  - Own grain in the project’s dependencies.


#### Grain as Proof of Support

In all of these cases, owning grain means that you've supported the project in some way: either via direct contribution, financial support, or by supporting a dependency. Therefore, grain is a proof of support for a project.

#### Rewards for Grainholders

How might an individual that holds grain be rewarded? There are several ideas.

 - Projects might provide prioritized attention to grain holders in feature requests, bugs, or other interactions warranting support.
 - Grain holders might have a say in project governance.
 - Crypto projects could even give tokens directly to grainholders. (For example, a cryptocurrency could direct 10% of its block reward to everyone who holds grain in the project itself.) **Note from @vsoch, I don't really understand this one**

Rewarding grainholders would be in the best interest of the project: if owning grain confers valuable rewards or access, then more people will want to buy it, increasing the price. This will mean a greater reward for the project’s developers, meaning more people will work on improving the project itself. The result will be a positive economic feedback cycle.

Another way of raising funds for grain-supported projects will be licensing along the lines of a Harberger Grain License 3, whereby proprietary dependencies of open projects will need to pay a tax, and the tax consists of buying and burning a project’s grain.

#### SourceGrain as Economic Scaffolding

Grain can serve a lot of economic functions for open-source projects:

 - It provides a new way to support an open-source project: by buying its grain.
 - It provides a way for contributors to earn money for their work: selling the grain they earn for contributing to the project.
 - It provides funding for widely-depended on open-source infrastructure: such projects will earn grain in all of their many dependencies.
 - It lets users of a project who need prioritized support or access to acquire it, by paying the developers.
 - It provides rewards for early investors in successful projects, both via grain appreciation, and via dividends from dependent projects.

And in this light, you can think of grain as as producing general-purpose economic infrastructure for open-source projects. It would not be inaccurate to say that SourceCred exists so that grain can be a reality.

#### In the wild

[Here](https://github.com/sourcecred/sourcecred/issues/1425) is an example of an issue 
discussing grain in context of the sourcecred software, and [here](https://observablehq.com/@decentralion/credsperiment-week-16) is an observablehq notebook that shows how
grain works in the current "cred-speriment."

#### References

 - [Grain on sourcecred discourse](https://discourse.sourcecred.io/t/grain-a-project-specific-cred-powered-token/147)
 - [sourcegrain by @decentralion](https://github.com/sourcegrain/mission)

## Community Glossary

The "Community Glossary" is ideal if you want to participate actively
in the SourceCred community. Terms that are used commonly used in commonity forums,
issue trackers, or other discussion platforms are included here.

### bikeshedding

#### Definition

Bikeshedding means talking (or even arguing) about a small detail instead of a larger issue at hand. 
If you imagine building a house and having a bike shed outside, it would be akin
to angsting over the color and fun name for the bike shed instead of working on
actually finishing the house. At the end of the day, you won't have a place to live
because you were lost in details that didn't matter.

#### In the wild

If you take a look at [sourcecred](https://github.com/sourcecred/sourcecred/search?q=bikeshedding&type=Issues), there are several instances of a mention of bikeshedding.
Here is an example from @decentralion:

> It would probably be best to split this into two PRs, one which adds the badges and one which adds the colors, as color choices are always an ample source of bikeshedding :)

In the above statement, he recognizes that contributors are likely to get distracted
with color choices, and suggests splitting a piece of work into two parts to not
hold up adding the badges. 

#### References

 - [What is bikeshedding](https://css-tricks.com/what-is-bikeshedding/)


### deep then wide

SourceCred is still a very young project. As we grow it, we have a choice of priorities: 

 - do we want to go "wide" (adoption by lots of projects) or 
 - "deep" (intensive usage by a few projects)?


If you are familiar with depth vs. breadth when it comes to searching, this idea
is similar to that. In the next sections, we'll talk about each option, and
what it would mean for development and the future of the project.

#### What does it mean to go wide?

Going "wide" is easier. SourceCred can run on any GitHub repository, so we have a path for engagement with the entire GitHub community. We could focus on getting more and more projects to try running SourceCred, and then convert them to regular usage. If we went down this route, we would focus on features that make the existing cred scores more salient and engaging — for example, making it easy to generate "weekly reports" showing the new cred being earned by contributors.

As an added bonus to going wide, progress is much easier to measure, as it’s easier to quantify the number of projects using SourceCred, but hard to quantify the amount of value that SourceCred is adding to any particular project.

#### What does it mean to go deep?

Going "deep" is more challenging. It means finding a way to make SourceCred deeply and durably valuable to individual communities — not as a passing interest, but as something that gets a lot of community engagement, and becomes a part of how that community operates and thinks about itself.

Why would we want to go deep first? It would mean tackling the harder parts first, and
focusing on the needs of the SourceCred community. Until SourceCred can do a good or even
optimal job of assigning cred within SourceCred itself, it's not ready for sharing with other
communities. Once this is a reality (and we've gone deep), then it can be possible
to think about going wide.

#### References

 - [deep then wide on discourse](https://discourse.sourcecred.io/t/deep-then-wide/102)
