---
{"dg-publish":true,"permalink":"/coding/tips/"}
---

### Tech tips
##### symlink
go into rainworld_data/streamingassets/mods/
type `cmd` in Address bar of Explorer, then paste the following:

``mklink /d folder_name referenced_location``

for junction (hard directory link):
``mklink /j folder_name referenced_location``

##### checksum override option? 
https://rainworldmodding.miraheze.org/wiki/Downpour_Reference/Mod_Directories

##### Live logs
enable one setting in bepinex config

##### Using cheat codes
Refer to [[Exploring contents/Cheat codes\|Cheat codes]].

### Coding tips
- for mod compatibility, class creation > hook creation
- no base code yoinking. if ya need to change a single line in the function, check out IL hooking
- For IL hooking: [[Coding/How to-/(technically)/modify game logic (Hooking)#Guidelines\|modify game logic (Hooking)#Guidelines]]