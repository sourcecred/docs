---
title: 🔮 What is SourceCred?
description: Overview of what SourceCred is and how it works
---

Everything people do to support a project—like writing code, filing bug reports, organizing meetups, or even mediating hard discussions—is considered a contribution.

These contributions are connected to each other based on their relationships. For example, a pull request may fix a particular bug, and a code review may review that pull request.

This network of contributions and relationships form a contribution graph. SourceCred applies the [PageRank algorithm](https://en.wikipedia.org/wiki/PageRank)  to this graph, generating a score, called cred for every contribution.

The basic idea is: a contribution earns cred if it is connected to other contributions that earn lots of cred. Contributors are connected to the contributions they've helped with, which means that they also earn cred.

The project's community and maintainers have a lot of influence over this process. They can reconfigure SourceCred weights and parameters. For example, they could assign extra weight to some very important contributions, or decrease the weights of contributions that seem spammy. They can also add heuristics to do this automatically.
