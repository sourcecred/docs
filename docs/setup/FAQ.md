---
title: Instance Setup FAQ
sidebar_label: ❓Tech Support FAQ
---

Below are some questions you might have, or errors you might run into while
setting up a new SourceCred Instance. If you don't see your question answered
below, jump into our
[Tech Support channel on Discord](https://discord.com/channels/453243919774253079/718263631158050896/907349258221539348).

## Common Errors

### Error: need at least one interval

This error means there are no nodes are present. Check that you have at least
one bundled plugin specified in the `sourcecred.json`

### No outflow from seed; add cred-minting nodes

This error is caused because there is no cred-generating event. For the github
plugin, this can be fixed by simply merging in a PR, as the initial
cred-generating event. For Discord, a message with an emoji is needed. It's also
worth checking that the Discord bot you've configured is able to read any
channels in your server. For Discourse, a post with a like is needed. You may need to wipe your cache by running `yarn clean` after adding a cred-generating event.

### Error 137, Javascript heap out of memory

This error means the nodejs process running SourceCred is out of memory. Node
defaults to 1 GB of memory but this can be modified via a shell environment
variable like so:

```bash
# bash or zsh
export NODE_OPTIONS=--max_old_space_size=8192
```

Add this to your `.bashrc` or `.zshrc` file to allow Node access to 8 GB of
memory, for example.

If you're running into this in a Github Action, try adding the following under
the applicable job(s) where the error is occuring:

```yaml
env:
  NODE_OPTIONS: --max_old_space_size=8192
```

[Here's an example](https://github.com/1Hive/pollen/actions/runs/1410338394/workflow#L15-#L16)
of how to set this in a Github Action file. If you are still seeing out of
memory errors, you might want to consider a
[self-hosted runner](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)

## Configuration Questions

### Skipping private channel.

When you set up the Discord plugin, you created a bot token and invited it to
your server. If you want SourceCred to include private channels, you simply need
to give that bot permission to see those channels. The bot has a role
automatically created just for it that you can give "view channel" permissions
to in the channel settings on Discord, or you can give the bot "user" another
role that has more permissions in your server settings on Discord. Note: your
cred graph will include short message previews in the data, which may expose
some of the message content of private channels.
