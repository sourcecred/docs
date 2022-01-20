---
title: "[SOP] Facilitator Role Abilities"
description: "Here's how to do some facilitator-y things in our Discord server. "
---
This document is currently in progress. Ezra, aka @helpy-boy, is writing it to make it easier to onboard new facilitators and to outline a potential "facilitator" role on discord.

## Meeting Notes
We use a bot to record who is present in a call. 

### Activating the bot
In order to activate the bot, go to the #bot-commands channel and type the following:
```
!meeting --outputchannel meeting-notes --duration insert_duration_in_minutes_here
**name_of_event_goes_here**
```
One can add other important information, such as who is facilitating or taking notes; where the notes can be found; and other important artifacts. (In order for facilitators and notetakers to get proper cred for the meeting, **you must tag them** in the bot command.) This looks like:
```
!meeting --outputchannel meeting-notes --duration insert_duration_in_minutes_here
**name_of_event_goes_here**
Facilitator: @discord_handle_of_facilitator(s)
Note-taker: @discord_handle_of_notetaker(s)
Notes: link_to_url_of_notes
Artifact(s): link_to_other_pertinent_info_here
```
### Editing the meeting note
Once the bot is running, the person who started the bot can edit the meeting note by editing command until 30 minutes after the duration's end. After that, only someone with <<some kind of permissions? idk which ones>> can edit the meeting note.


## Muting Users on Calls
If you are on a call and someone is unmuted and making distracting or disrupting noise, there are options. 

### Ask them to mute
If the meeting is not urgent, the sound is not awful, or it generally doesn't feel super annoying, **ask them to mute themself first**, either by saying so aloud or tagging them in the #meeting-chat with a request. 

### Server mute 
If they do not respond to a request to mute or the sound is an urgent issue, **you can server mute them.** (To do so, you must have discord permissions.) In the call pop-up showing people on the call, right-click on the user's video/icon. Select "server mute" in red. **Let the person know you have muted them, and ask them to tell you when they want to be unmuted.** Server mutes prevent the user from unmuting themself until you (or someone with discord permissions) un-clicks "server mute".  When you un-click "server mute", the user will (a) be unmuted again and (b) be able to mute and unmute at will.   
