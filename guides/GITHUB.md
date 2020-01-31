# Getting Started with GitHub

What is GitHub, and how do you use it to interact with and contribute to SourceCred?
This guide will give you an introduction to GitHub and SourceCred.

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
review on the level of change. Along with this more detailed ability to edit,
there is an integrated approval workflow, straightforward visualizations of what changed 
(these are called "diffs"), and powerful automatic testing (called continuous integration or CI).

### More detailed history

You are going to have basic questions like:

 - Who added this piece?
 - When and why was this added?

And GitHub has built-in tools to do this (one such action is called [git blame](https://help.github.com/en/github/managing-files-in-a-repository/tracking-changes-in-a-file).)

### Easy for many people to collaborate at once

You can work in your own "alternate reality" without interfering with other work, even simultaneously. When ready these alternatives can be merged back together.
You can also work on changes out of order, although this is more of an advanced topic.

### Web Interfaces

By way of some helpful features, the text files that you are working on can be served as web pages
directly from where they live. You can read about this feature, called [GitHub Pages](https://pages.github.com/).

To summarize and answer this question, we use GitHub because we want to:

 1. easily collaborate on common files
 2. have advanced reviewing tools and version history
 3. keep a record of discussions, and every change made
 4. be able to revert back to previous versions, if needed
 5. render some of the static files in a web interface


## What content do we have on GitHub?

Generally, anything that you'd want to put in a digital safe deposit box is what you'll
find on GitHub. This obviously includes code, but also includes documentation and
other web content. Specifically, the [sourcecred organization](https://github.com/sourcecred)
has the follow sets of files. Each set is called a "repository" and you can think of
it like a (sub)-project under a GitHub organization, or a GitHub username. Each repository
has it's own link and space on the GitHub website.

 - [sourcecred](https://github.com/sourcecred/sourcecred): is the core sourcecred codebase.
 - [docs](https://github.com/sourcecred/docs): is a growing set of documentation and community health files. In fact, the file that you are reading right now is part of it!
 - [sourcecred-action](https://github.com/sourcecred/sourcecred-action): is a set of workflow that can be used by other GitHub communities.
 - [sourcecred-python](https://github.com/sourcecred/sourcecred-python): is an (under development) Python client for sourcecred.

If you are familiar with filesystems and permissions, you can think of each
repository as a folder or space that carries it's own permissions, labels,
and sets of issues, pull requests (requests for changes), milestones, and sometimes
even guides for contribution. Each is an independent entity under the organization, and thus each
carries it's own kind of expertise. For example, if you are a data scientist
and comfortable with Python, you'd be interested to contribute to `sourcecred-python`.
If you like working with configuration files and workflows, `sourcecred-action`
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

Even if you know or understand nothing about the code, you can contribute by
asking questions. What are the actions that can generate it? How has this
new integration been tested? By asking these questions, you can start to
participate in conversations that you might have felt that you couldn't
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
level concepts first, but intsead we are going to walk you through steps
that you can follow along, and explain as we go.

### 1. Create an account on GitHub

This is the fun part! If you haven't yet, you get to [create an account](https://github.com/)
which usually comes down to generating a username that you like and providing an email.
This is exciting because when you think about it, GitHub is just another super
geeky social network where you'll make a lot of new friends, and connect
with friends that you already might have on their GitHub accounts.
Once you have an account, don't forget to upload a profile picture and add
any other metadata of interest under [settings](https://github.com/settings/profile).

### 2. Install git

To be fair, GitHub would be nothing without [git](https://git-scm.com/). 
It's the command line software that you'll see a million flavors of commands
using around the internet. For most of you, you'll find that installing
[GitHub for Desktop](https://desktop.github.com/) is the easiest way to
interact with git. If you are comfortable with a command line, you can
also [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
from there.

At this point, continue with either the tutorial for getting started with GitHub for Desktop or git on the command line:

 - [Getting started with GitHub Desktop](https://help.github.com/en/desktop/getting-started-with-github-desktop)
 - [Getting started with git](https://help.github.com/en/github/getting-started-with-github/set-up-git)

If you have any questions with the steps above, ask someone for help on Discord in the
`#git-help` channel.


## 3. Fork the Repository

Okay, now we're going to talk about silverware. Actually, we're going to talk about
forking a repository. Remember that a repository is like a set of files on GitHub's server.
For example, the docs repository is located at [github.com/sourcecred/docs](https://github.com/sourcecred/docs) and you can run commands independently to interact with it. In our case,
we are going to "fork" it, which means navigating to that page, and clicking
"Fork" in the upper right, and then selecting your GitHub account. GitHub will then
jump you over to your newly forked repository, congratulations - you just 
created your first repository!

Note that the repository is going to be called "docs." This is a fairly general name,
so you can feel free to go into the Settings and rename to something meaningful
like "sourcecred-docs."


## 4. Clone your Fork

Now you want to work on files. But how? GitHub does offer a way to edit files
in the interface, but we want to walk you though how to do this on the command line,
where you'll have a lot more power. Let's first talk about the idea of "cloning." It's
called cloning because you are doing exactly that - there is a repository in
the cloud (on GitHub servers) somewhere that you want to dump (or rather, pull)
onto your local machine. This will be your first command with git ever run!

First cd to some location where you want to put your GitHub projects. Maybe you
would want to organize by language, or GitHUb organization? For example, I have this
path in my dropbox:

```bash
mkdir -p Code/sourcecred
cd Code/sourcecred
```

Once we are happily sitting where we want to create a new folder, we can
issue the GitHub command to clone. Given that our username is `[username]`
and we renamed the repository to "sourcecred-docs" that would look like either
of these:

```bash
$ git clone git@github.com:[username]/sourcecred-docs.git
$ git clone https://github.com/[username]/sourcecred-docs.git
```

Hold the phone, what's going on here? In the first command, we've set up
[an ssh key](https://help.github.com/en/enterprise/2.18/user/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) and are cloning using it. For the second we 
haven't. You are totally fine to do the second, although when you have a few minutes,
the first is the more secure and better option.

## 5. Make the Change

Okay, let's cd into the docs folder and then make a change!

```bash
cd sourcecred-docs
```

Before we edit any files, you can do `git branch` to see the branch you are actively
working on. The default is usually called "master." It doesn't have special meaning
(although it can be changed) but is really just a convention. 

```bash
$ git branch
*master
```

If you had other branches they would show up too, but without the star. The little
star indicates "this is the branch that we are sitting on."

> What is a branch?

A branch corresponds to a particular set of changes you are working on, perhaps
related to a specific feature. Branches make it possible to work on multiple
different changes at once, or in parallel. 
If you take a look in your current folder, there is a little hidden folder called .git.
We aren't going to discuss the contents in detail, but this is where every single
change and record is kept. The branches that you create are kept here, and we can
do an action of "checking out" any particular branch when we want to work on it.

Let's do that now - we will create a new branch to add our name to the AUTHORS.md file.

```bash
$ git checkout -b add/my-username
```

The little `-b` in the command above indicates to create a new branch.
And that's it - you are now sitting on a new branch and you can make changes.
So do it! Add your name to the list of authors in the AUTHORS.md file.

```md
# Contributors

 - @vsoch
 - @yourusername
```

## 6. Commit the Change

The action of "committing" means that you are happy with a current state,
and want to write the change officially to your little .git directory.
To give meaning to future humans, you'll also write a message that describes it.
This is when we will run the following:

```bash
$ git commit -a -m "Adding [username] to the AUTHORS.md file"
```

Reading the above, it says to "commit ALL changes with the message X."

## 7. Push to your branch

Remember that this is all sitting on your local machine. You next need
to push this up to your remote (on GitHub servers). You can do that as follows:

```bash
$ git push origin add/my-username
```

Where "add/my-username" is the branch that we are using, and "origin" is another
weird GitHub convention that refers to the default remote name.
Actually, if you look at the .git/config file you can see how this is named. 
Here is what mine looks like.

```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
        url = git@github.com:vsoch/sourcecred-docs
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
```

See where it says "origin"? I could change that to "pancakes" and then do:

```bash
$ git push pancakes add/my-username
```

## 8. Open Pull Request

Now your branch is on GitHub! Let's do the final step, opening the pull request.
You can navigate to your repository page, click on Pull Requests, and open the pull request! You want it to be your branch (of your fork) against the master here. 

 1. Click the button to open the pull request, selecting the correct branch
 2. Write a description in the box for what you are changing, and what issues (this one!) you are addressing. Note that if you say anything along the lines of "fixes #1111111" or "closes #111111111" it will automatically close the issues when you merge (neat!)
 4. Ping others in the discord #needs-review channel 

And that should be it! The above should be relatively fun, and a good learning experience for forking, cloning, changing, committing, and opening a pull request. And guess what, there are definitely more advanced stuffs you can do with git, but that's largely the basics that will empower you to contribute to most projects!
