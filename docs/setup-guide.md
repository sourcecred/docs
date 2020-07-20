---
title: ⚙️ How to Setup
description: I want to use SourceCred. How do I turn it on for my community?
---
You've learned about SourceCred, and now you'd like to try it out for your community. First, here are some things you'll need to know:

\- SourceCred is organized around "instances". An individual instance of SourceCred contains data about a community, as well as the rules or parameters that influence Cred scores. Whoever is administering the instance sets the rules for how its Cred and Grain work.

\- Every SourceCred instance needs data about contributions. The data comes from SourceCred plugins. Currently, the major plugins are for Discord, GitHub, and Discourse. Your community will need to be using at least one of these platforms in order to get meaningful Cred scores.

\- Setting up a SourceCred instance is fairly technical. You'll need to be comfortable using the terminal, installing packages from NPM, and with the basics of Git and GitHub.



With that said: let's get started! Every SourceCred instance is a directory, tracked by Git, with some conventions around where files are stored. For example, `sourcecred.json` specifies which plugins are active, and `config/plugins` has a folder for every individual plugin, with that plugin's own configuration. Fortunately, you don't need to set that up from scratch. Instead, you can fork from our [example instance]. It's a template repository on GitHub that's been set up to be a good starting point for configuring SourceCred.

[example instance]: https://github.com/sourcecred/example-instance

As a first step, clone that repo. Then, run [yarn](https://classic.yarnpkg.com/lang/en/) to install SourceCred along with its dependencies.

Once SourceCred is installed, you'll want to configure the instance to suit your community. First, take a look at the installed plugins listed in `sourcecred.json`, and remove any plugins that you won't be using. Then, for each plugin, update its plugin config.json file so that it will load your community's data instead of the example data. We'll put those instructions in this documentation soon, but for now take a look at the example instance README and poke around.

Then, you can run `yarn go` to fully re-compute your SourceCred instance. This will actually run three commands in sequence:

- `yarn load`, which loads fresh cache data for the plugins
- `yarn graph`, which updates the plugins' contribution graphs using the cache
- `yarn score`, which re-computes cred scores using your plugin contribution graphs, and the parameters

I mention this because it means you can, for example, update your weights or parameters and re-compute Cred without needing to wait to re-download data for the cache.

Finally, you'll want to turn on a web server in that directory. We're going to build in a dedicated command for this soon, for now you can use `python -m SimpleHTTPServer` and navigate to the url given.