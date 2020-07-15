---
title: Installation
---

The easiest way to install SourceCred is to fork the [example repo](https://github.com/sourcecred/example-instance). This repo contains scripts that will install SourceCred locally and set up an example instance of SourceCred. This instance can then be configured to include just the plugins you want and point to the data sources you care about.

If you want to build SourceCred from source (for instance to get bleeding edge features) or to develop on it, see the [Development Setup instructions](#development-setup).

You can also run SourceCred from a [Docker image](#using-docker)  (useful for automated setups and canonical instances). 

## Installing from example instance

1. Clone the `example-instance` repo from SourceCred’s GitHub:

`git clone https://github.com/sourcecred/example-instance.git`

2. Install SourceCred and its dependencies

If you don't have it, install [yarn](https://classic.yarnpkg.com/lang/en/). Then run yarn to install SourceCred and its dependencies.

`yarn` 

That's it! The installed instance with come with the latest stable release and default configurations, including all plugins.


## Development Setup

### Dependencies

  - Install [Node] (tested on v12.x.x and v10.x.x).
  - Install [Yarn] (tested on v1.7.0).
  - For macOS users: Ensure that your environment provides GNU
    coreutils. [See this comment for details about what, how, and
    why.][macos-gnu]

[Node]: https://nodejs.org/en/
[Yarn]: https://yarnpkg.com/lang/en/
[macos-gnu]: https://github.com/sourcecred/sourcecred/issues/698#issuecomment-417202213



### Building SourceCred Locally

Run the following commands to clone and build SourceCred:

```Bash
git clone https://github.com/sourcecred/sourcecred.git
cd sourcecred
yarn
yarn build
```

### Using A Modified Backend

You'll likely want to test out your modified version of SourceCred on an
instance you're familiar with. A convenient way to do that is to create an
alias for your altered version of SourceCred. Here's an example of how to do
so:

```Bash
SC_REPOSITORY_DIR=`pwd`
alias scdev=node "$SC_REPOSITORY_DIR"/bin/sourcecred.js
cd $MY_SC_INSTANCE
# Run the `sourcecred go` command, in your instance, using your modified code.
scdev go
```
### Using a Modified Frontend

If you've made changes to the SourceCred frontend, you can preview and test it using our builtin development server:

`yarn start`

By default, the server will run in the tiny example instance located at `./sharness/__snapshots__/example-instance`.
If you'd like to run it in your instance instead, start it via:
`yarn start --instance $PATH_TO_INSTANCE`.

## Using Docker

The Docker image is useful for automated setups and canonical instances.

The image `sourcecred/sourcecred` is available on [DockerHub][DockerHub image].
The tags to be aware of are:
- `latest` (default): The most recent versioned release.
- `vX.X.X`: Versioned releases. This allows you to specify a specific version.
- `dev`: The latest `master` branch.

Using the docker image you can directly run CLI commands.

```bash
docker run --rm -ti sourcecred/sourcecred:latest load --help
```

The [entrypoint][docker entrypoint] also offers some convencience functions for
building or previewing data in the explorer.

| Command       | Description                                                                                                                                |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| `dev-preview` | Accepts the same arguments as `load` and immedately starts a preview server<br />on port `8080` to explore the data after loading is done. |
| `dev-server`  | The equivalent of running `yarn start` in the Node environment to start a<br />preview server on port `8080`.                              |
| `build`       | The equivalent of running `yarn build` to build the explorer as a static site.                                                             |

The default value for the `SOURCECRED_DIRECTORY` ENV variable is set to `/data`.
By default this directory is _not stored in a volume_, so no caching or output
data is available. To enable this we should define a volume.

```bash
docker run --rm -ti \
  -v $PWD/sourcecred_data:/data \
  sourcecred/sourcecred:latest load --help
```

For plugins which require tokens to be set, we can pass along ENV variables.
_Note: for security we're making sure the token does not show up in the process
list by using `--env KEY` rather than `--env KEY=VALUE`._

```bash
SOURCECRED_GITHUB_TOKEN="XXXXXXXXX" \
  docker run --rm -ti \
  --env SOURCECRED_GITHUB_TOKEN \
  -v $PWD/sourcecred_data:/data \
  sourcecred/sourcecred:latest load --help
```

Finally, to use the preview server we should listen to port `8080` to access it
in a browser.

```bash
SOURCECRED_GITHUB_TOKEN="XXXXXXXXX" \
  docker run --rm -ti \
  -p 8080:8080 \
  --env SOURCECRED_GITHUB_TOKEN \
  -v $PWD/sourcecred_data:/data \
  sourcecred/sourcecred:latest dev-preview --help
```

[DockerHub image]: https://hub.docker.com/r/sourcecred/sourcecred
[docker entrypoint]: https://github.com/sourcecred/sourcecred/blob/master/scripts/docker-entrypoint.sh