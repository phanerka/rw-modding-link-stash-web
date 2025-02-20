---
{"dg-publish":true,"permalink":"/exploring-contents/base-game-and-downpour/rooms/"}
---

### Common rooms' naming
room names' identification or smth... head hurtie pls no bad wordie
\[region acronym]\_\[amount of screens in a room, identified with a letter]\[room number]

For example, `SU_B05`:
- `SU` is Outskirts acronym
- `B` stands for 2 screens (A = 1, B = 2, C = 3, etc.)
- `05` is number of room.
So that's a room from Outskirts that has 2 screens.

# Looking for room files

### Images
- rendered room assets (looking red)
are in `Rain World\SteamingAssets\world\XX-rooms` (where XX is region acronym) 
- rendered AND colored rooms (like how they look in game)
TODO map exporter for online maps!!!!!
check out [[Lediting/For inspiration#Region maps\|rain world maps]] for quick view, [[Drawing & making assets/References#Github images repository\|Github image repo]] for download and [RoomScreenshot mod](https://steamcommunity.com/sharedfiles/filedetails/?id=3125783486) (single room) /  \### (all region rooms) for manual rendering.
- project files for lediting
refer to [[Lediting/How to-/modify in-game regions#modify rendered image\|modify in-game regions#modify rendered image]]

Static map images:
https://drive.google.com/drive/folders/1EW91sf2nWv4S6Ine6pUfnzav4zn7LUPA

All palettes used by the game were conveniently put in a single list
https://docs.google.com/spreadsheets/d/1WloVDTQ4MOv0mnodrED1KLArJS7u5FUikr_DWpEkgsE/edit?gid=0#gid=0



....... sometimes, i've got nothing better to do. for some reason.
### Text files
Are located in same spot as room assets.

```
room name (unread)
width*height|water level|water depth
lightAngle
camerapos|camerapos|ect
Border: Solid (unread)
placed spears & rocks


ConnMap
AIMap (visibility map & prebaked pathfinding)
Geometry array
```
(source: [RW Main](https://discord.com/channels/291184728944410624/305139167300550666/1079483524354154687))

1,4,3: connection to another room
1,3: connection dot
4,3,6: shortcut
2: slope
2,6: slope with bg tile
0,6: air with bg tile
1: tile
0: air
0,1,6: air, pole, bg tile

