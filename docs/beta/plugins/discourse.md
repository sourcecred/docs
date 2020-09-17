---
title: Discourse
description: Setting up the Discourse plugin.
---

The Discourse plugin assigns Cred to contributors participating on Discourse
forums; for example, by posting, replying to posts, or liking posts.

The plugin does this by fetching data using the Discourse API in anonymous mode.
This means that, unlike other plugins, it does not require any credentials and
we can start loading data right away. It also means that non-public
contributions (e.g. private messages and closed topics) are not included in the
graph. The data is temporarily cached, but the source of truth for the Discourse
plugin is always the live server hosting the Discourse instance. That means that
if content is deleted on Discourse, it will also disappear from the Discourse
plugin (after a cache refresh).

## Cred flow

The full set of node and edge types used by the Discourse plugin are defined
below.

### Nodes

The Discourse plugin creates the following types of nodes in the contribution
graph:

- **User**:

A Discourse user account, e.g.
[@decentralion](https://discourse.sourcecred.io/u/decentralion/). User accounts
do not mint Cred, so setting a node weight would have no effect. Using the
identity plugin, it's possible to "collapse" user nodes with other identity
nodes into a single, canonical identity. For example, if a contributor had a
Discourse user account and a GitHub account, then the identity plugin can
collapse those identities together.

Users are connected to posts they author, to posts they like, and to posts that
mention them.

- **Bot**:

{SB: below is copied from GitHub page. Still true for Discourse? Do we support
Discourse bots?} A Discourse user account that has been explicitly marked as a
bot, via inclusion in bots.js. This is useful so we can filter out bot accounts
from receiving grain or showing up in the Cred rankings.

Bots have the same connections as users.

- **Topic**:

A Discourse topic, e.g.
[https://discourse.sourcecred.io/t/about-champions-and-heroes/291](https://discourse.sourcecred.io/t/about-champions-and-heroes/291).
Typically referred to as "threads" in other forum software, a topic is a
collection of posts. When users create a new topic and are prompted to create a
post, the post they create is actually the first post in the topic, not the
topic itself. A topic is just a collection of posts. A topic node will be
connected to its author (user node creating the topic), all posts in the topic,
and any references to the topic.

[https://discourse.sourcecred.io/t/about-champions-and-heroes/291](https://discourse.sourcecred.io/t/about-champions-and-heroes/291)

- **Post**:

A Discourse post, e.g.
[https://discourse.sourcecred.io/t/about-champions-and-heroes/291/7?u=s_ben](https://discourse.sourcecred.io/t/about-champions-and-heroes/291/7?u=s_ben).
Everything under a topic is a post, including the first post and all subsequent
replies. A post node will be connected to its author (user node that created the
post), any replies to that post, and references to that post. {SB: elaborate
more on references here? Is it

[https://discourse.sourcecred.io/t/about-champions-and-heroes/291/7?u=s_ben](https://discourse.sourcecred.io/t/about-champions-and-heroes/291/7?u=s_ben)

- **Like**:

A Discourse like, e.g. {SB: how to link to like? Here's a URL I pulled from the
describption field for a like node from the maker forum:
https://forum.makerdao.com/t/discussion-liquidity-mining-impacts/2898/12 Looks
the same as a post URL?}.

When a user likes a post, a like node is created that is connected to the author
of the like (user that liked) and the liked post.

[INSERT EXAMPLE]

### Edges

The Discourse plugin creates the following kinds of edges (connections between
nodes) in the contribution graph:

- **Authors**:

An "authors" edge connects an author (user or bot) to a topic or post they
created.

- **References**:

A references edge connects a topic or post to another referencable node (i.e. a
node that corresponds to a specific url on Discourse ). {SB: taken from GitHub
plugin, still correct? Just say referenceable nodes are topics/posts/users?}

If the reference is pointing to a user, we call it a "mention", but from
SourceCred's perspective it's the same kind of edge. {SB: taken from GitHub
plugin, still correct?}

References in Discourse can be either hyperlinks to referencable nodes, or
quoted parts of other posts {SB: I'm kind of guessing here, would be good to get
more detailed explanation, and perhaps include a illustrative example (e.g. a
quote that links to both text and image if supported?). This brings up another
questions I've had for a while: when you select and click the "Quote" button in
the UI, it automatically creates a reply, presumably creating both a reply edge
and reference edge. But what if you've already started a reply, and are
selecting quotes from the UI from a post different than the one you started
replying to? What if you're quoting multiple posts in the same reply?}

- **Reply to**:

A reply-to edge connects a post to the post it is replying to.

The Discourse plugin creates the following kinds of edges (connections between
nodes) in the contribution graph:

- **Creates Like**:

A "creates like" edge connects a like node to its author and liked post or
topic. {SB: just guessing here, only adding because it's an edge type in an
`weights.json` file I'm looking at for reference}

---

{SB: below is copied from GitHub plugin page. Attempted to translate imagined
parental relations to Discourse, but could be wrong. Does Discourse have
parent/child relationships?}

- **Has Parent**:

A has-parent edge connects a "child" node to its "parent" node. Here's a table
summarizing these relationships:

| Child  | Parent |
| ------ | ------ |
| Post   | Topic  |
| Reply  | Post   |
| Like?? | Post?? |

## Status and Caveats

The Discourse plugin is currently in Beta. It assigns Cred scores that are
reasonable and robust for a [trust level]{SB: needs link} 3 community.

Currently, there are two general approaches to minting Cred you can take with
the Discourse pluginL activity-minted and like-minted Cred (or a hybrid of the
two). Activity-minted Cred means Cred would be minted for each new topic or post
created. While like-minted Cred mints new Cred for each like given.

The plugin defaults to using like-minted Cred. For most communities this will be
the better approach. Unlike activity-minted Cred, like-minted Cred allows people
to validate contributions. People soon learn their likes signal "this is
valuable and I'd like to see more of this", which incentivizes the creation of
high-quality posts.

The caveat is that it creates some "popularity contest" dynamics, where memes
and/or heavily promoted posts might receive more likes than makes sense for the
relative value they've added. It's something which would be easy to game, making
it less suitable for lower trust levels for the time being.

{SB: the below para wasn't in the original docs, but is just me speculating
based on past convos. We may want to remove if we can't provide enough guideance
for it to be useful} Another caveat is that when a Discourse forum is very new,
and does not have much content, activity-minted Cred may be more suitable, at
least in the beginning. This is because new forums are often "lower stakes"
(unless you're paying significant sums of money according to scores right away,
or have other strong incentives for gaming). In new forums, the community is
likelier to be smaller, higher trust, and less susceptible to gaming. In
addition, you may want to incentivize raw activity in order to build up enough
content to attract more users.

Another thing to keep in mind is that only public posts are included for Cred
calculation. Private categories and private messages, for example, receive no
Cred. This both creates an incentive to have discussions in public as much as
possible, and is necessary for security as private data could otherwise leak.

{SB: below are the commands from the original docs on this (which I can't seem
to find to link to..:/). Mainly including just to raise the issue of where we
want these instructions to live. Here? In setup guide? CLI docs? Do we want to
point to configuration docs for turnign the dial between activity-minted and
like-minted Cred?}

---

### With the discourse command

There's a `discourse` CLI command available for convenience that loads a forum
into your `SOURCECRED_DIRECTORY`.

```bash
node bin/sourcecred.js discourse https://discourse.sourcecred.io
```

More details can be found with:

```bash
node bin/sourcecred.js discourse --help
```

This approach is convenient if you're just interested in analyzing a forum. But
to use Discourse in combination with other plugins we need the next approach.

### Loading from a `project.json`

Unlike the CLI command, this approach allows combining a Discourse forum with
other plugins. Either create one, or upgrade from a previous `project.json`
version to make sure it's at version `0.3.1` or greater at the top of the file.
In our example we'll be using the latest version `0.5.0`.

```js
[
  {
    type: "sourcecred/project",
    version: "0.5.0",
  },
  {
    /*...*/
  },
];
```

Next, we specify we want to use Discourse by adding an `discourseServer` object.

```js
[
  {
    type: "sourcecred/project",
    version: "0.5.0",
  },
  {
    discourseServer: {
      serverUrl: "https://discourse.sourcecred.io",
    },
    /*...*/
  },
];
```

There's one argument here:

- **`discourseServer.serverUrl`**: The URL to the Discourse server in question.

From there we can call load with the updated `project.json` file.

```bash
node bin/sourcecred.js load --project ./project.json
```

If all goes well, you should see Discourse mentioned in the progress output.

```
  GO   discourse
  GO   discourse/topics
 DONE  discourse/topics: 30s
  GO   discourse/likes
 DONE  discourse/likes: 1m 32s
 DONE  discourse: 2m 2s
```

_Note: depending on the size of the forum and how much data is already cached
this may take several minutes._

[trust level]: ../../concepts/trust_levels.md
[v0.5.0 release]: https://github.com/sourcecred/sourcecred/issues/1679
