# Getting Started with GitHub

This guide will give you an introduction to GitHub and how SourceCred uses it.

## Why do we use GitHub?

For now, think of GitHub as a place to collaborate. 
If you had a bunch of documents that you wanted to collaborate on, what would you do?
You might consider putting them in a shared file service like [Google Docs](https://docs.google.com/), or perhaps keeping them as Word documents on your local machine. 
Although these platforms offer general collaborative editing capabilities, GitHub
offers a bit more:

### Permissionless collaboration

Anyone can propose changes. You don't need to be given permission to view or edit
a document, as is required by some of the platforms mentioned previously.

### More advanced reviewing tools

When you open up a Google Doc, you might be able to comment or write in revision mode, but
when you do so, you are working with the entire document. GitHub allows
you to separate your working changes from the production version, ensuring that review and discussion
can proceed before anything is made final. By way of branches, several people can do this at once
without it being confusing. Along with this more detailed ability to edit,
there is an integrated approval workflow, straightforward visualizations of what changed 
(these are called "diffs"), and powerful automatic testing (called continuous integration or CI).

### More detailed history

You are going to have basic questions like:

 - Who added this piece?
 - When and why was this added?

And GitHub has built-in tools to do this (one such action is called [git blame](https://help.github.com/en/github/managing-files-in-a-repository/tracking-changes-in-a-file).)

### Easy for many people to collaborate at once

You can work in your own "alternate reality" without interfering with other work, even simultaneously. When ready these alternatives can be merged back together.

### Web Interfaces

By way of some helpful features, the text files that you are working on can be served as web pages
directly from where they live. You can read about this feature, called [GitHub Pages](https://pages.github.com/).
For example, [sourcecred/docs](https://github.com/sourcecred/docs) has a lot of static text files. They end in ".md" to indicate they are [markdown](https://en.wikipedia.org/wiki/Markdown). However, given that we are using GitHub Pages and a static site renderer called [docusaurus](https://docusaurus.io/), you can see pretty pages rendered at [https://sourcecred.io/](https://sourcecred.io/).

To summarize and answer this question, we use GitHub because we want to:

 1. easily collaborate on common files
 2. have advanced reviewing tools and version history
 3. keep a record of discussions, and every change made
 4. be able to revert back to previous versions, if needed
 5. create pretty web interfaces


## What content do we have on GitHub?

Generally, anything that you'd want to put in a digital safe deposit box is what you'll
find on GitHub. This obviously includes code, but also includes documentation and
other web content. Specifically, the [sourcecred organization](https://github.com/sourcecred)
has the following sets of files. Each set is called a "repository" and you can think of
it like a (sub)-project under a GitHub organization, or a GitHub username. Each repository
has it's own link and space on the GitHub website.

 - [sourcecred](https://github.com/sourcecred/sourcecred): the core sourcecred codebase.
 - [docs](https://github.com/sourcecred/docs): is a growing set of documentation and community health files. In fact, the file that you are reading right now is part of it!
 - [sourcecred-action](https://github.com/sourcecred/sourcecred-action): a set of workflow that can be used by other GitHub communities.

If you are familiar with filesystems and permissions, you can think of each
repository as a folder or space that carries its own permissions, labels,
and sets of issues, pull requests (requests for changes), milestones, and sometimes
even guides for contribution. Each is an independent entity under the organization, and thus each
carries its own kind of expertise. For example, 
if you like working with configuration files and workflows, `sourcecred-action`
might be for you. If you aren't a programmer, you might be most comfortable starting
with `docs`.


### Is my help needed in a software project when I'm not a programmer?

Yes! Any substantial software project is multi-disciplinary. This one included. In fact, calling SourceCred a software project doesn't do justice to how much work besides programming goes into it.


### Why and how should I get involved here specifically?

It's easy to think:

> GitHub seems like a platform for programmers. I'm not a programmer, why would anyone want my help?

But here's the thing! When you look deeper at a lot of discussions
that are had around GitHub repositories, while some of them might require code 
expertise, a large portion do not. Even when the changes are specifically to
suggest changes to code, it's usually the responsibility of the individual
asking for feedback to explain their changes in human friendly terms. For
example, a developer might say something like:

> This (review request) is going to add a plugin to support reddit as a place to get cred.

You might read this statement and need more information. What is a review request?
What does it mean to be a plugin, and what is cred? The first questions are specific
to GitHub, and the latter are specific to SourceCred. For both, you can
start by asking questions. What do these terms mean? What are the features
of reddit (e.g., commenting on a post) and how do they map to the SourceCred
universe? By asking these questions, you can start to participate in 
conversations that you might have felt that you couldn't
contribute to. As you do this more, you'll learn and over time learn more
about the actual code or documentation base. So in summary, don't
be afraid to just jump in. You have meaningful questions to ask, or comments
to make. You are the only one judging yourself for not
having some perceived level of expertise.


## What mindset should I have?

Learning new things is challenging. It's important to realize that since using
GitHub and git is entirely new to you, it's going to be challenging. You'll 
likely start out and not entirely be sure about what the commands you are
copy pasting are doing. There are a few things to remember here.

### Inexperienced != Incapable

Every current user of GitHub, or any technology for that matter, was new at 
some point. Think of someone that you consider proficient or expert, and 
realize that they at some point were in the same shoes as you. The
fact that you are new to a technology says nothing about what you
are capable of, of your innate abilities.

### It's okay to ask for help

What does it mean to ask for help? You might have questions, feedback, or
a general comment, or just want to talk to someone. Asking for help can be daunting, 
but guess what? The SourceCred community is open to it. Once you've
sprinted over the mental hurdle that it's okay to ask, you'll very likely
realize that engaging in the first place is a great way to learn, and quite a bit
of fun. You can [join discord](https://sourcecred.io/discord-invite) and
then post your question in the `#git-help` channel.


### I will grow

Some might say that you can only truly fail at something if you decide not to try.
But now let's imagine that you try. Even if your progress feels slow, try mentally
zooming ahead one year and think of the enormous amount you might learn. What's
the trick to getting there? Just don't give up, and keep trying. At some point
things that seem weird or challenging will just click. This is how learning
tends to work.

To summarize, if you have a growth mindset, and aren't afraid to ask for help,
the experience can not only be successful in that you will learn how to use
GitHub, you'll also have fun and connect with others. 


## How do I contribute?

Okay, let's get down to talking about GitHub! We could start by giving you high
level concepts first, but instead we are going to walk you through steps
that you can follow along, and explain as we go. There are two directions you
can go with your learning:

 - [GitHub on the command line](GITHUB-terminal.md): an introduction to using git to interact with GitHub from your terminal
 - [The GitHub Website](): an introduction using the website (being written).
