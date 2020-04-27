## Getting Started with GitHub Command Line

A quick tutorial for getting started with git and GitHub from the command line.

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
