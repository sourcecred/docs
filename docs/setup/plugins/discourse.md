---
title: Discourse
description: Setting up the Discourse plugin.
---



The Discourse plugin assigns Cred to contributors participating on 
Discourse forums, for example by posting, replying to posts, or liking.


The plugin does this by fetching data using the Discourse API in anonymous mode.
This means it does not require any credentials and we can start loading data
right away. It also means that non-public contributions (e.g. private messages and closed
topics) are not included in the graph. The data is temporarily cached, but the
source of truth for the Discourse plugin is always the live server hosting the
Discourse instance. That means that if content is deleted on Discourse, it will
also disappear from the Discourse plugin (after a cache refresh)



## Cred flow

The below diagram illustrates a typical pattern of Cred flow in Discourse.

![Cred flow diagram](https://research.protocol.ai/blog/2020/sourcecred-an-introduction-to-calculating-cred-and-grain/sourcecred_contribution_graph.svg)

Here we can see {SB: if we go with this example, can flesh out with whimsical
diagram and text}

The full set of node and edge types used by the Discourse plugin are defined below.

### Nodes

The Discourse plugin creates the following types of nodes in the contribution graph:

- **Topic**:

A GitHub repository, e.g. [sourcecred/sourcecred]. The repo node will be
directly connected to all of the PRs and issues in the repository. The repo
node has no timestamp, so setting a weight on the repository will have no
effect (i.e. repos do not mint Cred). This may change when we switch to
[CredRank].

[CredRank]: https://github.com/sourcecred/sourcecred/issues/1686

[sourcecred/sourcecred]: https://github.com/sourcecred/sourcecred

- **Post**:

A GitHub repository, e.g. [sourcecred/sourcecred]. The repo node will be
directly connected to all of the PRs and issues in the repository. The repo
node has no timestamp, so setting a weight on the repository will have no
effect (i.e. repos do not mint Cred). This may change when we switch to
[CredRank].

[CredRank]: https://github.com/sourcecred/sourcecred/issues/1686

[sourcecred/sourcecred]: https://github.com/sourcecred/sourcecred

- **Like**:

A GitHub repository, e.g. [sourcecred/sourcecred]. The repo node will be
directly connected to all of the PRs and issues in the repository. The repo
node has no timestamp, so setting a weight on the repository will have no
effect (i.e. repos do not mint Cred). This may change when we switch to
[CredRank].

[CredRank]: https://github.com/sourcecred/sourcecred/issues/1686

[sourcecred/sourcecred]: https://github.com/sourcecred/sourcecred

- **User**:

A GitHub repository, e.g. [sourcecred/sourcecred]. The repo node will be
directly connected to all of the PRs and issues in the repository. The repo
node has no timestamp, so setting a weight on the repository will have no
effect (i.e. repos do not mint Cred). This may change when we switch to
[CredRank].

[CredRank]: https://github.com/sourcecred/sourcecred/issues/1686

[sourcecred/sourcecred]: https://github.com/sourcecred/sourcecred


### Edges

The Discourse plugin creates the following kinds of edges (connections between nodes) 
in the contribution graph:

- **Authors**:

An "authors" edge connects an author (i.e. a user or bot) to a post (i.e. a
PR, issue, comment, or review). If the post contains the text "paired with
@other-author", then from SourceCred's perspective, that post will have
multiple authors, all of whom receive an equal share of the Cred.

The "paired with" flag is case-insensitive, and may optionally include a
hyphen or colon, so that the below are all valid "paired with" designators:

> paired with @wchargin
>
> paired-with @wchargin
>
> paired with: @wchargin
>
> Paired with @wchargin
>
> Paired With @wchargin
>
> Paired With: @wchargin
>
> Paired-With: @wchargin
>

- **References**:

A references edge connects a post (i.e. a PR, issue, comment, or review) to
another referencable node (i.e. a node that corresponds to a specific url on
GitHub).

If the reference is pointing to a user, we call it a "mention", but
from SourceCred's perspective it's the same kind of edge.

- **Contains Post**:

A references edge connects a post (i.e. a PR, issue, comment, or review) to
another referencable node (i.e. a node that corresponds to a specific url on
GitHub).

If the reference is pointing to a user, we call it a "mention", but
from SourceCred's perspective it's the same kind of edge.

- **Replies to**:

A references edge connects a post (i.e. a PR, issue, comment, or review) to
another referencable node (i.e. a node that corresponds to a specific url on
GitHub).

If the reference is pointing to a user, we call it a "mention", but
from SourceCred's perspective it's the same kind of edge.

- **Likes**:

A react edge connects a user (or bot) to a PR, issue, or comment. There are
subtypes of reaction edges corresponding to the type of reaction; currently we
support thumbs-up, heart, and hooray emojis. In the future, we might reify the
reactions as nodes, so as to support reaction-minted Cred, in the style of
[like-minted Cred].

[like-minted Cred]: https://discourse.sourcecred.io/t/minting-discourse-Cred-on-likes-not-posts/603





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
other plugins. Either create one or upgrade from a previous `project.json`
version to make sure it's at version `0.3.1` or greater at the top of the file.
In our example we'll be using the latest version `0.5.0`.

```js
[
  {
    "type": "sourcecred/project",
    "version": "0.5.0"
  },
  {
    /*...*/
  }
]
```

Next, we specify we want to use Discourse, by adding an `discourseServer`
object.

```js
[
  {
    "type": "sourcecred/project",
    "version": "0.5.0"
  },
  {
    "discourseServer": {
      "serverUrl": "https://discourse.sourcecred.io"
    },
    /*...*/
  }
]
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

## Status and Caveats

This plugin is currently in Beta. It assigns Cred scores that are reasonable and
robust for a [trust level] 3 community.

Currently there are two general approaches to minting Cred you can take with the
Discourse plugin. Activity-minted and like-minted Cred (or a hybrid of the two).
Activity-minted Cred means Cred would be minted for each new topic or post
created. While like-minted Cred mints new Cred for each like given.

The plugin defaults to using like-minted Cred and for most communities this will
be the better approach. Unlike activity-minted Cred this allows people to
validate contributions. People soon learn their likes work as "this is valuable
and I'd like to see more of this" signals, which incentivizes creating
high-quality posts.

The caveat is that it creates some "popularity contest" dynamics. Where memes
and/or heavily promoted posts might receive more likes than makes sense for the
relative value they've added. Something which would be easy to game, making it
less suitable for lower trust levels for the time being.

Another thing to keep in mind, is that only public posts are included for Cred
calculation. Private categories and private messages for example receive no
Cred. This both creates an incentive to have discussions in public as much as
possible and is necessary for security as private data could otherwise leak.
