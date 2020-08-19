---
title: Discord
description: Setting up the Discord plugin.
---

The Discord plugin assigns Cred to contributors participating in Discord chats; for example, by posting and reacting to messages. 



The plugin does this using a special bot that scans a Discord server and captures all messages and emoji reactions. The data is temporarily cached, but the
source of truth for the Discord plugin is always the live
Discord server. That means that if content is deleted on Discord, it will
also disappear from the Discord plugin (after a cache refresh) {SB: copied from Discourse plugin, true for Discord also, right?}.


For instructions on setting up the bot and configuring the plugin, see the [Configuration](#configuration) section below. 


## Cred flow

Cred is minted on Discord reactions. It then flows to connected nodes.

TO DO: add example with diagram....The below diagram illustrates a typical pattern of Cred flow in Discord....



The full set of node and edge types used by the Discord plugin are defined below.

### Nodes

The Discord plugin creates the following types of nodes in the contribution graph:

- **User**:

A Discord user account, e.g. [@decentralion {SB: correct link?}](). User accounts do not mint Cred, so setting a node weight would have no effect. Using the identity plugin, it's possible to "collapse" user nodes with other identity nodes into a single, canonical identity. For example, if a contributor had a Discord user account and a GitHub account, then the identity plugin can collapse those identities together.

Users are connected to messages they author, to messages they react to, and to messages that mention them {SB: is this true?}.

- **Guild Member**:

A Discord user account, e.g. [@decentralion {SB: correct?}](), that has special powers. E.g. their reactions mint more Cred {SB: totally making this up here. Is this part of beta launch, or just a hidden alpha feature for MetaGame?}

- **Bot**:

{SB: below is copied from GitHub page. Still true for Discord? Do we support Discord bots?}
A Discord user account that has been explicitly marked as a bot, via inclusion in bots.js. This is useful so we can filter out bot accounts from receiving grain or showing up in the Cred rankings.

Bots have the same connections as users.

- **Message**:

A Discord message, e.g. ["Welcome to the SourceCred community!..."](https://discordapp.com/channels/453243919774253079/715770410955964477/715776215528505385) {SB: this is a link to the welcome message in the SourceCred Discord #start-here channel}. A message node will be connected to its author (user node creating the message), emoji reactions to the message, and any references to the message {SB: is this true??}. 

[INSERT SCREENSHOT MESSAGE]

- **Channel**:

A Discord channel, e.g. [#start-here](https://discord.gg/qadM9u) {SB: link needs checking. Got link by clicking 'Create Invite' on the channel, but getting 'invalid link' msg for some reason when I try it locally). A channel node will be connected to all messages in that channel. 

Found this in the code and pasting here in case the plugin exposes these channel types. 

```
 * Discord Channels can be of various types, defined below.
 * See: https://discordapp.com/developers/docs/resources/channel#channel-object-channel-types
 */
export type ChannelType =
  | "GUILD_TEXT"
  | "DM"
  | "GUILD_VOICE"
  | "GROUP_DM"
  | "GUILD_CATEGORY"
  | "GUILD_NEWS"
  | "GUILD_STORE";
```

- **Reaction**:

A Discord emoji reaction, e.g. [insert cute emoji reaction code]. When a user reacts to a message, a reaction node is created that is connected to the author of the reaction (user that reacted) and the message reacted to. 


[INSERT SCREENSHOT REACTIONS TO MESSAGE]


### Edges

The Discord plugin creates the following kinds of edges (connections between nodes) 
in the contribution graph:

- **Authors**:

An "authors" edge connects an author (user or bot) to a message they created. 

- **References**: 

{SB: below is just copied and pasted from teh Discourse draft, as I'm not sure references count in discord}

```
A references edge connects a topic or post to another referencable node (i.e. a node that corresponds to a specific url on Discourse ). {SB: taken from GitHub plugin, still correct? Just say referenceable nodes are topics/posts/users?}

If the reference is pointing to a user, we call it a "mention", but from SourceCred's perspective it's the same kind of edge. {SB: taken from GitHub plugin, still correct?}

References in Discourse can be either hyperlinks to referencable nodes, or quoted parts of other posts {SB: I'm kind of guessing here, would be good to get more detailed explanation, and perhaps include a illustrative example (e.g. a quote that links to both text and image if supported?). This brings up another questions I've had for a while: when you select and click the "Quote" button in the UI, it automatically creates a reply, presumably creating both a reply edge and reference edge. But what if you've already started a reply, and are selecting quotes from the UI from a post different than the one you started replying to? What if you're quoting multiple posts in the same reply?}
```

- **Reply to**:

{SB: below is just copied and pasted from teh Discourse draft, as I'm not sure references count in discord}

```
A reply-to edge connects a post to the post it is replying to.  


The Discourse plugin creates the following kinds of edges (connections between nodes) 
in the contribution graph:
```
- **Creates Reaction**:

A "creates reaction" edge connects a reaction node to its author and reacted to message. {SB: just guessing here}

## Configuration

In order for SourceCred to be able to access your Discord server's messages, reactions and other data {SB: other data sound ominous? Is it just messages, reactions and channels?}, it uses a simple bot whose only function is reading messages and reactions in your server. Creating the bot and adding it to your server will require admin permissions. You will also need to be logged into the [Discord web app](https://discord.com/) with the same account with admin permissions.

Below are the basic steps to create a bot, point it at your Discord server and optionally set custom emoji reaction weights. 

1. **Enable Developer Mode**
  
  Under User Settings -> Appearance -> Advanced, turn on 'Developer Mode'. This will give you the ability to right click on items and copy their Discord IDs.
  
2. **Configure server ID**

  Right click on your server and click 'Copy ID'. Open the Discord plugin configuration file located at `config/plugins/sourcecred/discord/config.json` and paste the server ID into the `guildId` field. 
  
3. **Create Discord Application**

  Bots require an associated Discord application. In your browser, navigate to the [Discord Developer Portal](https://discord.com/developers/applications). Click the 'New Applicaiton' button. Discord will prompt you to enter the name of your application and a description of it. The name and description can be anything you want. The application is simply to give the bot the ability to communicate with Discord APIs. 
  
  Once you have created your application, click on the 'General Information' tab. You should see a `CLIENT ID` under the application name. Copy this ID. You'll need it later.  

4. **Create Bot**

  Click on the 'Bot' tab and click= the 'Add bot' button. When prompted, confirm that you want to add the bot to the application. On the Bot tab, you should now see your bot. You should also see a 'TOKEN' field under the 'USERNAME' field. Copy this token. 
  

5. **Invite Bot to Server**

  You can invite your bot to your server by constructing a URL with the following format {SB: changed '66560' to '8' in the below URL tmeplate per PR: https://github.com/sourcecred/template-instance/pull/7 , which is still open at time of writing}:  
  `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot&permissions=8`

  , where `CLIENT_ID` is the application ID you copied in Step 3. For example, if your CLIENT_ID = 1234, the URL would be:
  
  `https://discordapp.com/api/oauth2/authorize?client_id=1234&scope=bot&permissions=8`
  
  Paste this URL into the browser you're logged into Discord with admin permissions. You will then be prompted to select your server and give the bot permissions to read messages and message history. 
  

6. **Set Environment Variable**

  Create an environment variable named `$SOURCECRED_DISCORD_TOKEN` and set it to the bot token created in Step 3.
  
  ##### Running Locally
  
  If running SourceCred locally, the environment variable can be set like any other. The one liner below will set the environment variable temporarily for the current terminal session. 
  
  ```$ export SOURCECRED_DISCORD_TOKEN=BOT_TOKEN```

  ##### Running on GitHub
  
  If you have configured SourceCred to run automatically on GitHub, you'll need to add the bot token to the GitHub Action that updates scores. Checkout [this guide](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) for how to add the token as a Secred that can be read by the Action. 
  
7.  **(Optional) Custom Weights**

  SourceCred can be configured to mint different amounts of Cred for different emojis . This is done by setting custom reaction weights in the Discord plugin configuration file: `config/plugins/sourcecred/discord/config.json`. 
  
  
  If you want to change the weight for a default reaction, just put the reaction's literal emoji in `config.json`. For example, if you wanted the 💜 emoji to have a weight that is 5 times a regular reaction, add the line `"💜": 5` to the `config.json`, as shown below. 
  
  ```
  {
  "guildId": "742885338065666150",
  "reactionWeights": {
    "👍": 1,
    "💜": 5,
    "sourcecred:678399364418502669": 10,
  }
}
```
  If you want to set a custom weight for a custom emoji, you'll first need to get the custom emoji ID. You can get this by right clicking on the custom emoji and clicking 'Copy Link'. This will give you a URL to an image of the emoji. The numberic substring in the URL is the emoji ID. For instance, below is the URl for a custom sourcecred emoji called `:sourcecred_pink:`.
  
  `https://cdn.discordapp.com/emojis/745438325086879794.png?v=1`
  
  The emoji ID is `745438325086879794`. The reaction weight is then specified in `config.json` using the following format: `$EMOJI_NAME:$EMOJI_ID`. So if we want to have `:sourcecred_pink:` be 20 times a regular reaction, we would add the below line to `config.json`.
  
  `"sourcecred_pink:745438325086879794": 20`
  
  


[Yarn]: https://classic.yarnpkg.com/

## Status and Caveats

{SB: below copied and pasted from Discourse draft for inspiration. Need to create for discord plugin}

```
The Discourse plugin is currently in Beta. It assigns Cred scores that are reasonable and
robust for a [trust level]{SB: needs link} 3 community.

Currently, there are two general approaches to minting Cred you can take with the
Discourse pluginL activity-minted and like-minted Cred (or a hybrid of the two).
Activity-minted Cred means Cred would be minted for each new topic or post
created. While like-minted Cred mints new Cred for each like given.

The plugin defaults to using like-minted Cred. For most communities this will
be the better approach. Unlike activity-minted Cred, like-minted Cred allows people to
validate contributions. People soon learn their likes signal "this is valuable
and I'd like to see more of this", which incentivizes the creation of
high-quality posts.

The caveat is that it creates some "popularity contest" dynamics, where memes
and/or heavily promoted posts might receive more likes than makes sense for the
relative value they've added. It's something which would be easy to game, making it
less suitable for lower trust levels for the time being.

{SB: the below para wasn't in the original docs, but is just me speculating based
on past convos. We may want to remove if we can't provide enough
guideance for it to be useful}
Another caveat is that when a Discourse forum is very new, and does not have 
much content, activity-minted Cred may be more suitable, at least in the beginning.
This is because new forums are often "lower stakes" (unless you're paying significant
sums of money according to scores right away, or have other strong incentives for gaming). In new forums, the community is likelier to be smaller,
higher trust, and less susceptible to gaming. In addition, you may want to incentivize
raw activity in order to build up enough content to attract more users. 

Another thing to keep in mind is that only public posts are included for Cred
calculation. Private categories and private messages, for example, receive no
Cred. This both creates an incentive to have discussions in public as much as
possible, and is necessary for security as private data could otherwise leak.


{SB: below are the commands from the original docs on this (which I can't seem to find to link to..:/). Mainly 
including just to raise the issue of where we want these instructions to live. Here? In setup guide? CLI docs? Do we want to point to configuration docs for turnign the dial between activity-minted and like-minted Cred?}
```





