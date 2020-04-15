---
title: 🧐 How SourceCred Works
sidebar_label: 🧐 How It Works
description: Overview of what SourceCred is and how it works
---

SourceCred is an algorithm that evaluates the value of, and shows the relationships between, the contributions that collaborators make to a project. 

Anything a contributor does to support a project they're working on - from the technical (like writing code or filing bug reports), to the logistical (like organizing events or work sessions), to the emotional (like mediating difficult discussions or helping someone feel welcome) is considered a contribution that has some amount of value. 

Each of these contributions made to the project are connected to each other in a large graph of "nodes" (the contributions and contributors) and "edges" (the lines that connect nodes together). This graph shows the way each contribution and contributor in the project relates to the other nodes it affects or supports. 

This large graph of every contribution made to a project and the ways those contributions are connected is then analized by a [PageRank algorithm](https://en.wikipedia.org/wiki/PageRank) which generates a score for each contribution and contributor based on how connected they are to the rest of the graph. The more valuable the contribution is, the higher it's score. 

These value scores are called "Cred". 

So how does the algorithm determine how valuable a contribution is, and therefore how much Cred should it get? A contribution shows that it's valuable and earns Cred when it is connected to other valuable contributions in the graph. 

For example, say you have a meeting and during that meeting you come up with an incredible idea. That idea eventually turns into a new plugin or feature that really moves the project forward. All the concrete results of your idea will connect through the graph back to that one meeting where it was first dreamt up. Because the node that represents your idea is connected to all the contributions that came out of it, it will end up with a lot of Cred. And so will you, as the person who had that original idea, because contributors are connected to the contributions they've created or helped with. 

However, this determining of value doesn't rely solely on an algorithm. The community and maintainers of a project have a lot of influence over this process of Cred attribution through the use of "weights". 

Weights are the way you and your community decide how important different types of contributions are. Does your community really value reviewing? You can give the action of reviewing a high weight and allow more Cred to flow to those types of contributions. Are some types of contributions feeling spammy? You can decrease the weights for that contribution type accordingly. 

Not only does this allow a project to signal what it finds valuable, but it can also help incentivize the contributions your project needs most.

So what is SourceCred?

SourceCred is an algorithm and platform that helps communities: determine what they value, clarify which contributions move their projects forward, and recognize the efforts of it's contributors.

If you'd like to run the algorithm on your community and experiment with weights, you can get started with that [here]().
