# Contributing to SourceCred

Contributing to SourceCred on GitHub means any of the following:

 - opening an issue to ask a question, or request a feature
 - open a pull request (PR) to request for review

See the [glossary](glossary.md) or [introduction to github guide](../guides/GITHUB.md) 
if you have questions about terms used in this document.

## Scope of Contribution

This contribution guide covers the repositories (projects) under the 
[SourceCred GitHub organization](https://github.com/sourcecred). While this contributing guide
is generally applicable, each repository can potentially be different, and it's
recommended to check within the repository you are interested
in contributing to for a more detailed guide to contributing.

## Opening Issues

In addition to using the `#git-help` channel on [discord](https://sourcecred.io/discord-invite), you can open an issue on any SourceCred project to ask a question, suggest a feature,
or report a bug. If you want to have discussion before opening the issue, you are welcome 
and encouraged to chat with others on [discourse](https://discourse.sourcecred.io/), [discord](https://sourcecred.io/discord-invite), or any other method that is available and comfortable for you and the community. If you decide that an issue is warranted, the following steps
are recommended.

### 1. Clarify your question or need

In the case of having a question, do your best to articulate the question, your particular
perspective, and include any relevant information or links that might be helpful to answer it.
If you are a contributor to the repository, you can apply a "question" label. If not,
likely a maintainer will do this for you. It's helpful to put yourself in the shoes of 
others reading your question and ask if you are missing information or otherwise have additional questions.

In the case of a feature request, it would be important to outline the unsolved problem that might be addressed.
Why is the SourceCred project the ideal tool to address this issue? What other solutions
have you considered? If you can provide examples and best put others into your mindset
to understand your need the discussion will flow a lot easier. 

If you find a bug or have a question, do your best to walk others through an example or case
that can reproduce the issue you are addressing. For Python or notebook-related languages, you
could provide an example notebook on [colab](https://colab.research.google.com/notebooks/welcome.ipynb). 
If you are comfortable with the command line, [asciinema](https://asciinema.org/) is also an easy and fun
way to share your terminal. You are also encouraged to share just copy pastes of relevant information, along
with screen shots. The particular content you share will hugely depend on the tool you are using.

### 2. Be Respectful

Please note that we have a [code of conduct](CODE_OF_CONDUCT.md) that you should follow in
all of your interactions with any SourceCred project.

### 3. Be Patient, but Persistent

If you don't receive a reply right away, remember that many in the community are
working full time jobs and contributing to open source projects on the side. If the time
feels too long, then you should be persistent. If posting a second comment to your issue
does not trigger a reply in 24 hours, post a link to the question on other platforms 
(discourse, discord) and ask for help. It's usually the case that others have the
best intention to help, but can forget after an initial notification. It's okay
to give them a gentle reminder.

## Pull Request Process

A [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) (PR) comes down to requesting a change for a project. It means that you've done some work on the project,
and you are sharing it with the other contributors and requesting review. 
Opening a pull request requires familarity with using git and GitHub to
fork a project, checkout a branch, commit and push, so we recommend that you 
reference the [GitHub guide](../guides/GITHUB.md) if this process is new to you.
During this process, we recommend the following steps to ensure that it goes smoothly.

### 1. Discuss your Contribution

It's easy to get excited about working on a contribution and want to jump in!
However, when contributing to a SourceCred project, it's recommended to first discuss the change you wish to make via an issue.
It could be that the change would not be appropriate, or might be done differently than 
you had first envisioned. It could also be that others would just enjoy brainstorming 
with you before you start work. In the case of working on an existing issue, you might consider
making a comment in the issue that states you are working on it. This is helpful to
avoid redundant effort. It could be the case that two or more people are concurrently 
working on the same issue, but haven't communicated well enough to know this.

### 2. Check dependencies

If you've added, removed, or otherwise changed project dependencies, make sure that 
this is represented in any specification files that mention versions, or testing pipelines.

### 3. Documentation

In the case of a small project, you likely might need to update a README.md in the project.
For a larger project, there might be a more robust set of documentation (for example in a docs folder
alongside the repository or on the `gh-pages` "github pages" branch). If you have
any doubts about where documentation resides, you should ask a maintainer. What kind of updates
should you make? It could be that you've:

 - added a command and need to document the usage
 - worked on a testing pipeline and need to add examples for running it
 - provided containers for the software and should add detail for build, usage, and testing
 - modified environment variables, ports, file locations, or container parameters that can be used
 - bumped a version, and should modify any mentions of it. Note that most projects use [SemVer](http://semver.org/).

Additionally, if you are writing or updating code, make sure that docstrings are written
or updated appropriately.

### 4. Write Meaningful Commit Messages

You should write concise and meaningful commit messages for each scoped
change that you make. Someone in the future should be able to read your message
and have a broad understanding of the change. You can even include references
to issues for more information.

### 5. Open the Pull Request

When you have run tests locally, updated documentation, and you feel confident that your
pull request is ready for review, you can push the changes to a branch of your fork and
open the pull request. If you aren't familiar with this process, see the [GitHub guide](../guides/GITHUB.md).
Many repositories will have pull request templates that provide prompts and check boxes
to help you to describe your changes, what issues are addressed, and that you've completed
some sanity checks. If the repository doesn't have a template, make sure to generally cover:

 - a description of your change, and restate goals or problems that it solves
 - links to relevant issue(s)
 - verification of the steps that you've taken to test locally
 - examples of how to test the change, or more generally, instructions to reviewers for how to review the pull request
 - questions you have for reviewers

### 6. Review

The review process will proceed after you open the pull request, and as
previously stated in the issue process, you should be patient but persistent.
Make sure to post that you have a pull request for review in appropriate
channels on discourse or on discord, and send gentle reminders if needed.

When the reviewers request changes, while it might be different for various SourceCred
projects, you should check if the project would prefer a rebase with master,
or to have separate commits to address new changes.
 
When the pull request is approved by maintainers, it will be merged into the
master (or primary) branch. During this process, whether you are a contributor,
 a reviewer, or a maintainer, you should give yourself a reminder of best practices
for [review culture](../culture/review_culture.md).

### 7. Follow Up

After a review is finished, it's helpful to think about or discuss what you might
do differently next time. If you think any points could be improved upon in this
guide, please [open an issue](https://github.com/sourcecred/docs/issues).
