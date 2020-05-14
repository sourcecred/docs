---
title: Installation
---

SourceCred currently support running from a Node environment or using Docker.
_In a future release we're looking to add easier options._

## Node environment

The Node environment is useful for development and running from source code.

Make sure you've installed:
- Node version 10 or 12.
- Yarn version 1.7 or greater.

Releases can be downloaded from https://github.com/sourcecred/sourcecred/releases.
Or you can download the latest `master` branch if you're feeling brave.

Then run the following commands to download dependencies and compile the CLI
(backend).

```bash
cd /path/to/extracted/code
yarn install
yarn backend
```

From here you can use the CLI.

```bash
node bin/sourcecred.js help
```

And you can preview data in the explorer.

```bash
yarn start
```

## Using Docker

The Docker image is useful for automated setups and canonical instances.

The image `sourcecred/sourcecred` is available on [DockerHub][DockerHub image].
And the tags to be aware of are:
- `latest` (default) which refers to the most recent versioned release.
- `vX.X.X` versioned releases, which allow you to use a specific version.
- `dev` which corresponds to the latest `master` branch.

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
