> If you want to go fast, go alone. If you want to go far, go together.

As a community, we value going far over going fast. To go far, we need to stay
aligned in our values, goals, and practices. One of the ways that we do this is
through cultivating review culture.

# On Review Culture

Review culture came to us from the practices of software engineers. Large
codebases are incredibly complex: they contain the ideas and work of hundreds
of people, manifested in millions of lines of code. They need to remain
logically consistent, even as they grow and change. A big part of how engineers
manage is through code review: every single change to the system is reviewed by
at least one other person before becoming official, or "merging".

Ensuring that all work is reviewed brings several benefits. Most obviously, it
leads to higher quality work, because the final output includes feedback and
suggestions from others. Just as importantly, reviews enable the exchange of
knowledge, context, and perspective within the team. In a good review, both the
contributor and the reviewer can teach each other about how work gets done on
the project. Finally, review ensures that every part of the project is
understood by at least two people.

# The Review Process

## Changes
The review process orients around _changes_, which are the units of work being
reviewed.

A change can take many forms, for example:
- Adding a new guide or piece of documentation
- Adding a new module to the codebase
- Modifying an existing guide or module


## Participants in the Review Process

### Contributor

The contributor is the person proposing a change. Anyone can decide to be a
contributor: the only requirements are that you have a change you need to
propose, and that you agree to be a respectful participant in the review
process. (When we have a code of conduct--link to it here.)

### Reviewer

The reviewers are the people who review the change, suggest changes to it, and
eventually approve it. Anyone in the community can act as a reviewer: the only
requirements are that you have some insight to share (or questions to ask)
about the change, and that you agree to be a respectful participant in the
process.

### Maintainer

The maintainers are responsible for the health and maintenance of the project,
and have final say in the review process. Maintainers can block changes they
think are harmful, or approve a change over others' objections. Someone can be
a maintainer within a specific domain: for example, acting as maintainer for a
particular repository, or even maintaining a particular guide. Since
maintainers have special powers, they also have a special responsibility to act
thoughtfully and fairly. New maintainers are chosen by the existing
maintainers. In general, people who have a long track record of acting as
contributors and reviewers may be good candidates for becoming maintainers.

## Lifecycle of a Review

### Proposal
The first step is for a contributor to propose a _change_.
The contributor needs to do two things at this stage:
- Flesh out the change (e.g. writing the code), so that there is something to review
- Explain the change (e.g. writing a pull request description), so that reviewers can easily understand it

Both steps are vital, and contributors should put real effort into explaining the change well.
Its not fair to ask a reviewer to puzzle through an undocumented change.

Finally, before requesting a review, the contributor should _self-review_ their change.
It's amazing how many issues can be spotted and fixed during self-review.
This is respectful of reviewers' time, and makes the process a lot smoother.

### Review

Once a change is ready and has been self-reviewed, it's ready for review. Since
most SourceCred artifacts are tracked via repositories on GitHub, this will
usually mean creating a pull request.

Once the change is proposed, anyone in the project can add their own review.
The person proposing the change can also request specific reviewers, if certain
individiuals have context or knowledge thet will make their reivew particularly
valuable.

On finishing their review, the reviewer can:
- ask questions to better understand the change
- suggest changes to it
- approve the change

Most changes go through a few rounds of reviews before being approved.

### Approval and Merging

During the review process, a successful change will accumulate "approvals" from
satisfied reviewers. At some point, the change will have "enough approvals" and
will be ready to merge. There's no hard-and-fast rule to determine when a
change has enough approvals. Generally, simple and small changes are easy to
approve, whereas changes that are breaking new ground, or have wide-ranging
consequences, will require more reviews. If you're unsure as to whether a
change is ready to merge, ask one of the maintainers.

### Changes that never merge

Some changes don't ever merge. A few good reasons why this may happen include:
- Reviewers may find that the change isn't actually needed, is basically
  unsound, or isn't aligned with the project's values or goals
- Over the course of review, the contributor or reviewers may find a different
  and better way to achieve the same goals

# Best Practices for Reviewers

## Be respectful and appreciative

As a reviewer, you should be respectful and appreciative towards the person
proposing the change. This is true especially when you quite disagree with the
change itself. It's fine to express strong beliefs that a change is misguided,
but you shouldn't make the contributor feel belittled.

## Limit nit-picking

Nit-picking is when a review focuses more on small, superficial details (e.g.
precise formatting or word choice) rather than on the substance of the change.
Nit-picking is a lot easier than substantive review, which can make it
tempting. It's ok to nit pick in moderation; when nit-picking, it's polite to
preface your suggestion with "nit", as in: "nit: this comma should actually be
a semicolon". Avoid holding up a review over nits.

## Avoid "not how I would have done it"

As a reviewer, you'll often notice that someone has made a change differently
from how you would have made it. It can be tempting to think that your way is
_the_ right way, and to ask the contributor to change their approach. Before
doing this, you should ask: in what ways is doing it my way materially better?
What benefits come from the changed approach? If you don't have clear answers
to these questions, don't ask for the change.

