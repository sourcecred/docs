---
title: "[SOP] Facilitation Tech"
sidebar_label: "[SOP] Facilitation Tech"
---

# [SOP] Facilitation Tech

This document exists to teach facilitators how to do tasks associated with
facilitation, and to tentatively outline a potential "facilitator" role on
discord. It was written by Ezra (helpy-boy) and was last edited by Ezra on Feb
10, 2022.

## I. Definitions

A **facilitator** is someone who helps meetings flow. Facilitation can involve
wearing many hats and acting out many different roles. Some delineation of roles
include:

- Vibe-checker: Someone who attends to the general mood of a meeting. How are
  people feeling? Do people seem distracted or upset? It’s a vibe-checker’s duty
  to read the general mood (including asking how people are feeling) and call
  for breaks and shifts in focus.
- Time-keeper: Someone who attends to the time. No one likes staying in meetings
  longer than they have to. Are meeting attendees focusing on one topic for a
  long time when there are more items to cover and time is ticking down? It’s up
  to the time-keeper to let people know how much time is left in a meeting and
  recommend topic-shifting.
- Stack-keeper: Someone who keeps track of who is in line (“stack”) to speak
  next. This person knows the hand-signals and tracks who threw up which hand
  signal to speak when. The stack-keeper often also tracks the agenda, if one
  was made.
- Chat-tracker: Someone who pays attention to the chat so those who aren’t using
  audio can contribute to the meeting.
- Notetaker: Someone who takes notes. These can be written in so many different
  ways, ranging from barebones topic umbrellas to full transcripts.
- Craig-wrangler: Someone who invites and disinvites Craig, our audio recording
  bot.

A **trusted facilitator** is a facilitator who has been given additional Discord
permissions because they have been determined to be a responsible and
trustworthy user of those permissions. This role, and how a person can gain or
lose this role, is currently being defined. Currently, the list of trusted
facilitators includes Thena, Ezra, Yaz, and Ryeder.

## II. Role abilities

All **facilitators** (and all meeting participants) should be able to:

- Write and (within a time limit) edit meeting notes
- Ask people to mute themselves
- Invite & disinvite Craig, our audio-recording bot
- Create polls Additionally, **trusted facilitators** should be able to:
- Edit a meeting note within a larger time limit
- Mute people on calls

## III. Meeting Notes

We use a bot called meeting-attendance to record who is present in a call. The
bot will automatically record the usernames of participants, aka anyone who is
in the call for 5+ minutes, in a meeting note. The bot will stop recording new
participants after the specified duration has ended. The notes the bot takes
live in the #meeting-notes channel.

### A. Activating the bot

In order to activate the meeting-attendance bot,

1. Enter the discord room in which you intend to have the call.
2. Go to the #bot-commands channel and enter the following:

```
!meeting --outputchannel meeting-notes --duration insert_duration_in_minutes_here
**name_of_event_goes_here**
```

One can add other important information, such as who is facilitating or taking
notes; where the notes can be found; and other important artifacts. (In order
for facilitators and notetakers to get proper cred for the meeting, **you must
tag them** in the bot command.) This looks like:

```
!meeting --outputchannel meeting-notes --duration insert_duration_in_minutes_here
**name_of_event_goes_here**
Facilitator: @discord_handle_of_facilitator(s)
Note-taker: @discord_handle_of_notetaker(s)
Notes: link_to_url_of_notes
Artifact(s): link_to_other_pertinent_info_here
```

### B. Editing the meeting note

#### Soon after the meeting note was created

Once the bot is running, the person who started the bot can edit the meeting
note until 30 minutes after the duration's end. They can do this by by editing
the command-message they posted in #bot-commands just like they would do with
any other message they’ve written on Discord.

1. Hover your cursor over to the message and click the pencil icon that appears.
2. Edit and then hit “enter” on your keyboard to save the edits.

#### Long after the meeting note was created

After 30 minutes have passed after the end of the meeting duration, **only
someone with server permissions** can edit the meeting note. There are two
commands for this, which one uses in the bot-commands channel: **!edit** and
**!append**. **Edit** fully changes the content of the meeting note. Whatever
was written there will be erased and replaced by whatever one writes in the
command. For example:

```
!edit link_to_meeting_note_posted_in_meeting-note_channel_by_meeting-attendance_bot
**name_of_event_goes_here**
Facilitator: @discord_handle_of_facilitator(s)
Note-taker: @discord_handle_of_notetaker(s)
```

**Append**, on the other hand, just adds things to the end of the existing
meeting note. For example:

```
!edit link_to_meeting_note_posted_in_meeting-note_channel_by_meeting-attendance_bot
Notes: link_to_notes
```

## IV. Muting Users on Calls

If you are on a call and someone is unmuted and making distracting or disrupting
noise, there are options.

### A. Ask them to mute

If the meeting is not urgent, the sound is not awful, or it generally doesn't
feel super annoying, ask them to mute themself first, either by saying so aloud
or tagging them in the #meeting-chat with a request for them to mute.

### B. Server mute

If they do not respond to a request to mute or the sound is an urgent issue,
facilitators with server permissions to do so **can server mute them**. In the
call pop-up showing people on the call, right-click on the user's video/icon.
Select "server mute" in red. **Let the person know you have muted them, and ask
them to tell you when they want to be unmuted.** Server mutes prevent the user
from unmuting themself until you (or someone else with discord permissions)
un-clicks "server mute". When you un-click "server mute", the user will (a) be
unmuted again and (b) be able to mute and unmute at will.

## V. Using Craig

We use the Craig-bot to record audio of meetings. This makes it easier to write
notes after the fact and review what went on in a meeting. Discord users with
the Craig-bot permissions can invite and disinvite Craig. We typically wait
until after emotional check-ins to invite Craig, since many people don’t want
those recorded. **Do not record unless everyone consents.**

### A. Inviting Craig

To invite Craig into a meeting,

1. Join the meeting room the call will be in
2. Confirm that all participants consent to being recorded
3. In #bot-commands, enter the following:

```
:craig:join
```

Craig should enter the room, send you a direct message with a couple links, and
say “Now Recording”. 4. When Craig says, “Now recording”, tell them the date &
time, what meeting they are in, and any other relevant information.

### B. Disinviting Craig

To have Craig leave a meeting,

1. Stay in the meeting room
2. In #bot-commands, enter the following:

```
:craig:leave
```

3. **Take note of the link Craig sent you via direct message.** If someone in
   particular is in charge of downloading the audio and uploading it, send that
   link to them. If not…

### C. Downloading the audio file

1. Go to the link Craig sent to your direct messages. (Make sure to click the
   link to the recording, NOT the link to delete the recording.)
2. Choose the audio format you want. For more information, check the Craig SOP.
3. Go to the SourceCred Google Drive. Upload the audio file to the relevant
   folder. (This requires permissions.)
