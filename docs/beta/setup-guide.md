---
title: ⚙️ How to Set Up SourceCred
description: A guide for turning on a SourceCred instance to track cred in your
  project or community.
---
In this guide you'll find information about setting up your own instance of SourceCred to generate cred scores for your community and/or project. 

[//]: # (What is the level of technical competence we're expecting from those who read this doc? If it's high, then we shouldn't waste too much time explaining basic tech concepts. The "before getting started" section below should explain the level of tech-knowledge you'll need and turn away those who won't be able to set up an instance on their own.)

If you're looking for [general information](https://sourcecred.io/docs/beta/introduction) or want to [get involved](https://sourcecred.io/docs/beta/get-involved) with the community of folks building SourceCred, check out some of our other guides.

[//]: # (Does this list truly contain the top most important things you'll need to know before getting started with creating your own sourcecred instance?)

Before getting started, here are some things you’ll need to know:

* SourceCred is organized around “instances.” When you create an instance of SourceCred for your community/project, it will collect data and generate "cred scores" for each individual contributor based on the available data about the work you've all been doing. 
* Changing "weights" (how much cred different types of contributions receive) can change the scores, and how weights are set/administered is up to each community and how they'd like to govern themselves.
* Every SourceCred instance needs data about contributions. This information comes from the SourceCred plugins which "scrape" data from a platform to use in calculating cred scores. Currently, the available plugins include Discord, GitHub, and Discourse. For now, your community will need to be using at least one of these platforms in order to get meaningful Cred scores.
* **Setting up a SourceCred instance is fairly technical.** You’ll need to be comfortable using the terminal, installing packages from NPM, and be familiar with the basics of Git and GitHub. 

If you’re interested in SourceCred but lack the technical chops, you can still get involved on our [Discord](sourcecred.io/discord) or [Discourse forums](https://discourse.sourcecred.io/) to learn more, ask questions, and contribute to the project. 

### Getting started 

[//]: # (^^^ this is the only "sidebar" title that pops up within this doc when it shows on the website. I think a Step 1, Step 2, etc. would be more useful for inner-doc navigation.)

[//]: # (Also, I'd love to see a true step by step guide with concrete tasks and simple instructions that lets anyone with the basic know-how quickly set up their instance. The content below feels very vague and indirect -granted I'm not a techie, so maybe I'm missing something-. If I were coming to this guide, I'd want it to be so clear and direct that it's more or less fool-proof.)

Every SourceCred instance is a directory, tracked by Git, with some conventions around where files are stored. For example, `sourcecred.json` specifies which plugins are active, and `config/plugins` has a folder for every individual plugin, with that plugin’s own configuration. Fortunately, you don’t need to set that up from scratch. Instead, you can fork our [example instance](https://github.com/sourcecred/example-instance), which is a template repository on GitHub that’s been set up to be a good starting point for configuring SourceCred.

As a first step, clone that repo. Then, run [yarn](https://classic.yarnpkg.com/lang/en/) to install SourceCred along with its dependencies.

Once SourceCred is installed, you’ll want to configure the instance to suit your community. First, take a look at the installed plugins listed in `sourcecred.json`, and remove any plugins that you won’t be using. Then, for each plugin, update its plugin config.json file so that it will load your community’s data instead of the example data. We’ll put those instructions in this documentation soon, but for now take a look at the [example instance README](https://github.com/sourcecred/example-instance) and poke around.

Then, you can run `yarn go` to fully re-compute your SourceCred instance. This will actually run three commands in sequence:

* `yarn load`, which loads fresh cache data for the plugins;
* `yarn graph`, which updates the plugins’ contribution graphs using the cache;
* `yarn score`, which re-computes Cred scores using your plugin contribution graphs, and the parameters.

This is useful to know because it means you can, for example, update your weights or parameters and re-compute Cred without needing to wait to re-download data for the cache.

Finally, you’ll want to turn on a web server in that directory. We’re going to build in a dedicated command for this soon. For now you can use `python -m SimpleHTTPServer` and navigate to the url given.