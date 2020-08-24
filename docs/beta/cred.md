---
title: How Cred Works
description: What is Cred, and what is it for?
---
## What is Cred?

As the name suggests, Cred is an important part of SourceCred. Cred is a metric used to describe the value which every contribution and contributor has added to a specific project. Each contributor has a Cred score, which reflects all the contributions they have made to a project. How high these scores are is determined by how important or useful their contributions have been to their community. Your Cred score determines the amount of [Grain](https://sourcecred.io/docs/beta/grain) (a project-specific digital token which can be crypto or fictional currency) you'll earn.

### 🧮 Defining Contributions

A contribution is any action that has value to the community. Each community determines which types of action have value to them, and therefore will earn Cred. Communities do this through configuring their *weights*, i.e. the algorithm's rules about how much Cred each type of contribution earns.

For example; if a community primarily works in GitHub and wants to incentivize their contributors to be making meaningful code contributions, they may decide that each PR which gets merged is worth a high amount of Cred. If Discourse forum posts aren't very necessary in the community yet, they may decide that forum topics will earn less Cred for being posted. Actions that are not valuable or are actively disruptive to the community and its goals, such as playing video games or having a flame-war on the forums, would earn no Cred. As the community grows and its needs change, the weights can be modified to reflect its new state via the governance mechanisms of their specific community. 

Contributions are tracked and measured by Plugins (SourceCred programs that intake data from a specific platform and output Cred scores for the contributions made there). Each Plugin is written for a specific platform so that it will work with SourceCred. Continue reading this doc for more Plugin info, and/or check out our list of [currently available Plugins](/docs/beta/plugins/github) for SourceCred.

<figure>
<img src="https://sourcecred.io/img/visuals/sourcecred-graph-example.png" alt="A graph visualization showing nodes connected by lines" />
<figcaption><small><em>(Simplified) Cred Contribution Graph example</em></small></figcaption>
</figure>

### 📈 Nodes, Edges, & the Contribution Graph

As soon as you make any kind of contribution to a project using SourceCred, you will become part of that project's "Contribution Graph". The Contribution Graph is a network of every contribution and contributor, and how they're connected to each other. You, and every contribution you make will each be represented as a separate "node" in the graph (the green and blue dots in the example graph above). Each node in the graph has its own Cred score.

These contribution and contributor nodes are connected to each other by "edges" (the lines between node dots in the example image above). Cred flows between nodes along these edges. If two nodes are connected by an edge, you know they're flowing Cred in at least one direction. For example: if you were to create a new Discourse topic in your project's forum, a new node would be created in the Contribution Graph for the topic and a new edge would run between the topic and you as the creator. If that topic gets a lot of "likes" from the community, the node's Cred score would go up. As a result, some of that increased Cred from the topic-node would flow along that edge back to you, increasing your own Cred score.

Edges are directional, like arrows showing which way the Cred is flowing. For instance: when you created that Discourse topic, it flowed Cred along the edge from it as the topic to you as the author. That Cred was "outbound" from the topic-node, and "inbound" to the you-node.

SourceCred converts this graph into a numerical score via a modified [PageRank algorithm](http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf). Every node receives Cred from every node that connects to it. The amount of Cred a node receives is the same as the amount that it sends to other nodes. This means that being connected to a high-Cred node is much more valuable than being connected to a low-Cred node, especially if that high-Cred node isn’t connected to many other nodes. In other words, Cred accumulates at important nodes. 

For example, a major contributor is connected to each of their many contributions, and so has a lot of Cred. A spam post, however, may be connected to almost no other nodes, so it will have very little Cred.

## How Cred Flows

You can visualize Cred flowing through the graph as water flowing through an ecosystem of ponds and creeks. Cred does not accumulate in one place, but rather flows through each pond, constantly moving. It flows between contributor ponds (Cred Flowing), falls as rain (Cred minting), and evaporates from everyone’s ponds over time (Cred Evaporation).

### 💧 Cred Flowing

Every contributor has their own pond, which represents their Cred Score. Your Cred Score is the amount of Cred that is flowing *through* your pond—meaning, the amount entering is the same amount that is simultaneously leaving and flowing to other community members. Each of your contributions is interconnected with other community contributions across different platforms. Contributions are even connected through time: today’s contributions connect to contributions from yesterday, last week, and so forth.

### ☔ Cred Minting

If community members find one of your contributions valuable, they will **Mint**, or *create*, new Cred, and flow it to you. This Cred magically appears out of nowhere and flows in your direction. Cred minting is just like rain, new water falling from the sky into your pond. 

For example, when someone Mints Cred by reacting to your Discord post with an emoji:

* It creates a new reaction node in the graph;
* It creates an edge from the person reacting (you), to that reaction node;
* It creates an edge pointing from the reaction node to the post receiving the reaction.

### 🔥 Cred Evaporation

Since Cred can be created from nothing by community members, there must be a balance so that Cred maintains its worth. Our system is called **Cred Evaporation**, and is similar to how water evaporates from water sources to create rain. For every node on the Contribution Graph, a fixed proportion of its Cred Evaporates away, a proportion called alpha, e.g. an alpha of `0.2` means  every node evaporates 20% of its incoming Cred. The Cred that Evaporates replenishes the source from which Cred is Minted.

📝 **Note:** Cred does *not* evaporate over time. You will not lose Cred for being absent or inactive.

## Plug-ins

The types of contributions and plugins tracked by the SourceCred algorithm are likely to increase. Currently, your contributions are tracked across the following plugins:

| 💬 [Discord](https://sourcecred.io/discord)                                                                            | 🧵 [Discourse](https://discourse.sourcecred.io/) | ⌨️ [Github](https://github.com/sourcecred/sourcecred) |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------- |
| Someone gives your post an emoji 👍 💯 <img width="20" alt="SourceCred" src="https://sourcecred.io/img/favicon.png" /> | Someone gives your post/reply a ❤️               | You open a pull request                               |

Each community can also change the weights of how much Cred is Minted from each action or reaction. For example, the SourceCred community uses the SourceCred emoji <img width="16" alt="SourceCred" src="https://sourcecred.io/img/favicon.png" /> to denote extra value, so it Mints more Cred than other emojis. Or, if a community values GitHub pull requests but uses Discourse for down time chats, they could make it so Discourse posts/replies Mint little Cred and GitHub activity Mints more. 

To learn more about each plug-ins SourceCred currently supports, check out their respective plug-in pages:

* [Discord Plugin](/docs/beta/plugins/discord)
* [Discourse Plugin](/docs/beta/plugins/discourse)
* [GitHub Plugin](/docs/beta/plugins/github)

## Want more?

You can read [an in-depth explanation of the SourceCred concepts](https://research.protocol.ai/blog/2020/sourcecred-an-introduction-to-calculating-cred-and-grain/) by Evan Miyazono from [Protocol Labs](https://research.protocol.ai/).