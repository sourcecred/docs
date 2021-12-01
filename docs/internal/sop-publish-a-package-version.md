---
title: "[SOP] Publish a Package Version"
description: Standard Operating Procedures for Publishing a Package Version
---

📺
[Zoom Recording](https://zoom.us/rec/share/GSC4vKo8XaOQfWzuc96f1Ns9-Jbu9oKow_8lK3KREXpEMjKiLKw5TvBKMun7XoM.v6q2yjR085Ee1uLx)

- **Important note about package names in a monorepo:**

  - We need to ensure that package names in a monorepo do not compose one
    another (are not substrings of one another) or else we risk dependabot
    associating incorrect release notes to upgrades. For example, if we have a
    package `sourcecred` we **cannot** create a package `sourcecred-plugin`

- **Prerequisites:**

  - Have an [NPM account](https://www.npmjs.com/) with Two-Factor Auth (TFA)
    enabled and get added to our NPM team
  - This is an alias that adds the contribution command to git
    `git config --global alias.contributions 'log --grep="[Bb]ump" --invert-grep --pretty=oneline'`
  - Generate a github personal access token and get the prod discord token from
    @Kevin or @Thena, and put them either in the local env or in a .env file as:
    SOURCECRED_GITHUB_TOKEN and SOURCECRED_DISCORD_TOKEN
  - ...?

- **Instructions:**

  - open two empty terminal windows
  - in your first terminal window, navigate to the
    `sourcecred/sourcecred`repository
  - `git stash` stash any changes
  - `git checkout main && git pull --rebase` get the latest changes and rebase
    your main branch
  - `yarn build`
  - `git log` double-check that you have the changes you want to include in the
    release
  - Run some tests:

    - in second terminal window navigate to `sourcecred/cred` clone:
    - `git checkout origin/gh-pages && git pull`
    - load your github and discord token
    - `scdev go` run all the things to make sure they are working (note `scdev`
      is an alias - see
      [readme](https://github.com/sourcecred/sourcecred/tree/master/packages/sourcecred#using-a-modified-backend)
      )
    - `scdev serve` spin up the UI
    - open a browser and manually test the UI - look for places that might be
      broken due to new changes and make sure everything is working as expected

      - ideally we hope to have Cypress for frontend testing, in the meantime we
        need to test manually

    - once you have tested the UI and everything seems solid, you are ready to
      publish your version release!

  - Publish the thing to GitHub

    - Create the branch and version bump commit:

      - go back to your `sourcecred/sourcecred` terminal window
      - `git checkout -b version-0.8.5` create a branch
      - open the `packages/<package folder name>/package.json` file in your
        favorite text editor and manually update the number next to `version` to
        your new version number (`0.8.5` for this example) and then save the
        updated `package.json`
      - run `git add packages/<package folder name>/package.json` in your
        terminal window
      - `git commit -m 'Bump <packagename> version to 0.8.5'` commit your
        changes e.g. `Bump sourcecred version to 0.8.5`
      - `git push origin head -u` push your changes to your new branch

    - Create the version bump PR:

      - in a browser, navigate to GitHub and make a pull request with your new
        branch
      - get someone else to review and approve your pull request
      - once your PR has been approved, merge your pull request

    - Make the GitHub Release:

      - go back to your first terminal window (in the `sourcecred/sourcecred`
        repo)
      - `git checkout main`
      - `git pull --rebase`
      - `git tag packagename-v0.8.5` create a git tag for your version release,
        e.g. `git tag sourcecred-v0.8.5`

        - for non-monorepo version publishing, you can omit the package name
          prefix e.g. `git tag v0.8.5`

      - `git push origin packagename-v0.8.5` push the tag up to GitHub
      - in a browser, go to the `sourcecred/sourcecred` repo homepage and click
        on 'Releases'
      - If a draft release has already been made for this version, click edit
        and enter the tag in the "tag" input box at the top, else:

        - click on the 'Tags' tab
        - click on the "..." on your new tag and click "Create release" in the
          dropdown (if one already exists, click edit and enter the tag in the
          "tag" input box at the top)

      - go back to the terminal to get your commit history to add to the release
        notes
      - in your first terminal window, run
        `git contributions packagename-v0.8.4...packagename-v0.8.5 > contributions.txt && cat contributions.txt`
        (using the last version number and the new version number)
      - copy the list of contributions, go back to your browser on the release
        page and paste the list of contributions into the text box at the very
        bottom with the title `# Contributions`
      - add relevant details to the release notes - anything that is important
        for instance maintainers to know that is a part of this release, for
        example:

        - documentation of how to use new commands
        - any breaking changes

    - Publish to NPM

      - **Make sure you've published the release notes before publishing to
        NPM** to ensure that the release notes are included in resultant
        dependabot pull requests
      - in your sourcecred/sourcecred terminal window, run `npm login` and enter
        your credentials when prompted
      - `yarn lerna publish from-package` and enter one-time password from your
        2FA when prompted
      - in a browser, go to
        [the NPM website](https://www.npmjs.com/package/sourcecred) to make sure
        the package has updated properly

- **A fun interactive terminal function you can add to your (ba)(z)shrc:**

  - This will do all of the above instructions and has pause points that prompt
    you through the manual steps. It should also be re-run friendly in case you
    need to start over.

```plain
version-bump() {
  if [ $# -ne 2 ]
    then
      echo "Provide 2 arguments: package name, version number"; return 1
  fi
  git stash
  git checkout main
  git branch -D branch-$1-$2
  git pull --rebase
  yarn build || return 1
  git checkout -b branch-$1-$2 || return 1
  echo
  echo "\nNow manually test from a test instance using 'scdev'"
  echo "Once you are done with that..."
  press-y
  echo "\nNow use a text editor to change the version number in packages/$1/package.json"
  echo "Once you are done with that..."
  press-y
  git add packages/$1/package.json
  git commit -m "Bump $1 version to $2"
  git push origin head -u --force-with-lease || return 1
  echo "\nNow create a PR at the above link and get it approved and merged."
  echo "Once that's done..."
  press-y

  git checkout main
  git pull --rebase
  git tag $1-v$2
  git push origin $1-v$2 || return 1
  echo "\nNow you just need to create the release notes and then publish to NPM! You're on your own from here."
}
```
