---
title: Adopting SourceCred
description: Info on setting up a SourceCred template instance
---

### SourceCred Overview

SourceCred (in the most basic sense) is an algorithm that determines how much
value a contribution or contributor added to a project overall. Cred flows from
the contribution to all the people and other contributions that supported
it. For a more detailed description of how cred and grain are calculated,
please visit
[An introduction to calculating cred and grain](https://github.com/sourcecred/docs/blob/main/intro_calculating_cred_grain.md).

### How to Set Up SourceCred

- SourceCred is organized around “instances.” When you create an instance of
  SourceCred for your community/project, it will collect data and generate “Cred
  scores” for each individual contributor based on the available data about the
  work you've all been doing.
- Your SourceCred instance will use Github Actions to calculate cred every day
  and generate the front-end that gets published through GitHub pages. You can
  also run your instance on your local computer to perform "admin tasks" such as
  creating and merging identities, transferring Grain, etc.
- Every SourceCred instance needs data about contributions. This information
  comes from the SourceCred plugins which “scrape” data from a platform to use
  in calculating Cred scores. Currently, the available plugins include Discord,
  GitHub, and Discourse. For now, your community will need to be using at least
  one of these platforms in order to get meaningful Cred scores.
- Setting up a SourceCred instance is fairly technical. You’ll need to be
  comfortable using the terminal, installing packages from NPM, and be familiar
  with the basics of Git and GitHub.

### Setting up a Template Instance

To set up a SourceCred instance, you would first need to fork the template repo
from Github, then you can add in the supported plugins to pull in the
contributions. (Currently supported plugins include Github, Discourse, and
Discord). If you would like to try to set up an instance, please refer to the
[Template Instance Repo](https://github.com/sourcecred/template-instance).

### References

- [SourceCred Introduction Page](https://sourcecred.io/docs/)
- [An introduction to calculating cred and grain](https://github.com/sourcecred/docs/blob/main/intro_calculating_cred_grain.md)
- [How to Set up SourceCred](https://sourcecred.io/docs/beta/setup-guide)
- [Template Instance Repo](https://github.com/sourcecred/template-instance)
- (https://sourcecred.io/docs

