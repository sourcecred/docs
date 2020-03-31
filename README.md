# SourceCred Documentation

This repository is the source-of-truth for SourceCred's documentation. You
can browse the static files here under [_docs](_docs) or view the
rendered interface at [https://sourcecred.github.io/docs](https://sourcecred.github.io/docs)

## Organization

You can browse the markdown files under [_docs](_docs) from the repository
as is - these are organized by subfolder and the organization should be intuitive:

 - [community](_docs/community): includes a glossary of concepts, and code of conduct
 - [culture](_docs/culture): aspects of SourceCred culture like trust levels, and reviewing practices.

## Usage

The docs render natively on GitHub pages using [Jekyll](https://jekyllrb.com/), however
you don't technically need to know anything about jekyll to contribute!
The steps for adding or editing any document means editing a markdown file in
the [_docs](_docs) folder. You can do this in the GitHub interface directly,
or by cloning to your local machine, discussed next.


### 1. Get the code

You can clone the repository as follows:

```bash
git clone https://github.com/sourcecred/docs
cd docs
```

### 2. Make Changes

At this point you can edit pages in [pages](pages) or [_docs](_docs) and add new pages
as you see fit. See the [development](#development) section for how to update the table of
contents or navigation, and [open an issue](https://github.com/sourcecred/docs/issues) 
if you need some help! 

#### Making a New Documentation Page

You can write a markdown file anywhere in [_docs](_docs) that seems appropriate.
The only difference is that you need to add a header snippet that looks like this:

```yaml
---
title: Getting Started
tags: 
 - jekyll
 - github
description: Getting started with Docsy Jekyll
---
```

Let's say that we put this in a file called `_docs/getting-started.md`. This
would render on the site to `/docs/getting-started/` and we could add to our navigation
as such. How might we do that? In the [_data/toc.yml](_data/toc.yml) it might look
like this:

```yaml
- title: Documentation
  url: docs
  links:
    - title: "Getting Started"
      url: "docs/getting-started"
      children:
        - title: Features
          url: "docs/getting-started#getting-started"
        - title: Development
          url: "docs/getting-started#development"
        - title: Customization
          url: "docs/getting-started#customization"
```

But what are these children? They are actually other header tags on that
same page, but provided in the table of contents as first class citizens so
the reader can find them easily.

#### Making a New Page

If you add a page like "About" that is not considered a document but is part of the
site, you can add an equivalent markdown file to [pages](pages) but the
header should look like this:

```yaml
---
title: About
permalink: /about/
---
```
The only difference is needing to add a `permalink`, which you can then reference
in the same table of contents.

```yaml
...
    - title: "About"
      url: "about"
```

#### Adding to Navigation

To add a page to the Navigation bar (e.g., like "About") you can just
add it to [_data/navigation.yml](_data/navigation.yml).

```yaml
- title: About
  url: about
- title: Documentation
  url: docs
```

### 3. Serve

**optional**

If you want to preview your changes, you can [install Jekyll](https://jekyllrb.com/docs/installation/windows/#installing-jekyll) 
and render the site locally as follows:

```bash
jekyll serve
# or
bundle exec jekyll serve
```

However this is not necessary as the site will be rendered for preview when you open a pull request.

### 4. Open a Pull Request

Once you've made changes on your new branch, open a new pull request to have them
reviewed! When they are merged to master they will go live on the site.


## Development

The theme itself is based on [docsy-jekyll](https://github.com/vsoch/docsy-jekyll)
and you can read the [documentation there](https://vsoch.github.io/docsy-jekyll) for development tips! Generally:

 - [_config.yml](_config.yml) holds configuration and metadata values
 - [pages](pages) is for static (non changing) pages like the About page.
 - urls are defined based on the `permalink` attribute for pages
 - navigation items can by added by adding an entry to [_data/toc.myl](_data/toc.yml)
 - The top navigation is controlled by [_data/navigation.yml](_data/navigation.yml)

Once the structure of the site is developed, you shouldn't need to edit these fields too much!
However if you want to add a new page (to [pages](pages) or [_docs](_docs)) please don't
hestiate to [open an issue](https://github.com/sourcecred/docs/issues) - we are here to help you!
