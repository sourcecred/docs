---
title: Github
---

# GitHub Plugin

The GitHub plugin assigns Cred to contributors participating
on GitHub, for example by writing or reviewing code, filing and triaging bug
reports, maintaining the build, and cutting new releases.

The plugin does this by downloading extensive data on the repository history
from GitHub, and using it to create a contribution graph. You can read below to
see the kinds of nodes and edges in that graph. The data is temporarily cached
locally, but the source of truth for the GitHub plugin is always GitHub's live
servers. That means that if content is deleted on GitHub, it will also
disappear from the GitHub plugin (after a cache refresh).



[GitHub]: https://github.com/

## Cred flow

The below diagram illustrates Cred flowing in a common pattern of 
contributions (nodes). 

[example image]

Here we can see Bob reporting a bug by filing an Issue. Alice then 
submits a PR fixing the Issue. Pam reviews the fix and submits a 
PR review....[INSERT SIMPLE CRED FLOW EXAMPLE AND DIAGRAM]


The full set of node and edge types used by the GitHub plugin are 
defined below. 

### Nodes

The GitHub plugin creates the following kinds of nodes in the contribution graph:

#### Repo

- **Repo**:

A GitHub repository, e.g. [sourcecred/sourcecred]. The repo node will be
directly connected to all of the PRs and issues in the repository. The repo
node has no timestamp, so setting a weight on the repository will have no
effect (i.e. repos do not mint Cred). This may change when we switch to
[CredRank].

[CredRank]: https://github.com/sourcecred/sourcecred/issues/1686

[sourcecred/sourcecred]: https://github.com/sourcecred/sourcecred

- **Issue**:

A GitHub issue, e.g. [sourcecred/sourcecred#40]. Issues are connected to their
author(s), to entities that they reference, to their comments, and to the
containing GitHub repository.

[sourcecred/sourcecred#40]: https://github.com/sourcecred/sourcecred/issues/40

- **Pull Request (PR)**:

A GitHub PR, e.g. [sourcecred/sourcecred#35][pull]. PRs are
connected to their author(s), to entities they reference, to their comments,
their reviews, to their containing repository, and, (if merged) to the commit
that they created when merged.

[pull]: https://github.com/sourcecred/sourcecred/pull/35

- **Pull Request Review**:

A review of a GitHub PR, e.g. [this review]. Reviews are connected to
their author(s), to entities they reference, to their comments, and to the PR
they review. Note that review assignments are not currently tracked.


[this review]: https://github.com/sourcecred/sourcecred/pull/91#pullrequestreview-105254836

- **Comment**:

A comment on an issue, PR, or PR review. Comments are
connected to their author(s), to entities they reference, and to their 'parent'
(the containing issue, PR, or review).

- **Commit**:

A commit is a Git commit, as discovered via the GitHub API, e.g. [this commit].
We currently enumerate every commit that is in the history of the `master`
branch.

Commits currently do not add much value in the Cred graph, because they are not
meaningfully connected to the contents of the commits. For example, it would be
great if a code module flowed Cred to commits that implemented or modified the
module, which could then flow to the PRs that added those commits. In
this case, we would be making meaningful use of having commits in the graph.

However, as of March 2020, we do not track Cred at the module, file, or
directory level. Because of this, commits do not add much value beyond their
connections to PRs (which are already in the graph).

[this commit]: https://github.com/sourcecred/sourcecred/commit/94b04541514b991c304616aadfcb417a19871e82

- **User**:

A GitHub user account, e.g. [@decentralion]. User accounts do not mint Cred, so
setting a node weight would have no effect. Using the identity plugin, it's
possible to "collapse" user nodes with other identity nodes into a single,
canonical identity. For example, if a contributor had a GitHub user account and
a Discourse account, then the identity plugin can collapse those identities
together.

Users are connected to posts they author, to posts they react to, and to posts that
mention them.

[@decentralion]: https://github.com/decentralion

- **Bot**:

A GitHub user account that has been explicitly marked as a bot, via inclusion
in [bots.js]. This is useful so that we can filter out bot accounts from
receiving grain or showing up in the Cred rankings.

Bots have the same connections as users.

[bots.js]: https://github.com/sourcecred/sourcecred/blob/master/src/plugins/github/bots.js


### Edges

The GitHub plugin creates the following kinds of edges (connections between nodes) 
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

- **Reacts**:

A react edge connects a user (or bot) to a PR, issue, or comment. There are
subtypes of reaction edges corresponding to the type of reaction; currently we
support thumbs-up, heart, and hooray emojis. In the future, we might reify the
reactions as nodes, so as to support reaction-minted Cred, in the style of
[like-minted Cred].

[like-minted Cred]: https://discourse.sourcecred.io/t/minting-discourse-Cred-on-likes-not-posts/603

- **Has Parent**:

A has-parent edge connects a "child" node to its "parent" node. Here's a table
summarizing these relationships:

| Child | Parent |
| --- | --- |
| Issue | Repository |
| Issue Comment | Issue |
| Pull Request | Repository |
| Pull Comment | Pull Request |
| Pull Request Review | Pull Request |
| Pull Request Review Comment | Pull Request Review |

- **Merged As**:

A merged-as edge connects a PR to the commit that it merged, assuming
the PR was merged.


## Status and Caveats

The GitHub plugin is still in beta. It tends to assign reasonable Cred scores
to contributors. It is worth noting however that all merged PRs currently 
mint the same amount of Cred. Minting Cred only on merged PRs provides
some level of review, and reduces the probability of spam attacks (low value 
PRs submitted just to get Cred). However, not all PRs are equally valuable. 
While we have not found this a problem in SourceCred, a tight knit and high trust
community, in larger, lower trust communities, this could incentivize quantity 
over quantity.

We intend to address this by moving Cred minting further away from raw activity 
and towards actions that require review, e.g.:
- Minting Cred when a release is created.
- Minting Cred when a feature is added (via the Initiatives Plugin).

We also intend to improve the robustness of the GitHub plugin by adding better
heuristics for assigning Cred, e.g.:
- Allowing custom labels that influence the Cred minted to PRs.
- Modifying Cred minting based on metrics like the size of the PR.


