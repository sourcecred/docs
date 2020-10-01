---
title: 🧮 How Cred Works
description:
  A description of what Cred is; how it functions, flows, and effects projects
  or individuals.
---

## What is Cred?

As the name suggests, Cred is an important part of SourceCred. Cred is a metric
used to describe the value which every contribution and participant has added to
a specific project. Each participant has a "Cred score", which reflects how
valuable all the contributions they have made to a project are. How high these
scores are is determined by how important or useful their contributions have
been to their community. Your Cred score determines the amount of
[Grain](/docs/beta/grain) (a project-specific digital token which can be crypto
or fictional currency) you'll earn.

### 🧮 Defining Contributions

A contribution is any action done for the community and its goals. Each
community determines which types of action have value to them, and therefore
will earn Cred. Communities do this through configuring their weights, aka the
algorithm's rules about how much Cred each type of contribution earns.

For example; if a community primarily works in GitHub and wants to incentivize
their participants to be making meaningful code contributions, they may decide
that each PR which gets merged is worth a high amount of Cred. If Discourse
forum posts aren't very necessary in the community yet, they may decide that
forum topics will earn less Cred for being posted/liked. Actions that are not
valuable or are actively disruptive to the community and its goals, such as
playing video games or having a flame-war on the forums, would earn no Cred. As
the community grows and its needs change, the weights can be modified to reflect
its new state via the governance mechanisms of the specific community.

Contributions are tracked and measured by Plugins (SourceCred programs that
intake data from a specific platform and output Cred scores for the
contributions made there). Each Plugin is written for a specific platform so
that it will work with SourceCred. Continue reading this doc for more Plugin
info, and/or check out our list of
[currently available Plugins](/docs/beta/plugins/github) for SourceCred.

<figure>
<img src="https://sourcecred.io/img/visuals/sourcecred-graph-example.png" alt="A graph visualization showing nodes connected by lines" />
<figcaption><small><em>(Simplified) Cred Contribution Graph example</em></small></figcaption>
</figure>

### 📈 Nodes, Edges, & the Contribution Graph

As soon as you make any kind of contribution to a project using SourceCred, you
will become part of that project's "Contribution Graph". The Contribution Graph
is a network of every contribution and participant, and how they're connected to
each other. You, and every contribution you make will each be represented as a
separate "node" in the graph (the green and blue dots in the example graph
above). SourceCred, uses this Contribution Graph data to create a Cred score for
each node via a modified
[PageRank algorithm](http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf).

These contribution and participant nodes are connected to each other by "edges"
(the lines between node dots in the example image above). Cred flows between
nodes along these edges. If two nodes are connected by an edge, you know they're
flowing Cred from one node to the other in at least one direction. For example:
if you were to create a new Discourse topic in your project's forum, a new node
would be created in the Contribution Graph for the topic and a new edge would
run between the topic and you as the creator. If that topic gets a lot of
"likes" from the community, the node's Cred score would go up. As a result, some
of that increased Cred from the topic-node would flow along that edge back to
the you-node, increasing your own Cred score.

## How Cred Flows

You can visualize Cred flowing through the graph as water flowing through an
ecosystem of ponds (nodes) and creeks (edges). Cred does not accumulate in one
place, but rather flows through each pond, constantly moving. It flows through
creeks between participant ponds (Cred Flowing), falls as rain (Cred Minting),
and evaporates from everyone’s ponds over time (Cred Evaporation).

### 💧 Cred Flowing

Edges are directional like a creek or an arrow, showing which way the Cred is
flowing. For instance: when you create a Discourse topic, it flows Cred along
the edge from it as the topic to you as the author. That Cred was "outbound"
from the topic-node, and flowing "inbound" to the you-node. There can be
outbound and inbound edges between the same two nodes.

In this same way, every node receives Cred from every other node that has an
edge flowing to it. A node with a lot of inbound edges (like an integral piece
of code infrastructure) will end up with a higher Cred score than a node with
very few edges (like a troll post with no likes). In this way, Cred accumulates
at the nodes which are important to the success of the project, encouraging
participants to create work that not only brings value to the community, but
also stands the test of time.

When a node has a very high Cred score, it will have a bigger pot of Cred to
split between the other nodes connected to it - like a large pond that has more
water to send along its rivers to other ponds. That means that if you are
connected to a node with a high Cred score, you will be receiving a relatively
higher amount of Cred from it. If you are connected to a node with a low Cred
score, you will receive a relatively lower amount of Cred from it.

### ☔ Cred Minting

If a contribution is valuable, there are mechanisms for the community to signal
their appreciation of it. These mechanisms vary between platforms, and each
community can choose which of these mechanisms will mint Cred for their
community, and how much, through their community weights. Each mechanism “mints”
(aka creates) new Cred for that contribution node. This Cred minting is like new
water falling into the contribution’s pond in the form of rain. That new water
flows through the creeks to the other ponds downstream of it.

For example, say there is a community that values Discourse posts, so they
decide that each Discourse post will recieve 10 Cred for every like it recieves.
Then, a participant in that community writes an extremely insightful topic on
Discourse. Every time another community member uses the "like" mechanism to show
they really loved the topic, a little rain falls into the topic's pond. That new
water then flows to downstream ponds such as the author of the forum topic, or
other topics it references.

### 🔥 Cred Evaporation

Since Cred can be created (minted) from nothing by the reactions of community
members, there must be a balance so that Cred maintains its worth. Just like
water evaporates from ponds and creeks to create rainclouds, Cred evaporates to
replenish the source from which Cred is minted. For every node on the
Contribution Graph, a consistent portion of its Cred evaporates away. The
evaporation rate can be toggled within the weights to be high or low depending
on the needs of your community.

📝 **Note:** Evaporation does _not_ mean you will lose Cred for being absent or
inactive. Just as Cred is always gently evaporating across the entire ecosystem,
Cred is also always flowing across the ecosystem even during times of individual
inaction.

### Plug-ins

In SourceCred, we mainly use "Plug-ins" to "scrape" the activity data from a
particular platform (e.g.: Discord, Github, etc). For SourceCred to understand
the data in a particular platform, our engineers first need to create a Plug-in
for that platform specifically. For now, you can see which Plug-ins are
available and learn more about each via our
[Plug-in Docs](/docs/beta/plugins/github). We'll be working on more Plug-ins as
time goes on and the needs of our ecosystem span more platforms.

### Want More?

For even more information about how Cred works, you can read
[](https://research.protocol.ai/blog/2020/sourcecred-an-introduction-to-calculating-cred-and-grain/)["SourceCred: an introduction to calculating cred and grain"](https://research.protocol.ai/blog/2020/sourcecred-an-introduction-to-calculating-cred-and-grain/)
by SourceCred participant Evan Miyazono from
[Protocol Labs](https://research.protocol.ai/).
