---
title: Discord
description: Setting up the Discord plugin.
---

The Discord plugin assigns Cred to contributors participating in Discord chats;
for example, by posting and reacting to messages.

The plugin does this using a special bot that scans a Discord server and
captures all messages and emoji reactions. The data is temporarily cached, but
the source of truth for the Discord plugin is always the live Discord server.
That means that if content is deleted on Discord, it will also disappear from
the Discord plugin (after a cache refresh).

For instructions on setting up the bot and configuring the plugin, see the
[Configuration](#configuration) section below.

## Cred flow

Cred is minted on Discord reactions. It then flows to connected nodes.

The full set of node and edge types used by the Discord plugin are defined
below.

### Nodes

The Discord plugin creates the following types of nodes in the contribution
graph:

- **User**:

A Discord user account, e.g. @decentralion. User accounts do not mint Cred, so
setting a node weight would have no effect. Using the identity plugin, it's
possible to merge user nodes with other identity nodes into a single, canonical
identity. For example, if a contributor had a Discord user account and a GitHub
account, then the identity plugin can merge those identities together.

Users are connected to messages they author, to messages they react to, and to
messages that mention them.

- **Message**:

A Discord message, e.g.
["Welcome to the SourceCred community!"](https://discordapp.com/channels/453243919774253079/715770410955964477/715776215528505385).
A message node will be connected to its author (user node creating the message),
emoji reactions to the message, and any users mentioned in the message with an
"@".

- **Reaction**:

A Discord emoji reaction, e.g. 😂🌈💜🚀🤯. When a user reacts to a message, a
reaction node is created that is connected to the author of the reaction (user
that reacted) and the message reacted to.

### Edges

The Discord plugin creates the following kinds of edges (connections between
nodes) in the contribution graph:

- **Authors**:

An "authors" edge connects an author (user) to a message they created.

- **Reacts to**:

A "Reacts to" edge connects a reaction (emoji) to the message reacted to.

- **Adds reaction**:

An "Adds reaction" edge connects a reaction (emoji) to the author (user) of the
reaction.

## Configuration

In order for SourceCred to be able to access your Discord server's messages,
reactions and other data, it uses a simple bot whose only function is reading
messages and reactions in your server. Creating the bot and adding it to your
server will require admin permissions. You will also need to be logged into the
[Discord web app](https://discord.com/) with the same account with admin
permissions.

Below are the basic steps to create your bot, point it at your Discord server
and optionally set custom emoji reaction weights.

1. **Enable Developer Mode**

Under User Settings -> Appearance -> Advanced, turn on 'Developer Mode'. This
will give you the ability to right click on items and copy their Discord IDs.

2. **Configure server ID**

Right click on your server and click 'Copy ID'. Open the Discord plugin
configuration file located at `config/plugins/sourcecred/discord/config.json`
and paste the server ID into the `guildId` field.

3. **Create Discord Application**

Bots require an associated Discord application. In your browser, navigate to the
[Discord Developer Portal](https://discord.com/developers/applications). Click
the 'New Applicaiton' button. Discord will prompt you to enter the name of your
application and a description of it. The name and description can be anything
you want. The application is simply to give the bot the ability to communicate
with Discord APIs.

Once you have created your application, click on the 'General Information' tab.
You should see a `CLIENT ID` under the application name. Copy this ID. You'll
need it later.

4. **Create Bot**

Click on the 'Bot' tab and click the 'Add bot' button. When prompted, confirm
that you want to add the bot to the application. On the Bot tab, you should now
see your bot. You should also see a 'TOKEN' field under the 'USERNAME' field.
Copy this token for later.

Scroll down to the "Privileged Gateway Intents" section and enable the "server members intent" setting. This allows the bot to get a list of the members in your discord server.

![](/img/uploads/discord-setup-1.png)

5. **Invite Bot to Server**

You can invite your bot to your server by constructing a URL with the following
format :  
 `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot&permissions=66560`

Permissions options:

- `65536`: Read Messages and Message History (minimum)
- `66560`: Read Channels, Messages and Message History [suggested]
- `8`: Admin

The `CLIENT_ID` is the application ID you copied in Step 3. For example, if your
CLIENT_ID = 1234, the URL would be:

`https://discordapp.com/api/oauth2/authorize?client_id=1234&scope=bot&permissions=66560`

Paste this URL into the browser you're logged into Discord with admin
permissions. You will then be prompted to select your server and give the bot
permissions to read messages and message history.

6. **Set Environment Variable**

Create an environment variable named `$SOURCECRED_DISCORD_TOKEN` and set it to
the bot token created in Step 3.

##### Running Locally

If running SourceCred locally, the environment variable can be set like any
other. The one liner below will set the environment variable temporarily for the
current terminal session.

`$ export SOURCECRED_DISCORD_TOKEN=BOT_TOKEN`

##### Running on GitHub

If you have configured SourceCred to run automatically on GitHub, you'll need to
add the bot token to the GitHub Action that updates scores. Checkout
[this guide](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository)
for how to add the token as a Secret that can be read by the Action.

7.  **(Optional) Custom Weights**

SourceCred can be configured to mint different amounts of Cred for different
emojis . This is done by setting custom reaction weights in the Discord plugin
configuration file: `config/plugins/sourcecred/discord/config.json`

If you want to change the weight for a default reaction, just put the reaction's
literal emoji in `config.json`. For example, if you wanted the 💜 emoji to have
a weight that is 5 times a regular reaction, add the line `"💜": 5` to the
`config.json`, as shown below.

```json
{
  "guildId": "742885338065666150",
  "reactionWeights": {
    "👍": 1,
    "💜": 5,
    "sourcecred:678399364418502669": 10
  }
}
```

If you want to set a custom weight for a custom emoji, you'll first need to get
the custom emoji ID. You can get this by right clicking on the custom emoji and
clicking 'Copy Link'. This will give you a URL to an image of the emoji. The
numberic substring in the URL is the emoji ID. For instance, below is the URl
for a custom sourcecred emoji called `:sourcecred_pink:`.

`https://cdn.discordapp.com/emojis/745438325086879794.png?v=1`

The emoji ID is `745438325086879794`. The reaction weight is then specified in
`config.json` using the following format: `$EMOJI_NAME:$EMOJI_ID`. So if we want
to have `:sourcecred_pink:` be 20 times a regular reaction, we would add the
below line to `config.json`.

`"sourcecred_pink:745438325086879794": 20`

[yarn]: https://classic.yarnpkg.com/

## Status and Caveats

COMING SOON
