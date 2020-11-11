---
title: ⚙️ How to Set Up SourceCred
description: A guide for turning on a SourceCred instance to track Cred in your
  project or community.
---
In this guide you'll find information about setting up your own instance of
SourceCred to generate Cred scores for your community and/or project.

### Before you start

If you’re not quite ready to create your own instance, check out our
[introduction](https://sourcecred.io/docs/) or
[Getting Involved](https://sourcecred.io/docs/beta/get-involved) guides.

Before getting started, some things you’ll need to know:

* SourceCred is organized around “instances.” When you create an instance of
  SourceCred for your community/project, it will collect data and generate
  “[Cred scores](/docs/beta/cred)” for each individual contributor based on the
  available data about the work you've all been doing.
* Your SourceCred instance will use [Github Actions](https://github.com/features/actions) to calculate cred every day and generate the front-end that gets published through GitHub pages. You can also run your instance on your local computer to perform "admin tasks" such as creating and merging identities, transferring Grain, etc.
* Every SourceCred instance needs data about contributions. This information
  comes from the SourceCred plugins which “scrape” data from a platform to use
  in calculating Cred scores. Currently, the available plugins include Discord,
  GitHub, and Discourse. For now, your community will need to be using at least
  one of these platforms in order to get meaningful Cred scores.
* **Setting up a SourceCred instance is fairly technical.** You’ll need to be
  comfortable using the terminal, installing packages from NPM, and be familiar
  with the basics of Git and GitHub.

If you’re interested in SourceCred but lack the technical chops, you can still
get involved on our [Discord](https://sourcecred.io/discord) or
[Discourse forums](https://discourse.sourcecred.io/) to learn more, ask
questions, and contribute to the project.

### Instructions

Everything you need to know about setting up a SourceCred instance can be found
in the [template-instance](https://github.com/sourcecred/template-instance)
repo, which is set up to be a good starting point for configuring SourceCred.