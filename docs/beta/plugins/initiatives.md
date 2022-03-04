---
title: Initiatives
description: Setting up the Initiatives plugin.
---

The SourceCred Initiatives plugin adds contributions to the graph using data
from JSON files following the [Initiatives concept]. Its source can be found
[here][plugin source].

## Status and Caveats

This plugin is currently in Beta, and tech support for it is limited since it
has not been actively developed in over a year.

One caveat is that an Initiative mixes objective data (who did what) with
subjective data (how valuable was that). In SourceCred it's a feature that we
can retroactively update those subjective weights. The objective data helps to
have constructive discussions about "do we have our facts straight?", and helps
to remember what made an Initiative valuable in a future discussion.

Try to avoid shaping the objective data to fit your subjective needs, such as
leaving out a contribution because you feel the weight should be lower than some
other contributions.

The biggest shortcoming of this plugin currently is around _inclusivity_.

Creating / updating Initiatives is rather technical, as you need to hand write a
JSON file and understand how the plugin works to do so. It also requires a
review process because this plugin allows almost arbitrary additions to the
Graph, which adds another barrier to being recognized. Validating whether
everything has been correctly attributed is also not easy in the current UI,
adding an additional technical barrier.

We're aware of this issue, and plan on improving this with more accessible
tools. In the meantime, if you're using this plugin it's important to be aware
of these barriers and support your community in having access to fair
recognition.

## Installing

All plugins are currently bundled with SourceCred and don't need additional
installation. The Initiatives plugin is included as of [version 0.5.0 of
SourceCred][v0.5.0 release].

## Setup

This guide assumes you will be tracking Initiatives in a Git repository and this
repository can be viewed in a browser. In our case, it's pushed to GitHub.

### 1. Creating an Initiatives directory

We'll want to store our Initiative files in a new directory, tracked in the Git
repository. Let's creatively call this `./initiatives`.

```bash
cd root/of/git/repository
mkdir initiatives
```

This directory is where we can store our Initiative files. Note: nesting
directories is currently not supported. So initiative files should be added here
as `./initiatives/*.json`.

It's important that this directory _exists_ when we're trying to load from it.
So it may be worth adding a `.gitkeep` file to this directory as well, so this
directory exists even when you don't have any Initiative files added yet.

```bash
touch initiatives/.gitkeep
```

### 2. Updating project.json

Loading Initiatives currently only works through `project.json` config files.
Either create one, or upgrade from a previous `project.json` version to make
sure it's at version `0.5.0` or greater at the top of the file.

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

Next, we specify we want to use Initiatives, by adding an `initiatives` object.

```js
[
  {
    type: "sourcecred/project",
    version: "0.5.0",
  },
  {
    initiatives: {
      remoteUrl: "https://github.com/sourcecred/cred/tree/main/initiatives",
    },
    /*...*/
  },
];
```

Having this `initiatives` object in our project file implies that we _want to_
enable Initiatives.

Note: should there be any errors trying to load the Initiatives, it will
consider that a fatal error and crash. If you want to disable Initiatives, these
lines should be removed from the project file.

There's one argument here:

- **`initiatives.remoteUrl`**: The URL where we can find the _canonical_
  Initiatives in a browser. Note we're pointing to the `main` branch in the
  example, as the _canonical_ is important.

### 3. Loading a project with Initiatives

To load the updated `project.json` which now enables Initiatives, we need to
provide an extra ENV variable.

- **`SOURCECRED_INITIATIVES_DIRECTORY`**: The local path to our Initiatives
  directory. This path can be absolute or relative to your current working
  directory.

Assuming you're running SourceCred in a node environment, your load command
might look like this.

```bash
export SOURCECRED_INITIATIVES_DIRECTORY="./initiatives"
node bin/sourcecred.js load --project ./project.json
```

If all goes well, you should see Initiatives mentioned in the progress output.

```
  GO   initiatives
 DONE  initiatives: 16ms
```

You're now ready to add Initiative files to the directory!

[initiatives concept]: ../../concepts/initiatives.md
[plugin source]: https://github.com/sourcecred/sourcecred/tree/main/packages/sourcecred/src/plugins/initiatives
[v0.5.0 release]: https://github.com/sourcecred/sourcecred/issues/1679
