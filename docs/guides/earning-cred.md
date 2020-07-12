---
title: 💧 Earning Cred
description: How Cred flows and is created from contributions
---
### 💧Cred, the Water of SourceCred
As the name suggests, [Cred](https://sourcecred.io/docs/concepts/cred) is an important piece of the SourceCred puzzle. Here, we will examine minting Cred, flowing Cred and Cred evaporation.


As soon as you interact with SourceCred, you will become part of the Contribution Graph (i.e. a network of connected contributions). You and each contribution you make will be represented as a separate node in the graph, each with a Cred score. How Cred flows between nodes is dependent on the data source, configuration weights and other factors. 

You can visualize Cred flowing through the graph as water flowing through an ecosystem of ponds and creeks. Cred does not accumulate in one place, but rather flows through each pond, constantly moving. It flows between contributor ponds (Cred Flowing), falls as rain (Cred minting) and evaporates from everyone's ponds over time (Cred evaporation).

### 🏄🏾 Cred Flowing
Every contributor has their own pond, which represents their Cred score. Your Cred Score is the amount of Cred that is flowing *through* your pond - the amount entering is the same amount that is simultaneously leaving, flowing to other community members. Each of your contributions is interconnected with other community contributions across different platforms. Contributions are even connected through time - today's contributions connect to contributions from yesterday, last week, etc.

### ☔ Cred Minting
If community members find one of your contributions valuable, they will **Mint**, or in other words, create, Cred, and flow it to you. This Cred  magically appears out of nowhere and flows in your direction. Cred minting is just like rain, new water falling from the sky into your pond.

Example:<br/>
When someone Mints Cred by reacting to your Discord post with an emoji...

- It creates a new reaction node in the graph
- It creates an edge from the person reacting (you), to the reaction node
- It creates an edge pointing from the reaction node to the post receiving the reaction
  
Minting new cred is also a change for the entire Contribution Graph. It will therefore induce a change on how Cred flows to others so as to keep everything in balance. Again, we need to make sure that water is circulating well with no congestions.

### 💡 At a Conceptual Level 

For example, when you react to a message with <img width="20" alt="SourceCred" src='https://sourcecred.io/img/favicon.png' /> in Discord :

  - It creates a new reaction node in the graph, which mints Cred 
  - It creates an edge from the person reacting (you), to the reaction node
  - It creates an edge pointing from the reaction node to the message receiving the reaction
  
Minting new Cred is also a change for the entire Contribution Graph. It will therefore induce a change on how Cred flows to others so as to keep everything in balance. Again, we need to make sure that water is circulating well with no congestions. 



  The types of contributions and plugins tracked by the SourceCred algorithm are likely to increase. Currently, your contributions are tracked across the these active plugins in the following ways:


| 💬 [Discord] | 🧵 [Discourse] | 🦠 [Github]| 🥇 [Initiatives]
| -- | -- | -- | -- |
|Someone gives your post any emoji 👍 💯<img width="20" alt="SourceCred" src='https://sourcecred.io/img/favicon.png' />| Someone gives your post/reply a ❤️ | You open a pull request  | You accomplish a specific task approved by the community

 Each community can also change the weights of how much Cred is Minted from each action or reaction. For example, the SourceCred community uses the SourceCred emoji <img width="20" alt="SourceCred" src='https://sourcecred.io/img/favicon.png' /> to denote extra value, so it Mints more Cred than other emojis. Or, if a community values GitHub pull requests but uses Discourse for down time chats, they could make it so Discourse posts/replies Mint little Cred and GitHub activity Mints more. 



### 🔥 Cred Evaporation
Since Cred can be created from nothing by community members, there must be a balance so that Cred maintains its worth. Our system is called **Cred evaporation**, and is similar to how water evaporates from all water sources. For every node on the Contribution Graph, a fixed proportion of its Cred evaporates away, and that fixed proportion is called alpha. The Cred that evaporates replenishes the source from which Cred is Minted, replenishing steams and creating a closed water cycle.


### 🍝 Want more?
[Here] is a broader explanation of the concepts behind SourceCred by Evan Miyazono from [Protocol Labs Research].

[cred]: cred.md
[Discord]: https://discord.gg/XVFwCm
[Discourse]: https://discourse.sourcecred.io/
[Github]: https://github.com/sourcecred/sourcecred
[Initiatives]: https://sourcecred.io/docs/guides/initiatives
[Here]: https://research.protocol.ai/blog/2020/sourcecred-an-introduction-to-calculating-cred-and-grain/
[Protocol Labs Research]: https://research.protocol.ai/



