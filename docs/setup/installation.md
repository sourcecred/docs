---
title: Installation
---

The easiest way to install SourceCred is to fork the [example repo](https://github.com/sourcecred/example-instance). This repo contains scripts that will install SourceCred locally and set up an example instance of SourceCred. This instance can then be configured to include just the plugins you want and point to the data sources you care about.

If you want to build SourceCred from source (for instance to get bleeding edge features) or to develop on it, see the [Development Setup instructions](#development-setup).



## Installing from example instance

1. Clone the `example-instance` repo from SourceCred’s GitHub:

`git clone https://github.com/sourcecred/example-instance.git`

2. Install SourceCred and its dependencies

If you don't have it, install [yarn](https://classic.yarnpkg.com/lang/en/). Then run yarn to install SourceCred and its dependencies.

`yarn` 

That's it! The installed instance with come with the latest stable release and default configurations, including all plugins.


Next, you'll want to configure your instance by selecting which plugins to use and configuring them. See the [example-instance README](https://github.com/sourcecred/example-instance/blob/master/README.md) for more details.

