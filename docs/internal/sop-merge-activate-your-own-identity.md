---
title: "[SOP] Merge/Activate your own identity"
description: Standard Operating Procedures for Merging/ Activating your own Identity
---

- **Prerequisites**
  - GitHub account with write access on sourcecred/cred repo
    - You can alternatively work in a fork of the repo.
    - Devs already have perms. Non-devs can ask Thena or Topocount to be added to this team: https://github.com/orgs/sourcecred/teams/instance-helpers/members
    - git CLI installed (can also use a git GUI, but this tutorial will use the CLI
    - open a terminal and run `git --version` to check if your computer already has it. 
        - If you don't have it, install it [here](https://git-scm.com/downloads)
    - Have a local clone of sourcecred/cred
        - Open a terminal, optionally change to a preferred directory ([tutorial](https://www.earthdatascience.org/courses/intro-to-earth-data-science/open-reproducible-science/bash/bash-commands-to-manage-directories-files/#:~:text=To%20change%20directories%2C%20use%20the,to%20check%20the%20new%20path.)), and then run: 

```plain text
git clone https://github.com/sourcecred/cred.git
cd cred
``` 

- **Instructions**
    - Open a terminal (and [cd](https://www.earthdatascience.org/courses/intro-to-earth-data-science/open-reproducible-science/bash/bash-commands-to-manage-directories-files/#:~:text=To%20change%20directories%2C%20use%20the,to%20check%20the%20new%20path.) to your repo clone if not already there)
    - Run the following commands, changing `any-name-you-want` to a new branch name of your choice (I usually do something like `merge-5-28-21`)
```plain text
git checkout main && git pull
git checkout -b any-name-you-want
yarn && yarn serve
```
- Open http://localhost:6006/#/admin in another browser tab. We will call this "the portal" from here on out.

1. Merge identities
  - In the portal, use either the "Filter identities" box or cmd-f / ctrl-f to search for the github, discord, and discourse identities in the list. Some may not exist yet, or the name might be slightly different from your actual username. For example, `Thena#1234` might appear as `Thena-discord` or something other variation in the portal.
  - Click on each matching identity name in the list and then look at the Aliases at the top of the portal to verify that you've found the correct identities. The Aliases should match your usernames more faithfully and tell you which platform(s) it is for.
  - If you find several identities that belong to you: 
      - click one in the list
      - at the top use the "Add Alias" box to type and select the name of each of the other identities to merge them into the selected identity.
      - Click "Save ledger to disk"
  - **Note:** if at any point you make a mistake, just refresh the browser to undo changes since the last time you hit "Save ledger to disk"

2. If you want to receive Grain (taxable income):
  - Click the checkbox either at the top after selecting the correct identity, or in the list below.
  - Click "Save ledger to disk"

3. If you want to change your account name:
  - Select the identity from the list
  - Change the name in the "name" box
  - Click "Update username"
  - Click "Save ledger to disk"


In the terminal, hit `ctrl-c` and run:
```plain text
git add data/ledger.json
git commit -m "Merge and activate my-username-here"
git push origin head -u
```

- Copy the "Create a pull request" URL that is output in the terminal and paste it into a browser.
- Click the green "Create pull request" button
- Copy the URL and paste it into the `#review-requests` discord channel, and tag @Thena, @s_ben, and @topocount (repeat the next day if you haven't heard back)


