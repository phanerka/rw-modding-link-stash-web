---
{"dg-publish":true,"permalink":"/coding/tips/"}
---

### Tech tips
##### symlinking
go into rainworld_data/streamingassets/mods/
type `cmd` in Address bar of Explorer, then paste the following:

``mklink /d folder_name referenced_location``

for junction (hard directory link):
``mklink /j folder_name referenced_location``

##### checksum override option? 
> [!warning] DO NOT change this option if you plan on adding/modifying rooms in the mod. It will cause them to stop updating.

> [!warning] When you're about to upload the mod to Workshop, change it to `false`. 
https://rainworldmodding.miraheze.org/wiki/Downpour_Reference/Mod_Directories

TODO
all it does is prevent the mod merging every time you start the game
if you have any asset replacements they might not be updated
iirc the option is only there to save time
otherwise you have to sit through that 'merging all regions' thing
and yeah for code only mods it makes no difference
honestly I would leave it disabled and install mergefix though
##### Live logs
enable one setting in bepinex config

##### Using cheat codes
Refer to [[Exploring contents/Cheat codes\|Cheat codes]].

### Coding tips
- for mod compatibility, class creation > hook creation
- no base code yoinking. if ya need to change a single line in the function, check out IL hooking
- For IL hooking: [[Coding/How to-/(technically)/modify game logic#Guidelines\|guidelines]]