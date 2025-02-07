---
{"dg-publish":true,"permalink":"/coding/how-to/add-mod-compat/meadow/"}
---

idk 😔 TBA
but hey, check [\#playtesting -> Mod Porting](https://discord.com/channels/1094716194180841602/1326036277488914523) thread in Rain Meadow server for help (invite link is in [Github repo](https://github.com/henpemaz/Rain-Meadow))

### How Meadow networking workie
https://www.youtube.com/watch?v=-_WsvZAkFZI

### Setting up environment
https://github.com/henpemaz/Rain-Meadow/blob/main/CONTRIBUTING.md

##### Configuration builds
- ArenaP2P - local build with Arena mode available only (e.g. even if you try to host Story, Arena will be run instean) 
- Debug - Steam debug build. 
- FreeRoamP2P - local build with Free Roam mode available only.
There was a mode called "Free Roam" which synced nothing but slugcats and environment (rain, food pips, etc.). While it was the first mode that was working (sort of), it wasn't touched for a while, therefore becoming the buggiest of all. Now FreeRoam is hidden in mode select list, and picking it isn't advisable.
- LocalP2P - local build with Meadow? mode available only
- Release - Steam release build. (cannot be debugged, unlike debug?)
- StoryP2P - local build with Story mode available only

P2P suffix means it's a **local build**, intended for testing networking at single desktop. Game instance that is going to host has to be run via Steam, while clients are meant to be launched directly from executable (`Rain World\RainWorld.exe`)

### Debugging
Logs: uses [[Exploring contents/Base game & Downpour/Technical files#LogOutput log\|logOutput.log]].

There's in-built support for `start screen:0` setting for [[Exploring contents/Cheat codes\|setup.txt]] which automatically starts up lobby
can't automatically join however 

Debug info for connections (connected user id, ping) can be found by opening Dev Tools.
##### Packet loss and delay (ping) simulation
Local builds have it enabled by default.
To configure it (or completely disable by setting ``simulatedLoss`` and ``simulatedLatency`` to ``0``), check `Online\Matchmaking\UdpPeer.cs`

### Public hidden testing
Meadow shows lobbies **only** with same meadow mod version installed.
To hide all other lobbies for you (and make yours hidden for others at the same time), change `MeadowVersionStr` variable in `RainMeadow.cs` to some another value.
Make sure to share your modified version build with your playtesters!

### Meadow mode vibe zones
Spreadsheet with music distribution in base regions:
https://docs.google.com/spreadsheets/d/1rg14d7qPAnuyraE7zkSZvkA_8_6gDy_nrsypO1f6MaQ/edit

`rainmeadow/world/xx/`
Contains 2 more files:
- `playlist.txt`
playlist.txt to tell: which songs to play in this region
All songs (available to listen!):
`Steam\steamapps\workshop\content\312520\3388224007\music\songs\`

Outskirts file as example:
```
Eyes Vain
me
Cascen
Gray Orange
StepsSteps
Void Genesis
Grasp
Live more.
Purple Puff
```

- `vibe_zones.txt`
  Define through comma:
    - room name that will be vibe zone
	- minimum radius of vibe zone
	- maximum radius of vibe zone
	- waveform value (acceptable: ``Trisaw``, ``Clar``, ``Litri``, ``Sine``, ``Bell``)

Outskirts file as example: 
```
SU_B09,3000,666,Trisaw
```
> [!info] There can be multiple vibe zones! 
> You'll be warped to the closest one in game.

### Adding dependencies
TBA as well
but basically, there will be .json file :D

### List of mods that support Meadow
- PearlCat
- Rotund World
- M4rbleLines stuff
- DressMySlugcat (sort of)