---
title: How Cred Works
description: What is Cred, and what is it for?
---
## What is Cred?

As the name suggests, Cred is an important part of SourceCred. Cred is a metric used to describe every contribution and contributor in a project. Each contributor has a Cred score, which is made up of all the contributions they have made to a project. These scores are determined by how important or useful their contributions have been to their community. Your Cred score determines the amount of [Grain](https://sourcecred.io/docs/beta/grain) you earn, which is SourceCred’s digital token, which can be crypto or fictional currency.

### 🧮 What are contributions?
A contribution is any action that has value to the community. Each community determines which actions have value to them, and thus earn Cred. Communities also determine their _weights_, i.e. how much Cred each kind of contribution earns.

For example, if a Crypto community has determined that GitHub pull requests are valuable, they might decide each PR is worth 20 Cred. If Discourse posts are less valuable to the community, those would earn less Cred. Actions that are not seen as contributions, such as playing video games or arguing on the forums, would earn no Cred.

Actions that produce Cred are tracked and measured by plugins (see below). Plugins must be written for each [Platform](/docs/beta/our-platforms) to work with SourceCred.

<figure>
<img src="https://sourcecred.io/img/visuals/sourcecred-graph-example.png" alt="A graph visualization showing nodes connected by lines" />
<figcaption><small><em>(Simplified) Cred Contribution Graph example</em></small></figcaption>
</figure>

### 📈 Edges and Nodes 
As soon as you interact with SourceCred, you will become part of the Contribution Graph, a network of connected contributions. You and every contribution you make will each be represented as a separate node in the graph, each with a Cred score. Nodes are connected by edges, which indicate how they relate to other contributions and contributors. For example, if you create a Discourse post, an edge will go between your node and the Discourse post’s node. This is how Cred flows to you from your contribution.

Edges are directional, indicating the flow of Cred. For instance, when you created your Discourse post node, you get an “inbound” edge from that post, flowing Cred to you. If you referenced another contributor in your post, it would create an “outbound” edge from that post to the referenced contributor, that would flow Cred to them. This makes up the Contribution Graph.

SourceCred converts this graph into a numerical score via a modified [PageRank algorithm](http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf). Every node receives Cred from every node that connects to it. The amount of Cred a node receives is the same as the amount that it sends to other nodes. This means that being connected to a high-Cred node is much more valuable than being connected to a low-Cred node, especially if that high-Cred node isn’t connected to many other nodes. In other words, Cred accumulates at important nodes. 

For example, a major contributor is connected to each of their many contributions, and so has a lot of Cred. A spam post, however, may be connected to almost no other nodes, so it will have very little Cred.


## How Cred Flows
You can visualize Cred flowing through the graph as water flowing through an ecosystem of ponds and creeks. Cred does not accumulate in one place, but rather flows through each pond, constantly moving. It flows between contributor ponds (Cred Flowing), falls as rain (Cred minting), and evaporates from everyone’s ponds over time (Cred Evaporation).

### 💧 Cred Flowing
Every contributor has their own pond, which represents their Cred Score. Your Cred Score is the amount of Cred that is flowing *through* your pond—meaning, the amount entering is the same amount that is simultaneously leaving and flowing to other community members. Each of your contributions is interconnected with other community contributions across different platforms. Contributions are even connected through time: today’s contributions connect to contributions from yesterday, last week, and so forth.

### ☔ Cred Minting
If community members find one of your contributions valuable, they will **Mint**, or _create_, new Cred, and flow it to you. This Cred magically appears out of nowhere and flows in your direction. Cred minting is just like rain, new water falling from the sky into your pond. 

For example, when someone Mints Cred by reacting to your Discord post with an emoji:

- It creates a new reaction node in the graph;
- It creates an edge from the person reacting (you), to that reaction node;
- It creates an edge pointing from the reaction node to the post receiving the reaction.

### 🔥 Cred Evaporation
Since Cred can be created from nothing by community members, there must be a balance so that Cred maintains its worth. Our system is called **Cred Evaporation**, and is similar to how water evaporates from water sources to create rain. For every node on the Contribution Graph, a fixed proportion of its Cred Evaporates away, a proportion called alpha, e.g. an alpha of `0.2` means  every node evaporates 20% of its incoming Cred. The Cred that Evaporates replenishes the source from which Cred is Minted.

📝 **Note:** Cred does _not_ evaporate over time. You will not lose Cred for being absent or inactive.


## Plug-ins

The types of contributions and plugins tracked by the SourceCred algorithm are likely to increase. Currently, your contributions are tracked across the following plugins:


| 💬 [Discord] | 🧵 [Discourse] | ⌨️ [Github]|
| -- | -- | -- |
|Someone gives your post an emoji 👍 💯 <img width="20" alt="SourceCred" src="https://sourcecred.io/img/favicon.png" />| Someone gives your post/reply a ❤️ | You open a pull request |

Each community can also change the weights of how much Cred is Minted from each action or reaction. For example, the SourceCred community uses the SourceCred emoji <img width="16" alt="SourceCred" src="https://sourcecred.io/img/favicon.png" /> to denote extra value, so it Mints more Cred than other emojis. Or, if a community values GitHub pull requests but uses Discourse for down time chats, they could make it so Discourse posts/replies Mint little Cred and GitHub activity Mints more. 

To learn more about each plug-ins SourceCred currently supports, check out their respective plug-in pages:

- [Discord Plugin](/docs/beta/plugins/discord)
- [Discourse Plugin](/docs/beta/plugins/discourse)
- [GitHub Plugin](/docs/beta/plugins/github)


## Want more?
You can read [an in-depth explanation of the SourceCred concepts](https://research.protocol.ai/blog/2020/sourcecred-an-introduction-to-calculating-cred-and-grain/) by Evan Miyazono from [Protocol Labs].


[Discord]: https://sourcecred.io/discord
[Discourse]: https://discourse.sourcecred.io/
[GitHub]: https://github.com/sourcecred/sourcecred
[Protocol Labs]: https://research.protocol.ai/
