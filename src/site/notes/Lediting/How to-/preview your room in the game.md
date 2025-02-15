---
{"dg-publish":true,"permalink":"/lediting/how-to/preview-your-room-in-the-game/"}
---

You can:
- add it into arena
> take that image and the txt with the name of your level (so it'd be testlevel.txt and txtlevel_1.png) and copy them into `Rain World/RainWorld_Data/StreamingAssets/levels`
- install Warp Menu mod and teleport in the room in game
- (not recommended) modify original game connections to make it accessible in game, and get there 

### Rain disable
There are numerous ways to disable rain for convenient dev tooling:
- add `no rain` string to ``Rain World/RainWorld_Data/StreamingAssets/setup.txt`` (if the file doesn't exist, create it)
	More information on `setup.txt` [[Exploring contents/Cheat codes\|here]].
- install "[Stuck in a Cycle](https://steamcommunity.com/sharedfiles/filedetails/?id=3035801552)" mod (press MAP while paused to toggle)
- \[the laziest (no-preparation) way] press `9` with enabled dev tools every time when rain is about to start

### room quick reload in story mode (NEED TO MAKE SURE IT WORKS)
open Dev Tools, press R. You'll appear in shelter, and every room will be reloaded, including yours.
sheltering also works.
