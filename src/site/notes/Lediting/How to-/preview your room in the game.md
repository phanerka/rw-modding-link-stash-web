---
{"dg-publish":true,"permalink":"/lediting/how-to/preview-your-room-in-the-game/"}
---

You can:
- add it into arena
> take that image and the txt with the name of your level (so it'd be testlevel.txt and txtlevel_1.png) and copy them into `Rain World/RainWorld_Data/StreamingAssets/levels`
- install Warp Menu mod and teleport in the room in game
- (not recommended) modify original game connections to make it accessible in game, and get there 

# Setting up convenient env
This is a list of things that might help to 
- quickly look at freshly rendered room in the game
- continue setting up the room in the game via dev tools

### Open the room on game launch
> [!warning] Meadow overrides this value.
> Moreover, this code is broken atm lmao........
> so please, dont try testing rooms with meadow enabled

For more information, refer to [[Exploring contents/Cheat codes\|this]].
i gotta check if it works tbh, that's just made by looking at wiki
`load game 0` ?
- arena: 
```
start screen 0
world 0
level:Warehouse
```
- story:
```
start screen 0
start map SU_A32
```
### Rain disable
There are numerous ways to disable rain for convenient dev tooling:
- add `no rain` string to ``Rain World/RainWorld_Data/StreamingAssets/setup.txt`` (if the file doesn't exist, create it)
	More information on `setup.txt` [[Exploring contents/Cheat codes\|here]].
- install "[Stuck in a Cycle](https://steamcommunity.com/sharedfiles/filedetails/?id=3035801552)" mod (press MAP while paused to toggle)
- \[the laziest (no-preparation) way] press `9` with enabled dev tools every time when rain is about to start

### Symlinking
yeah..

> - move everything from leveleditor/Levels to game/Levels or somewhere safe if you want to keep that stuff
> - delete the folder leveleditor/Levels
> - right-click-and-drag game/Levels into the leveleditor folder, "Drop here > Symbolic link"
> - done ??

(source: [RW Main](https://discord.com/channels/291184728944410624/431534164932689921/767747875718299650))

### room quick reload in story mode (NEED TO MAKE SURE IT WORKS)
open Dev Tools, press R. You'll appear in shelter, and every room will be reloaded, including yours.
sheltering also works.

oooor go into another room and press Q (it will give a food pip AND reload every room except the one you're in)