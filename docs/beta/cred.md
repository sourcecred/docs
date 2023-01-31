---
title: 🧮 How Cred Works
description:
  A description of what Cred is; how it functions, flows, and effects projects
  or individuals.
---

## What is Cred?

As the name suggests, Cred is the core idea of SourceCred. Cred is a score which
is earned by making contributions to a project. A participant's score reflects
how valuable their contributions were to the project. Participants are then
rewarded with digital currency, or "[Grain]", based on their Cred.

[grain]: /docs/beta/grain

### Properties of Cred

- **Cred is community-specific**

Every community using SourceCred has its own independent "instance", along with
its own Cred scores. You have "cred _in a project_", not just "cred overall".
Every community can control how Cred flows within its instance.

- **Cred is not transferable**

A participant's Cred score is like their reputation. It's something that is
associated with them, but it's not an asset that they own. Cred scores can't be
transferred, or bought or sold.

- **Cred is retroactive**

Cred scores can retroactively update to reflect new information. For example,
someone might write a great forum post that goes initially overlooked. At first,
it earns little Cred, but once it gets discovered, the Cred score will
retroactively increase. This frees participants to focus on doing great work,
without needing to worry that all of it gets appreciated right away.

- **Cred is transparent**

Cred is computed by an algorithm. The algorithm is open-source, and all of the
data and parameters are public. This means that Cred scores are transparent:
it's always possible to inspect a Cred score and find out how it was computed.
Cred is also designed to be inspectable: you can determine why a participant has
the cred that they do, and what their most valued contributions were.

## Calculating Cred

At a high level: we calculate Cred by first defining a "Contribution Graph",
which is a network of contributions, participants, and connections between them.
Every contribution is represented as a node in that graph. Then, the project
chooses certain contributions to "mint" Cred, which means that those
contributions are a source of new Cred. This could happen through automatic
rules (e.g. every merged pull request mints Cred, or every liked forum post
mints Cred). Or the minting could happen through manual human review. Finally,
Cred "flows" across the connections in the graph. The result is that every
contribution earns Cred if it was connected to, or depended on by, other things
that earned Cred. Participants earn Cred if they author or contribute to
high-cred Contributions.

### The Contribution Graph

The Contribution Graph is a data structure that tracks all of the contributions
to a project. It's a [Graph], or a network of nodes and edges. In a Contribution
Graph, every node represents either a contribution, a participant. Edges then
represent connections between these objects. For example, suppose that this doc
went through 10 different drafts before being published. Each draft would be
represented by a node, and each draft would have an edge pointing to its author,
and an edge pointing to the previous draft.

[graph]: https://en.wikipedia.org/wiki/Graph_(abstract_data_type)

<figure>
<img src="https://sourcecred.io/img/visuals/sourcecred-graph-example.png" alt="A graph visualization showing nodes connected by lines" />
<figcaption>
  <small>
      <em>A stylized Contribution Graph. @-nodes represent participants.</em>
  </small>
</figcaption>
</figure>

### Generating the Graph

For SourceCred to work, it needs data on what contributions exist, and how they
are connected. It gets this data primarily via plugins that export data from
platforms where the community operates. Right now, we have plugins for [GitHub],
[Discourse], and [Discord].

[github]: https://github.com/
[discourse]: http://discourse.org/
[discord]: https://discord.com/

As an example, consider a Discourse forum post (poke around [our forums] for
some examples!). The post is itself a contribution, and it flows Cred to its
author, to the post it replies to, and to any posts or users that it references.

[our forums]: https://discourse.sourcecred.io

We're also working on adding a "cred editor" (or "Creditor") which will make it
easier to track intangible or offline contributions, like emotional support,
organizing meetings, etc.

You can read [docs on the individual plugins][plugin-docs].

[plugin-docs]: /docs/beta/plugins/github

### How Cred Flows

You can visualize Cred flowing through the graph like water flowing through a
system of ponds (nodes) and creeks (edges). The water level in each pond depends
on the creeks flowing Cred in from adjacent nodes: how many creeks there are,
how large the adjacent ponds are, and how strong the currents are. The most
important thing to know is that the system is always in dynamic equilibrium: the
amount of Cred a particular node has is exactly equal to the amount of Cred that
is flowing into it, and is also exactly equal to the amount of Cred flowing out.
The Cred is always balanced.

There's one special node in the graph worth mentioning. Unlike other nodes, it
doesn't represent a definite contribution or participant. It is the "seed" node,
and it is the source of minted Cred. In our hydrological metaphor, we could
think of it as a "spring"; a spot where the minted Cred bubbles out of the
ground so that it can flow into the rest of the graph. The seed node is
connected to every node that was chosen to mint Cred, and it flows that Cred to
those nodes so the Cred can start its journey through the graph.

However, as stated above, the Cred flow must always be in equilibrium, with a
node's out-flows precisely equal to its in-flows. If Cred starts flowing from
the seed node, how can that be? Where does the seed node's Cred come from?

The answer is that a little bit of Cred is always seeping away from every other
node in the graph and returning to the seed. It's like the ground that the Cred
flows across is a bit porous, and some of it is always seeping down into an
aquifer that feeds the seed node. Technically, we call this process "Cred
radiation". The proportion of each node's Cred that radiates away is called
"alpha", and it is a number between 0 and 1. If alpha is high (closer to 1),
then Cred will tend to stay close to the nodes minting Cred, because it cannot
flow very far before returning to the spring. If alpha is low (close to 0), it
can flow very readily across the graph. When alpha is low, the choice of which
nodes mint Cred becomes less important, because the Cred can easily flow far
away from the minting nodes.

### Choosing Weights

A key tenet for SourceCred is to let communities decide what they value. One of
the tools for doing so is choosing "weights", which are important parameters to
the algorithm. There are two major types of weights: node weights and edge
weights.

#### Node Weights

Node weights determine how much Cred is minted at a given node. For example, if
you want every post in a forum to mint some Cred, you could set a positive node
weight on forum posts. However, that would probably not be a good decision.
Because it's very easy to make lots of forum posts, people might game the Cred
scores by spamming lots of low-effort posts. Instead, you might set a positive
weight on likes on the forum. Unlike a post, a like indicates that someone else
found the post valuable, and acts as a lightweight review pass on whether the
post was valuable. Further heuristics can modify the weights, e.g. ensuring that
only verified or trusted users' likes will mint Cred, and that if a user likes
their own post, it won't mint Cred.

#### Edge Weights

Edge weights determine how Cred flows once it is in the graph. Suppose we have a
Discourse post with exactly two edges out: one edge to the author of the post,
and one edge to a person mentioned by the post. Who should receive more Cred:
the author, or the person mentioned? If you think they should both get equal
Cred, you could leave both edges with a default weight of 1×. However, if you
think that the author should get twice as much Cred, you could give the
authorship edge a weight of 2×, or give the reference edge a weight of 0.5×.

Each SourceCred plugin comes with default weights, which we've calibrated based
on our own experiments. However, you're welcome to change them to suit your
needs!

## Common Questions

### If I react to something, do I lose Cred?

One common misconception about Cred is that flowing Cred means losing Cred, i.e.
that Cred gets "spent". For example, if you add a reaction to a message on
Discord, then some of your Cred flows to that message. Intuitively, you might
think that this means you're "losing" Cred. However, this isn't actually the
case! Remember, as we said above, that the amount of Cred at a node is always
equal to the amount of Cred flowing away. That means that all of your Cred is
always flowing away from you. When you add a reaction to a message, you just
change where that Cred is going to flow. Every other reaction you've made will
flow a little bit less Cred, so as to keep balance.

### Will Cred scores get gamed?

One of the biggest concerns about SourceCred is often that Cred will get gamed.
Yup, that's totally possible. Gaming occurs in all social systems: see [this
interesting exploration of how office politics gets gamed][defmacro].

[defmacro]: https://defmacro.substack.com/p/how-to-get-promoted

SourceCred's approach to gaming is to make the algorithm transparent and
community-controlled. That means that if someone starts gaming it, it's easy for
others in the community to identify that gaming is happening, and then make
changes to correct it. Those changes can involve adjusting the weights, or
adding new heuristics to the algorithm. Since Cred is retroactive, once the
instance has been updated, the attacker's ill-gotten Cred will retroactively
disappear. One of the reasons that SourceCred's Grain distribution algorithm
focuses on long-term Cred is precisely so that people who game SourceCred in the
short term don't get unjust rewards.

## Want More?

For even more information about how Cred works, you can read ["SourceCred: an
introduction to calculating cred and grain"][miyazono-blog], a blog post by
SourceCred participant Evan Miyazono of [Protocol Labs][pl].

[miyazono-blog]:
  https://research.protocol.ai/blog/2020/sourcecred-an-introduction-to-calculating-cred-and-grain/
[pl]: https://research.protocol.ai/
