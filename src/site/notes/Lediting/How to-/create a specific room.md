---
{"dg-publish":true,"permalink":"/lediting/how-to/create-a-specific-room/"}
---

# Gate
##### Gate templates #templates
https://seroen.github.io/Seroens-Repo/Dist/Templates/Gate%20Templates.zip
For separate files download:
https://github.com/Seroen/Seroens-Repo-Files/tree/main/LevelEditorProjects/Templates/Gate%20Templates
##### Guide from LudoCrypt
https://www.youtube.com/watch?v=t1_JnDUNtaY&list=PLOpeR3bQUKEJIGBJ3TATHBLmNvZwyYioT&index=5

##### guide from [RWMA](https://discord.com/channels/1083481230839922688/1083485771949949019/1205579329413709876)
1. i suggest reusing a gate from the base game to make sure all the parts are in the right place
2. put the render in `world/gates`
3. youll need to add the gate to the world file of both regions it connects to. it'll need to be marked as ` : GATE` as both, and not connect to rooms outside of the world file that it's in. like so:

`world_xx`:
GATE_XX_YY : XX_A01, DISCONNECTED : GATE

`world_yy`:
GATE_XX_YY : DISCONNECTED, YY_A01 : GATE

4. youll also need to use a modify file for `world/gates/locks.txt`, to add your gates locks in the format:
`[ADD]GATE_XX_YY : KARMALEFT : KARMARIGHT` (where karmaleft and karmaright are numbers 1-5. also regionkit has some custom gate lock stuff, check it out on the github)

If you want to:
- add uncommon requirement (6+ karma, always unlocked, one-directioned, mark of communication/glow as condition)
- make multi-screen gate
- modify some gate animation settings,
use RegionKit:
https://github.com/Rain-World-Modding/RegionKit/blob/main/docs/ExtendedGates.md (for requirement)
https://github.com/Rain-World-Modding/RegionKit/blob/main/docs/GateCustomization.md (for everything else)

# Shelter
##### Shelter tempates #templates
https://seroen.github.io/Seroens-Repo/Dist/Templates/Shelter%20Templates.zip
For separate files download:
https://github.com/Seroen/Seroens-Repo-Files/tree/main/LevelEditorProjects/Templates/Shelter%20Templates
### Guide by LudoCrypt
Part 1: https://www.youtube.com/watch?v=nwpcTGyYTwY&list=PLOpeR3bQUKEJIGBJ3TATHBLmNvZwyYioT&index=6
Part 2: https://www.youtube.com/watch?v=7GZ84MrSAas&list=PLOpeR3bQUKEJIGBJ3TATHBLmNvZwyYioT&index=7
