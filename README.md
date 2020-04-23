# SourceCred Documentation

This repository is the source-of-truth for SourceCred's documentation.

The documentation website is based on [Docusaurus 2](https://v2.docusaurus.io/)
and you can read the [documentation there](https://v2.docusaurus.io/docs/introduction) for how to use it! Generally:

 - [docusaurus.config.js](docusaurus.config.js) holds configuration and metadata values
 - [pages](pages) is for dynamic ad-hoc React pages
 - [docs](docs) are for documentation content and pages
 - Sidebar items can by added by adding an entry to [sidebars.js](sidebars.js)
 - The top navigation and footer is controlled by the `themeConfig` value in [docusaurus.config.js](docusaurus.config.js)

Once the structure of the site is developed, you shouldn't need to edit these fields too much!
However if you want to add a new page (to [pages](pages) or [docs](docs)) please don't
hesitate to [open an issue](https://github.com/sourcecred/docs/issues) - we are here to help you!

---

## Organization

You can browse the markdown files under [docs](docs) from the repository
as is - these are organized by subfolder and the organization should be intuitive.

## Usage

The steps for adding or editing any document means editing a markdown file in
the [docs](docs) folder. You can do this in the GitHub interface directly,
or by cloning to your local machine, discussed next.

### 1. Get the code

You can clone the repository as follows:

```bash
git clone https://github.com/sourcecred/docs
cd docs
```

#### Installation

```
$ yarn
```

#### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

#### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### 2. Make Changes

At this point you can edit pages in [pages](pages) or [docs](docs) and add new pages
as you see fit. See the [development](#development) section for how to update the table of
contents or navigation, and [open an issue](https://github.com/sourcecred/docs/issues) 
if you need some help! 

#### Making a New Documentation Page

You can write a markdown file anywhere in [docs](docs) that seems appropriate.
The only difference is that you need to add a header snippet that looks like this:

```yaml
---
title: Page Title
description: Write what this page is about here
---
```

Let's say that we put this in a file called `docs/getting-started.md`. This
would render on the site to `/docs/getting-started` and we could add to our sidebar
as such. How might we do that? In the [sidebars.js](sidebars.js) it might look
like this:

```js
module.exports = {
  sidebar: {
    "🌎 Community": [
      'community/intro',
      'community/glossary',
      {
        '🧠 Concepts': ['community/concepts/cred', 'community/concepts/grain', 'community/concepts/champion', 'community/concepts/deep-then-wide', 'community/concepts/bikeshedding'],
      },
      'community/CODE_OF_CONDUCT',
    ],
    "🌟 Culture": ["culture/review_culture"],
  },
};
```

The values such as `community/intro` represent the path of the markdown file you want to link to. You can nest categories inside eachother like "Concepts" is nested inside "Community".

You can read more about writing documentation pages in the [Docusaurus docs](https://v2.docusaurus.io/docs/docs).

[Guide To Markdown Features](https://v2.docusaurus.io/docs/markdown-features)
- Learn about the various syntax you can use in the docs files
- Learn how you can embed React Components *within* your markdown using [MDX](https://mdxjs.com)


#### Making a New Page

If you would like to create ad-hoc pages using React, you can do so by creating a js file in the [pages](pages) directory. This will work like any other React web-app!

You can read more about creating pages in the [Docusaurus docs](https://v2.docusaurus.io/docs/creating-pages).


#### Adding to Navigation

To add links to the top Navigation bar or Footer you can dit the [docusaurus.config.js](docusaurus.config.js) file.

```js
module.exports = {
  themeConfig: {
    navbar: {
      title: 'SourceCred',
      logo: {
        alt: 'SourceCred Logo',
        src: 'img/favicon.png',
      },
      links: [
         {
           to: 'docs/community/intro',
           activeBasePath: 'docs',
           label: '📖 Docs',
           position: 'left',
         },
         {
           href: 'https://github.com/sourcecred',
           label: 'Github',
           position: 'right',
         },
        // ... other links
      ],
    },
  }
}
```

You can read more about configuring the navigation in the [Docusaurus docs](https://v2.docusaurus.io/docs/docusaurus.config.js#themeconfig).


### 4. Open a Pull Request

Once you've made changes on your new branch, open a new pull request to have them
reviewed! When they are merged to master they will go live on the site.



