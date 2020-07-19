---
title: Discourse
description: Setting up the Discourse plugin.
---



## Installing

All plugins are currently bundled with SourceCred and don't need additional
installation. The Discourse plugin is included as of [version 0.5.0 of
SourceCred][v0.5.0 release].

## Setup

The Discourse plugin does not require any credentials as it uses the API in
anonymous mode. We can start loading data right away.

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
