# YourNight: the idea explained in depth

**Type:** Android mobile app · **Status:** idea · **Version:** 1.2 · **Date:** September 21, 2026

---

## 1. The idea

YourNight is a night-out journal for groups of friends. When you go out partying, the app acts as a witness: it knows who went, what each person had, who was the best of the night, and how everything stands in the monthly ranking. What is currently scattered across group messages, phone notes, and loose photos is organized in one place.

The app combines three things: a **journal** (everything is saved and can be revisited), a **game** (there are points, awards, and healthy rivalry), and a **chat** (the group talks inside the app itself). It is not an open social network or a service for strangers. Only invited people can join, and only group members can see the content.

## 2. The problem it solves

Friend groups already do this in an improvised way. Someone keeps track of the rounds on their phone, someone else says who was the MVP of the night, and the photos end up scattered across three different chats. After a month, nobody remembers who won the title or how many nights there were. On top of that, nothing has rules: anyone can dispute the count.

YourNight brings order without taking away the fun. It adds a clear schedule (every event has a start and an end), a points system everyone understands, and automatic summaries that publish themselves instead of relying on someone remembering to make them.

## 3. A night on YourNight, step by step

Laura creates the group "Weekend Crew" and invites her eight friends with a code. Marc creates an event for Saturday: "Marc's Birthday", from 22:00 to 05:00, at Twenties Barcelona. Of the group's nine members, six sign up (Laura, Marc, Sergio, Ana, Pau, and Iván); the other three cannot make it and do not sign up.

Saturday arrives and, at 22:00, the event opens automatically. Each participant records what they are having with one tap: a beer, a mixed drink, a shot. Everyone can see live who is in the lead and who has fallen behind. Ana uploads photos from the night. At 03:00, the venue loses its signal, but that does not matter: anything recorded is saved on the phone and sent when the connection returns.

At 05:00, the event closes automatically. From that moment on, nobody can join, add drinks, or upload photos. The MVP vote then opens and lasts 24 hours. Five of the six participants vote; the sixth does not get around to it, so the vote closes when the 24 hours are up.

The app calculates the result. Laura wins MVP with three votes and also recorded the most drinks, so she earns 8 points. Marc wins the most shots award and receives one vote, so he earns 3. Sergio receives one vote and earns 1. Ana, Pau, and Iván finish the night with zero points. A summary of all this is posted in the group chat so anyone can relive the night.

When the month ends, the app adds up the points from all events and publishes the monthly summary, including the overall ranking. It shows who was the best of the month, who drank the most, and who was MVP the most times.

## 4. The features, one by one

### Accounts and groups

Each person signs up with their Google account or email, and chooses a nickname and a simple avatar (an emoji and a color), without needing to upload a profile photo. When signing up, they confirm that they are of legal drinking age, because the app deals with parties and alcohol consumption.

Any user can create a group and becomes its administrator. To invite someone, simply share a code or link. There are two roles: administrators, who manage the group (settings, categories, points, members), and regular members, who participate in everything else. A group can never be left without an administrator: if the only remaining administrator wants to leave, they must first give that role to someone else.

Each group can customize things to its liking. It can change the available drink types, how many points each award is worth, how long voting lasts, and how long photos are kept.

### Events

An event is a specific get-together: a party, drinks, or dinner. Any member can create one with a title, date, start time, and end time. They can add a description and the venue, which is entered manually (for example, "Twenties Barcelona"). A button next to the venue opens it directly in Google Maps, so nobody has to copy and paste anything.

The end time is also the deadline. Until then, anyone can join the event, record drinks, and upload photos. After that time, the event closes and nothing else can be added. Since photos also close at that point, it is best to set an end time with some leeway. For that reason, the creator or an administrator can extend it while the event is still live.

Joining an event is a personal decision: each member either signs up or does not. In a group of ten, perhaps only five attend, and only those five count for drinks, voting, and points. The attendee list is visible ("5 of 10 are going"), so everyone knows who is expected.

A group cannot have two events with overlapping schedules. Two consecutive events, one immediately after the other, are allowed. This avoids uncertainty about which event each drink belongs to.

### During the event

When the event is live, the main screen is a counter designed for one-handed use in a dark place and in a hurry. At the top are buttons for the categories: beer, mixed drink, shot, wine, non-alcoholic, or whatever the group has defined. One tap adds one, with a short vibration as confirmation. If you make a mistake, a prompt appears allowing you to undo it for a few seconds.

You can also record a friend's drink, for example when they cannot reach their phone. The app records who entered it to prevent misunderstandings.

Below that is the live ranking. It has two views: total drinks and shots. A shot counts as a drink and also appears in the shots ranking. Each category is marked as a regular drink, shot, or "other" (such as water or soft drinks), and "other" categories do not count toward the rankings, so drinking water is not a competition. The app also gives a friendly, non-blocking reminder (something like "You've had eight. Drink some water and take care getting home") when someone reaches a certain amount.

If the connection is lost, the app does not stop working. Anything recorded is saved with its actual time and sent when coverage returns. The idea is to accept it as long as the drink was recorded within the event schedule and arrives within a couple of hours after the end. Anything outside that window is discarded, because the schedule is the most important rule.

### Automatic closing

Nobody has to remember to close anything. At the start time, the event goes live; at the end time, voting opens; and when voting ends, the event closes completely. All of this depends on the server clock, not anyone's phone, so changing the phone's time cannot be used to cheat.

There are two special cases. If an event has fewer than two participants, there is no point in voting or giving awards, so it closes directly without points or a summary. The creator or an administrator can also intervene manually when needed: start earlier, extend the end time, end the event early, or close voting.

### MVP voting

When the event ends, each participant votes for whoever they think was the best of the night. The vote is secret: until voting closes, each person can only see their own vote. The only visible information is how many people have voted ("5 of 8 have voted"), to encourage the others. By default, people cannot vote for themselves, and everyone can change their vote while voting is open.

Voting lasts 24 hours. If all participants vote sooner, it closes immediately without waiting. Anyone who has not voted receives a reminder a few hours before closing.

If two people tie on votes, they are both MVP at the same time. If nobody receives any votes, there is no MVP that night.

### Points and awards

There are three awards for each event. The first is **MVP**, for whoever receives the most votes. The other two are automatic: **most drinks**, for whoever recorded the most, and **most shots**, for whoever had the most shots. If nobody recorded any shots, that award is not given.

Each award gives points, and each vote received does too. With the default scoring, MVP is worth 3 points, most drinks is worth 2, most shots is worth 2, and each MVP vote received is worth 1. Each group can change these values, including setting them to zero.

Returning to Marc's night: Laura, with three votes, won MVP (3 points) and most drinks (2 points), as well as earning 3 points for her three votes, for a total of 8. Marc won the shots award (2 points) and received one vote (1 point), for a total of 3. Sergio received one vote and earns 1. The points for each event are fixed when it closes: if the group later changes the scoring, already closed events are not recalculated.

### The event summary

When the event closes, the app generates a summary and posts it in the group chat. It includes the MVP, the winners of each award, the night's ranking with points, how many of the group's members attended, the group's totals (drinks and shots), the most popular category, the night's peak time, and the cover photo, if there was one.

That summary is final: it does not change even if settings are modified later. It can be opened at any time from the chat or the event itself, so the group can revisit it months later.

### The monthly summary and ranking

On the first day of the following month, the app publishes the summary for the previous month. It only does so once all events from that month have closed, so it is never incomplete. The month is determined according to the group's time zone.

It contains the overall points ranking and the month's "kings": whoever drank the most, had the most shots, and was MVP the most times. It adds the number of events and average attendance, and includes the cover photos from the month's events. If two people tie on points, the person with more MVP awards wins; if they are still tied, the person with more votes received wins; if the tie persists, they share the position.

In addition to the monthly summary, each group has a ranking that is always available and can be viewed by month, year, or all time.

### The group chat

Each group has its own chat with real-time text messages. It is text and emojis only: images belong inside events to conserve storage space. Automatic cards appear in the same thread when an event is created (with buttons to join or view it), when a summary is posted, and when someone new joins.

People can delete their own messages (an administrator can delete any message) and report problematic ones. The chat marks unread items and allows the group to be muted. Text messages are kept for around 90 days; cards and summaries are permanent.

### Notifications

Notifications cover what matters and nothing more: new event, event about to start, event live, voting open, reminder for anyone who has not voted, summary ready, and a warning before photos expire. Chat messages also trigger notifications, but they are grouped so they do not overwhelm the phone, and groups can be muted individually.

### Photos and memories

Each participant can upload photos from the event until the end time. To avoid taking up too much space, photos are resized and compressed on the phone before they are uploaded. There is a per-person limit for each event and a monthly limit for each group. Thumbnails are shown first, and the full-size photo appears when opened.

Photos do not last forever: they expire after 30 days, a period the group can shorten. Three days beforehand, the app sends a warning and offers to save them to the phone's gallery. The administrator can choose one cover photo per event, which is kept permanently and appears in summaries. Data (points, rankings, summaries) never expires; only photos do.

## 5. The rules of the game

The app is designed for friends who trust one another, not for monitoring anyone. The rules are meant to prevent mistakes and technical cheating, not to stop a friend from recording one extra beer. The server applies all important rules (schedules, votes, points, limits), so they do not depend on the mobile app behaving correctly. Results are final: once an event is closed, nothing changes. Everything is private by default: each group is a separate world accessible only to its members.

## 6. The technology, explained without jargon

The app is built for Android with **React Native and Expo**, a way to create mobile apps from a single codebase that would also make it possible to expand to iPhone later. The working language is **TypeScript**, and the screens are organized with **Expo Router**.

The entire server side is built on **Supabase**, a service that provides several things at once: sign-in, the database where all information lives, rules governing who can see what, photo storage, and real-time updates. With its free plan, the app has no cost.

Inside the app, **Zustand** stores local state (for example, the session or preferences), and **TanStack Query** retrieves and keeps server information up to date, even with limited coverage. The interface uses **Reanimated and Moti** for animations, **Lucide** for icons, **FlashList** to keep long lists smooth, and **Gifted Charts** with **React Native SVG** for charts. **EAS** handles building and publishing the app. This idea also requires Google sign-in, camera and gallery access, notifications, and an image caching system to avoid downloading the same thing twice.

## 7. Things to keep in mind

**Zero cost has a limit.** The free plan offers around 1 GB of photo storage, which is the bottleneck. That is why photos expire and are compressed. The information itself takes up very little space.

**Google Play and alcohol.** Since the app awards points for drinking more, there is a risk that the store will reject it. That risk can be reduced by making points configurable (even down to zero), using neutral language and generic categories, and including the safety reminder. If it is still not accepted, it could be distributed as a closed test or direct installer.

**The name.** Another app called "Your Night" already exists, from 2014. Before finalizing anything, app stores, trademarks, domains, and social media should be checked.

**The free plan pauses.** Supabase pauses projects that have not been used for a week, and during the pause events would stop closing automatically. There is a simple solution (a task that keeps the project awake), but it needs to be kept in mind.

**It is a large project.** Automatic closing, points, summaries, and chat add up to a lot of work. The sensible approach is to build it in phases: groups, events, counter, and voting first; photos next; and chat last.

## 8. Decisions already made

- The deadline is the event's end time: until then, people can join, record drinks, and upload photos.
- Each vote received gives 1 point, in addition to the award points.
- Voting lasts 24 hours and closes early if everyone has voted.
- A group cannot have events with overlapping schedules.
- For now there are only three awards: MVP, most drinks, and most shots. Custom awards can come later.

## 9. Future ideas

Find venues with autocomplete (Google Places, which would require a billing account). Custom awards for each group, such as "most chaotic". Share the summary as an image outside the app. Achievements and badges. Guests without accounts. Reactions and images in the chat. An iPhone version.

## 10. Quick overview

It is designed for groups of friends over 18. Its complexity is medium-high, and its cost is €0 with the free plans. As a rough guide, the minimum product would take about two and a half months, and the complete version about four months, working part-time. In a portfolio, it demonstrates sign-in, groups with roles, real-time functionality, offline operation, limited photo uploads, scheduled tasks, notifications, and chat. Its main risk is Google Play policy, and its originality is high because it combines a journal, a game, and a monthly summary.
