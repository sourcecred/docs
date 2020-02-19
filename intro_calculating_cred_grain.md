# An introduction to calculating Cred and Grain

I’m starting from the assumption that you have some familiarity with the SourceCred project. If you don’t I’d suggest you check out Dandelion's [20 minute talk (+Qs) from SustainWeb3](https://www.youtube.com/watch?v=yVTqRLekRl4), and some of the other documents in this repo.

Overall, I’m going to throw around a little math, but you should be able to get solid intuition on this if you’re comfortable talking about a [graph](https://en.wikipedia.org/wiki/Graph_theory) as a set of nodes and edges connecting them, where the edges can be directed and have weights. I’ll also talk some about [the PageRank algorithm](https://en.wikipedia.org/wiki/PageRank), for computing “importance” of nodes in a graph based on the “importance” of nodes connected to it, but I’ll motivate the intuition behind it as well when I cover it.

## The high level overview

SourceCred takes information about contributions and generates what we call a weights graph, and this post will first explain what that graph is and where it comes from. From this weights graph, it runs PageRank to generate a graph of Cred. This graph of Cred is then used to distribute grain. The grain can then be kept or traded, and soon will be able to be used to influence the weights graph in the future. This overall process is diagrammed in the figure below.
 
![](https://docs.google.com/drawings/u/1/d/s50mxZJ1DFD_yr4OFUxUd9g/image?w=551&h=250&rev=57&ac=1&parent=1kRxnuKAogf_cE0y6u2QYcjQimE0-jrBZ-LxcXKOUITw)

> Figure 1. A very high level overview of how SourceCred allocates Cred and Grain, distinguishing between actions taken by contributors and those taken by the SourceCred algorithm.

The rest of this doc outlines how collaboration data is gathered and structured, and how the exact amounts of Cred and Grain are calculated, and ends with some future directions SourceCred as a project is considering.

## Components of contributing in SourceCred

SourceCred first generates a weights graph from the input data. In this graph, a node is a contributor or contribution, and edges represent some sort of connection between the nodes. These connections are intended to include all possible ways that a contribution or contributor on a platform can express dependencies, thanks, or flows of value. Examples would include anything from a mention on a forum post to liking or merging a PR on GitHub.

It's worth pausing for a moment to make a distinction.  In graph theory, a **weighted graph** has weights on the edges, whereas, the SourceCred **weights graph** has weights on both edges and nodes.  I'll probably manage not to talk about weighted graphs unless I'm talking about an example from graph theory.

#### Nodes:

Contributions are represented as nodes in the graph, and are given addresses to identify them uniquely. These addresses include a prefix, which takes the form: `[organization making the plugin that generates the node] + [name of the plugin] + [type of contribution]` (e.g. topic/post/user/like).

Contributors are also represented as nodes in the graph. These nodes are similarly prefixed, and connected to contributions with directed edges, as illustrated in the figure below. For example, if an author node creates an issue, the author node gets an incoming edge from the issue node. Or if an author of a Discourse post mentions another contributor in the post, the post creates an outbound edge coming from the author.

Lastly, initiatives are another type of node that serve as a high level place to connect relevant nodes and discuss governance. It's similar to a tracking issue, but generalized across the weights graph, providing a way to organize planned work for a well-scoped task.

#### Weights:

Both nodes and edges have weights, and an edge object in the SourceCred implementation can have forward and backwards weight. We’ll get into what these weights mean shortly, but for now, it’s worth noting that these weights can easily be set by address prefix. Setting by prefix is implemented as a multiplicative update; for example, setting issue comments to be worth twice an issue emoji reaction creates a 2:1 ratio that is preserved by decreasing GitHub’s edge weights by 2 relative to those of Discourse. Additionally, an edge can start and end on the same node, which could be relevant when a piece of content is edited, or an contribution references itself.
  
![](https://docs.google.com/drawings/u/1/d/sIDpfiaPlACrxNScrfsISkQ/image?w=186&h=230&rev=47&ac=1&parent=1kRxnuKAogf_cE0y6u2QYcjQimE0-jrBZ-LxcXKOUITw)

> Figure 2: An example of a weights graph, where the nodes would be contributors or contributions, and the directed, weighted edges are connections. It’s a [directed graph](https://en.wikipedia.org/wiki/Graph_theory#Directed_graph) with weights on nodes and edges.

#### Timestamps:

Additionally, both edges and some nodes have timestamps. Edges are associated with actions or events, and as such, always have a timestamp. For nodes that correspond to a contribution, those nodes have a timestamp corresponding to the moment of the contribution. However, nodes corresponding to contributors do not have time stamps, since the contributors exist in the algorithm across time.

#### Summary up to this point:

Now that we know about components of the weights graph, their properties, and how they fit together, let’s cover how they’re generated.



## Generating the weights graph

#### Plugins:

SourceCred uses APIs of collaboration platforms to gather information about contributions. Currently there are plugins for GitHub and Discourse ([code](https://github.com/sourcecred/sourcecred/tree/master/src/plugins)), and we’re enthusiastic to have more plugins, so we can account for contributions in different venues. This includes Discord (in progress), and could extend to Twitter, Reddit, or citations on the [arXiv](https://arxiv.org/) or [eprint](https://eprint.iacr.org/).

#### Weight parameters:

Because these plugins incorporate data from all sorts of contributions and output a single directed graph with weights (for nodes and edges), there needs to be a way to quantitatively compare actions (e.g. authoring a GitHub issue vs responding or referencing it). To accomplish this, there’s a set of constants that determine weights for nodes and edges. For an example set of constants, see the below figure, captured from [sourcecred.io/cred/timeline/@sourcecred/](https://sourcecred.io/cred/timeline/@sourcecred/) (follow the link and click the “Show weight configuration” button).

![](https://lh6.googleusercontent.com/BDSrcvjcCXXfKQ0NSiHIYuAh8fvTaE0Akl0g2-PLdB88fv5TXZS7btltL0YTe77TLOT7nyImct7sPrKATbAQKUwukM3bdxgVfIJCf-xDZo0nvGnFINMoqXq41glKAI9hA2EnThed)

> Figure 3. A set of weight sliders to set parameters controlling the relative weights of different contributions.

Additionally, parameters, cred, and grain are all scoped to a community. This means that the community that supports a project sets and controls the parameters. For that matter, it’s worth reiterating that (lowercase) cred and grain generated for a project are specific to that project. SourceCred is about providing community control, keeping humans in the loop, both for gaming mitigation and general adaptability. At the bottom line, it’s important to keep the humans in control, because good governance technology only works with the consent of the governed.

#### Manual input:

It’s also worth noting that not all contributions occur on platforms with automated data fetching, and thus the capability exists to individually add them to the weights graph directly at this stage. It’s clear that there will always be data that has to be incorporated manually, and how to incorporate those contributions, especially those not easily quantified, remains an active area of discussion.

#### Merging graphs:

A plugin will use the API for the collaborative workspace app or platform to generate a graph of nodes and edges. One interesting caveat is that there isn't necessarily one most-intuitively correct way to merge two weights graphs if they share either edges or nodes (i.e. how would we calculate the combined weight). Currently, the graph nodes are nearly entirely disjoint, the weights are added together, and identities are collapsed into one.

#### Summary up to this point:

So at this point, we’ve got data from all our sources combined in one directed graph, where contributions and contributors are nodes, interactions and connections between nodes are edges; both nodes and edges have a relative weight based on parameters the community has set, and we’re ready to run PageRank on it.

## SourceCred’s PageRank

The next goal will be to generate an evaluation of the relative importance of nodes based on our weights graph, specifically the weights of the nodes and edges.

#### PageRank explained elsewhere

Before reading on, it’s important to understand what PageRank does. There are other good explanations out there, and keeping this brief seems useful, so I won’t add another explanation. If you like over preparing, Brilliant.com’s explanation of [Markov Chains](https://brilliant.org/wiki/markov-chains/#transition-matrices), [Stationary Distributions](https://brilliant.org/wiki/stationary-distributions/) and [their quiz](https://brilliant.org/practice/basic-markov-chains) is more than sufficient. If you’re a visual thinker, [these slides](https://www.cl.cam.ac.uk/teaching/1516/InfoRtrv/lecture8-link-analysis-2x2.pdf) provide some nice figures.

<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/PageRank-hi-res.png" width="400">

> Figure 4. An illustration of PageRank, in which the size of each node is proportional to the total size of the nodes linking to it.

#### Stationary distribution intuition

The simplest formulation of PageRank operates over an unweighted graph, treating all links as equivalent, as illustrated in the figure above. It assigns all outbound links equal probability and calculates the stationary distribution of node weights. (Intuitively, the stationary distribution is the equilibrium fraction of water that ends up in each node “tank” if you run a pump along each edge for a while – for “reasonable” graph configurations you’d expect the water distribution to end up the same regardless of where you dump the water initially.)

#### Stationary distribution as an eigenvector

If you’ve spend more time in linear algebra land, you’ll be pleased to hear that common way to compute this (in algebraic graph theory) is to convert the graph to a matrix _P_ where each entry <img src="https://render.githubusercontent.com/render/math?math=P_{uv}"> is the transition probability from node _u_ to node _v_. Each dimension corresponds to a node, and the matrix maps from all nodes to all nodes. Then finding the stationary distribution is the same as finding [the eigenvector](https://www.youtube.com/watch?v=PFDu9oVAE-g) of the transition matrix that corresponds to eigenvalue 1; by the definition of an eigenvector, this vector is the distribution of value to each node such that if value flowed down each edge in proportion to its weight, the resulting value distribution would remain the same.

#### Incorporate edge weights

We can adapt the algorithm to account for edge weights on the input graph fairly intuitively – we could add weights to the links by increasing the number of edges for some types of actions (e.g. 👍=1 edge, ♥️=2 edges). In the probability matrix formulation, it’s simple to increase the transition probability of one edge. Then, instead of assigning equal probability to all outbound edges, we can simply normalize the weights so that they sum to one and this provides us with transition probabilities needed for <img src="https://render.githubusercontent.com/render/math?math=P_{uv}">.

#### Incorporate node weights

There’s also a cleverly simple way to account for the existence of node weights. One requirement for the existence of a stationary distribution that was skipped is the concept of ergodicity, wherein every state must be reachable from any other state, given a long enough probabilistic walk across the graph’s edges†. To achieve ergodicity, SourceCred uses a "teleportation" system by adding a probability, ⍺, of teleporting to a random location in the graph. SourceCred currently implements this with a seed node, which all nodes teleporting to with likelihood ⍺. From the seed node, the probability of landing on a given node in the graph is then given by the node weights. If we use _A_ to describe the weights of each node in a vector form, then our old transition matrix <img src="https://render.githubusercontent.com/render/math?math=P_{uv}"> becomes the new transition matrix <img src="https://render.githubusercontent.com/render/math?math=(1-\alpha)P_{uv} + \alpha A">. The stationary distribution is then the vector <img src="https://render.githubusercontent.com/render/math?math=\vec v"> such that <img src="https://render.githubusercontent.com/render/math?math=\left((1-\alpha)P_{uv} + \alpha A\right)\vec v = \vec v">.

#### The origin of Cred

In this way, Cred originates at the weighted nodes and flows out to actions from there. Interestingly, this is mathematically equivalent to adding edges to each and every node, with edge-weight proportional to ⍺ times the node weight. We can interpret the necessity of teleportation in the following way: because some contributions may receive but flow no cred, there need to be sources of Cred to calculate an equilibrium value distribution, which requires some contributions to mint cred.

#### Cred-minting philosophy

As a matter of design philosophy, we believe cred should be minted at moments where there is review of an action, rather than the action itself. This reduces the danger of spam and reinforces the idea that contributors dictate what is valuable. For other projects adopting SourceCred, contributions that mint cred could also be actions performed by a moderator or maintainer.

#### Summary up to this point:

In this way, PageRank takes weights in and outputs scores that value contributions based on their relationship to each other. The eigenvector <img src="https://render.githubusercontent.com/render/math?math=\vec v"> then consists of the Cred scores for the various nodes, including the contributors, so we’ve accomplished our goal!

## Cred over time

#### Time-based Cred constraints

SourceCred has additionally innovated on PageRank to accommodate properties that Cred should demonstrate over time. The most important properties in this respect are that:

-   a contributor should never lose cred. They ought to become more diluted as other contributors continue to earn new cred, but they’ll still continue to earn Grain on that Cred.
-   a past action that was recently found to be valuable in the present should cause new Cred to flow to that action.

#### Time epochs and fibration

To simplify the computational overhead and storage required to compute Cred over time, SourceCred is moving toward a fibration model where a node is added per contributor, per unit time (currently weekly for SourceCred). In this model, epoch nodes intermediate flows to a user from any nodes during a period of time, and have a fixed transition probability to the user’s node, rather than a weight from which transition probabilities are calculated. The remaining transition probability is then shared between the seed node (for the teleportation vector) and the other node weights. This will be implemented by distinguishing graph edges, which have fixed weights, from markov edges, which have fixed transition probabilities from epoch nodes. This is then input into the mechanism that calculates the transition probabilities.

## Grain dynamics

#### How much Grain is generated

Once SourceCred calculates the Cred for individual contributors, that Cred is linked to an identity that is an amalgamation of their identities across the platforms (e.g. GitHub handle or Discord username). A constant amount of SourceCred Grain (¤) is produced per unit time, currently 15000¤ per week. This amount is distributed according to two different distribution mechanisms.

-   20% of the grain is “fast,” and is disbursed to nodes in proportion to the cred earned by each node in the past week. This is intended to reward new participants.
-   80% of the grain is “slow,” and is disbursed in proportion to the difference between total grain you've been distributed, and what that node’s proportional fair Cred would be over all history

As a result, if you didn't do anything this week, you have only slow Grain. Alternatively, if you joined this week, you’ll only have fast Grain. The fast component can potentially over-distribute grain, but it will get diluted by other contributions.

#### How Grain is traded:

Grain payouts are currently tracked by Dandelion in an observable notebook linked to in [this Discourse thread](https://discourse.sourcecred.io/t/sourcecred-contributor-payouts/298).  As a result, actually receiving Grain is an opt-in process.  If you opt in, there may be financial or tax liabilities; if you don't, it currently seems like grain is just a number in a list.  Additionally, Grain distributions will vest over time in order to smooth out the peakiness of grain distribution, as described in [this Discourse thread](https://discourse.sourcecred.io/t/grain-vesting/636). Even now, Grain can be sold or given. In fact, [Protocol Labs](https://protocol.ai/) supports SourceCred by purchasing Grain directly from contributors. At present, the transfer of Grain is executed by recording changes to the observable notebook on GitHub [here](https://github.com/sourcecred/cred).

## Future roadmap features

#### Boosting:

The next big feature on [the SourceCred roadmap](https://discourse.sourcecred.io/t/sourcecred-beta-roadmap/422) is boosting, outlined in [this discourse post](https://discourse.sourcecred.io/t/cred-boosting/257). The expectation is that anyone would be able to spend their grain by permanently staking it on a node. This action would increase that node’s weight, and adds an edge in the graph from the node back to the individual who boosted it. It’s worth noting, however, that boosting of some times of nodes, like issues, PRs, or initiatives, makes more sense then being able to boost others, like users for instance.

#### ERC20 Grain:

SourceCred also intends to create Grain as an ERC20 token, outlined in [this discourse post](https://discourse.sourcecred.io/t/an-erc20-to-track-grain/386). It’s expected that running the Cred calculation will be too heavy for a smart contract, but an oracle could provide the Cred values to the chain, allowing both Cred and Grain to be accounted for on-chain.

#### Meta-cred and Meta-grain:

We also hope that other projects will adopt and use SourceCred, which will result in the creation of multiple project-specific Cred and Grain values. We should be able to create a meta-cred graph, where each node is a project (rather than a contribution) and edges are dependencies; at this point, meta-cred and meta-grain allow us to flow value across the complete ecosystem.

#### Decentralized governance:

Using cred or grain for governance is not on the current roadmap, but it’s pretty intuitive how the system might work, with weights being set by a DAO. Decentralizing the governance is definitely part of the plan, but the project isn’t quite ready for it yet.

Additionally, it’s worth additionally looking at github for [the current project status](https://github.com/sourcecred/sourcecred/blob/master/README.md).

  
† There’s also a requirement of aperiodicity which is worth mentioning but not describing at this level. I would encourage a curious reader to continue their exploration of ergodicity on [wikipedia](https://en.wikipedia.org/wiki/Ergodicity#Markov_chains), [Brilliant](https://brilliant.org/wiki/ergodic-markov-chains/), or your favorite reference.
