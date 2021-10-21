---
title: Instance Setup FAQ
---

Below are some questions you might have, or errors you might run into while
setting up a new SourceCred Instance

### Common Errors - `Error: need at least one interval`

This error means there are no nodes are present. Check that you have at least
one bundled plugin specified in the `sourcecred.json`

### Common Errors - `No outflow from seed; add cred-minting nodes`

This error is caused because there is no cred-generating event. For the github
plugin, this can be fixed by simply merging in a PR, as the initial
cred-generating event. For discord, a message with an emoji is needed.
