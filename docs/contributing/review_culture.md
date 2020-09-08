---
title: ✅ Review Culture
description: The SourceCred review culture
---

> If you want to go fast, go alone. If you want to go far, go together.

As a community, we value going far over going fast. To go far, we need to stay
aligned in our values, goals, and practices. One of the ways that we do this is
through cultivating review culture.

## On Review Culture

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

## The Review Process

### Changes

The review process orients around _changes_, which are the units of work being
reviewed.

A change can take many forms, for example:

- Adding or changing official SourceCred documentation (in [sourcecred/docs](https://github.com/sourcecred/docs))
- Adding to or changing the SourceCred codebase
- Proposing a re-organization of the [SourceCred Discourse](https://discourse.sourcecred.io/)

### Participants in the Review Process

#### Contributor

The contributor is the person proposing a change. Anyone can decide to be a
contributor: the only requirements are that they have a change to propose, and
that they agree to be a respectful participant in the community.

#### Reviewer

The reviewers are the people who review the change, suggest changes to it, and
eventually approve it. Anyone in the community can act as a reviewer: the only
requirements are that they have some insight to share (or questions to ask)
about the change, and that they agree to be a respectful participant in the
community.

#### Maintainer

Maintainers are responsible for the health and maintenance of a portion of the
project. They are the stewards of the review process, and have the privileges
needed to move forward or block a change. Not everyone can be a maintainer; it
requires deep knowledge of the project, high trust from the community,
experience as both a contributor and reviewer, and substantial commitment.
Since we invest maintainers with special privileges and trust, we have high
expectations of them. Those acting as maintainers must be respectful,
considerate, and judicious in the way they exercise their powers.

### Lifecycle of a Review

#### Proposal

The first step is for a contributor to come up with and propose a _change_.
Before starting work on the change, they may want to run it by the community.
Often times community members will have great feedback on how to approach the
change, and whether it's valuable.

Once the contributor wants to move forward with the change, they will formally
propose it. They need to do two things at this stage:

- Flesh out the change (e.g. writing the code), so that there is something to review
- Explain the change (e.g. writing a pull request description), so that reviewers can easily understand it

Both steps are vital, and contributors should put real effort into explaining
the change well. Doing so is respectful of reviewers' time, and makes it easier
for others in the community to follow along with the project and get involved
themselves. Finally, the change's explanation acts as documentation for future
contributors hoping to understand the project.

Finally, before requesting a review, the contributor should _self-review_ their
change. It's amazing how many issues can be spotted and fixed during
self-review. This is respectful of reviewers' time, and makes the process a lot
smoother.

#### Review

Once a change is ready and has been self-reviewed, it's ready for review. Since
most SourceCred artifacts are tracked via repositories on GitHub, this will
usually mean creating a pull request.

Once the change is proposed, anyone in the project can add their own review.
The person proposing the change can also request specific reviewers, if certain
individiuals have context or knowledge thet will make their reivew particularly
valuable.

On finishing their review, the reviewer can:

- Ask questions to better understand the change
- Suggest changes to it
- Approve the change
- Suggest closing the change as 'wontfix'

Many changes go through a few rounds of reviews before being approved.

#### Approval and Merging

During the review process, a successful change will accumulate "approvals" from
satisfied reviewers. At some point, the change will have "enough approvals" and
will be ready to merge. There's no hard-and-fast rule to determine when a
change has enough approvals. Generally, simple and small changes are easy to
approve, whereas changes that are breaking new ground, or have wide-ranging
consequences, will require more reviews. If contributors are unsure as to
whether a change is ready to merge, they should ask a maintainer.

#### Changes that never merge

Some changes don't ever merge. A few good reasons why this may happen include:

- Reviewers may find that the change isn't actually needed, is basically
  unsound, or isn't aligned with the project's values or goals
- Over the course of review, the contributor or reviewers may find a different
  and better way to achieve the same goals

## Communication

### Be aware of culture

It's easy to forget how common it is in open source communities to have diversity
of geographic location, and different culture for communication.
As a new contributor to a community, whether you take on a reviewer or a maintainer
role, your default expectation might be that others in the community will behave as you would. However, it's often the case that different cultures have different standards for
communication. For example, in Western culture it's common to wrap criticism
with a complement:

> "You did a really good job on X, _but_ I wonder if we could talk about your decision for using this data structure?"

Other cultures might be more straight forward to directly give more blunt feedback:

> "The algorithm could be improved by this amount by using this data structure."

If you are expecting differently, the critique can feel mean when it is not intended to.
Thus, while the community encourages open and respectful communication,
it's good to keep in mind that this definition might vary depending on an individual's
background and previous experience. Regardless, disrespect or communication that is
hurtful is not ok. If you feel offended by an interaction,
it might be good to have an honest discussion with the other party involved and
talk about how the two of you can best communicate.

## Best Practices

### For Contributors

#### Prefer small changes

#### Document changes clearly

#### Self-review first

### For Reviewers

#### Be respectful and appreciative

As a reviewer, you should be respectful and appreciative towards the person
proposing the change. This is true especially when you quite disagree with the
change itself. It's fine to express strong beliefs that a change is misguided,
but you shouldn't make the contributor feel belittled.

#### Consider "nit-and-approve"

Some proposed changes look mostly good at a high level right off the bat,
requiring only local, targeted suggestions. Consider approving such changes on
your first review. You can still leave comments requesting changes from the
author. This implies that the author of the change should feel free to merge
the change once they've addressed your concerns. This is especially useful when
the comments are uncontroversial, like typo fixes. The reviewer doesn't have to
wait for you to take another look at the change and "officially" approve it
before they can merge it and move on.

Note that this requires a degree of trust. A reviewer should merge a change
only once they believe in good faith that all comments really have been
resolved, and that the author of each comment thread would not be surprised by
how the feedback was received and incorporated. As a change author, it can be
helpful for you to respond to all comments indicating how you addressed them.
(In many cases, this is evident, and the comment can just say, "Done.") If you
prefer not to incorporate some suggestion that wasn't intended to be optional,
you should probably continue the discussion rather than merging immediately.

#### Limit nit-picking

Nit-picking is when a review focuses more on small, superficial details (e.g.
precise formatting or word choice) rather than on the substance of the change.
Nit-picking is a lot easier than substantive review, which can make it
tempting. It's ok to nit pick in moderation; when nit-picking, it's polite to
preface your suggestion with "nit", as in: "nit: this comma should actually be
a semicolon". Avoid holding up a review over nits.

#### Avoid "not how I would have done it"

As a reviewer, you'll often notice that someone has made a change differently
from how you would have made it. It can be tempting to think that your way is
_the_ right way, and to ask the contributor to change their approach. Before
doing this, you should ask: in what ways is doing it my way materially better?
What benefits come from the changed approach? If you don't have clear answers
to these questions, don't ask for the change.

### For Maintainers

#### Include contributors even when closing their changes

It could be the case that your thinking has changed since a review has started,
and the change is no longer logical or necessary for the codebase. It might
also be the case that an individual is new to contributing on a platform,
and isn't quite sure how to best help. In both cases, as a maintainer you should
take every measure to engage the contributors. For example, although this would
be a respectful response:

> Thank you for your contribution! We've decided to go in another direction, so unfortunately we will not be integrating the change.

It ends the participation right away. Instead, you might consider
a statement that delivers the same message, but further engages the contributor:

> Thank you for your contribution! We've decided to go in another direction, and although we cannot use the changes here, would you be interested in working on [well-scoped task]?

The more specific feedback or well scoped task that you are able to engage
the contributor with, the better. This kind of engagement sends the message
that the contributor is valued and needed despite the particular review no
longer being relevant. Instead of being turned off by the interaction, the contributor
is encouraged to be more deeply involved with the project. The same is true for a new contributor
that might not have direction about how to help. A reviewer can ask questions or
suggest ways to help to more directly engage the contributor.
