---
{"dg-publish":true,"permalink":"/lediting/tips/"}
---

### Tech tips

##### Symlink
yeah..

> - move everything from leveleditor/Levels to game/Levels or somewhere safe if you want to keep that stuff
> - delete the folder leveleditor/Levels
> - right-click-and-drag game/Levels into the leveleditor folder, "Drop here > Symbolic link"
> - done ??

(source: [RW Main](https://discord.com/channels/291184728944410624/431534164932689921/767747875718299650))

##### Rain disable
There are numerous ways to disable rain for convenient dev tooling:
- editing "rain" value in setup.txt (check out this tutorial)
- installing "stuck in a cycle" mod
- \[the laziest (no-preparation) way] press "ctrl + 0" with enabled dev tools every time when rain is about to start

##### testing your own room
You can:
- add it into arena
> take that image and the txt with the name of your level (so it'd be testlevel.txt and txtlevel_1.png) and copy them into `Rain World/RainWorld_Data/StreamingAssets/levels`
- install Warp Menu mod and teleport in the room in game
- (not recommended) modify original game connections to make it accessible in game, and get there 

##### room quick reload in story mode (NEED TO MAKE SURE IT WORKS)
open Dev Tools, press R. You'll appear in shelter, and every room will be reloaded, including yours.
sheltering also works.

### Lediting tips
NOTE: this ass (yes, the person whose scribbles you're reading) has _never_ made a single own room, so please don't take what i'm saying seriously. i just... uh... like to check out others rooms. also, i read mod design channel and analyzed Solar's outskirts room reworks for a bit.
These tips are general! Think of them as "things to consider" than "rules needed to follow". 
- don't underestimate diagonal tiles for map form
- don't make path _too_ straightforward
- give alternative ways to evade enemies
- remember that its post-apocalypse world (nothing looks perfect, there are trash piles, broken parts, etc.)
- don't let objects fly in air for no reason
- be creative! Feel free to use some props not according to their name.
Who'd guess that "90% of the world's tank holders are not, in fact, holding tanks" (source: [RW Main](https://discord.com/channels/291184728944410624/1094742804627980308/1308840579643215932))?
And look at this peculiar way of using small pipe tiles:
![small-pipe-bamboo_by-merfaruk.png](/img/user/pics/room%20images/small-pipe-bamboo_by-merfaruk.png)
(source: [RW Main](https://discord.com/channels/291184728944410624/481900360324218880/1240734271145246780))
- don't make background or room boundaries *too* distracting unless it's intended
- make sure you can visually differentiate foreground from background (grayscaling the room might help)
- learn, study rooms made [[Lediting/For inspiration#Community-made rooms\|by other people]], study in-game rooms, what tiles are usually used where and in pair with what (btw most commonly used: black goo (note it doesnt draw over all tiles!), slime, smth else i forgor)
- if ure making a region, gotta decide with set of tiles n props ure gonna use