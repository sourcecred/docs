---
title: 🛠 Maintaining Your Instance
---

Now that you've set up a SourceCred instance in your community, there will be
some maintenance required, with different strategies to choose from. This
page will orient you to the types of maintenance and some technologies
and systems you can put in place to help.

## Merging Identities

If you are using multiple plugins, you will find that your participants will end
up with multiple accounts, since there is no way for the instance to know which
accounts belong to the same person. Human input is needed, and there are a few
different options for how.

### Admin Portal (Out-of-the-Box)

The only way to merge identities currently built into SourceCred is using the
Admin Portal, which references a set of UI pages that only show up in the
SourceCred UI when you serve it locally on your computer (they will not show up
on the public site hosted on Github Pages). A general process for this requires
use of git and a terminal, and looks like:

1. Clone the instance repository to your computer using Git.
2. In a terminal, `cd` to the clone's directory and then run the commands `yarn`
   and `yarn serve`
3. Open [http://localhost:6006](http://localhost:6006) in a browser.
4. Navigate to the Identities page in the menu.
5. Click on an identity that you want to use as the "base" of a merge.
6. In the "Add Alias" box, start typing and select the name of identity that you
   want to merge into the base.
7. Click "Save ledger to disk" which will make changes to the
   `./data/ledger.json` file in your clone locally.
8. Use git to commit and push the changes, either directly to the main branch,
   or to another remote branch to open a Pull Request to be validated by your
   community/team.

**Note: Merges are not easily undone, so be sure about identity merges that make
it into your main branch.**

### Adapt 1Hive's 3rd-party Pollen Discord Bot

This technology allows users to merge their own Discord, Discourse, and Github
identities. This adds security and reduces admin overhead significantly, but
requires some technical setup. See the READMEs for more info:

https://github.com/1Hive/pollen-bot

https://github.com/1Hive/pollen-cred-fetcher

### Self-Service Identity using Ceramic

This is a hackathon project that has similar benefits to the 1Hive bot, but is
more secure and more web3-architected. A working proof of concept was made but
it has not been productionized. Please let us know if you get this set up for
production so others can benefit!

[Hackathon Proof-of-Concept](https://github.com/All-in-on-IDX)

[Design doc for productionizing](https://github.com/sourcecred/sourcecred/issues/2853)

## Distributing Grain/Tokens

SourceCred comes with some built-in economics tools for distributing economic
value (like tokens) based on Cred (contribution score). We agnostically call
this sort of distribution "Grain".

### Activating Identities

To receive Grain, a user's account in SourceCred will need to be Activated. A
few ways to do so:

1. Using the checkbox on the Admin Portal (see above Admin Portal workflow)
2. Using
   [this lightweight discord bot](https://github.com/blueridger/sc-address-bot)
   for self-serve activation

### Executing Distributions

To be continued...

## Configuration Updates
To be continued...
