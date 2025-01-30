---
{"dg-publish":true,"permalink":"/exploring-contents/base-game-and-downpour/technical-files/"}
---

### Saves
`%userprofile%\AppData\LocalLow\Videocult\Rain World`

??? TODO whats that
https://gist.github.com/derofim/117566f49ebe1aa89c3b9079693db2f8

Save editor: https://github.com/Ved-s/RainState
https://github.com/Fnafgameur/RwSavEditor/releases/tag/First
https://github.com/Vultumast/RainWorldSaveEditor
(TODO check if it still works)

##### Sandbox save file structure
![sandbox-save.png](/img/user/pics/sandbox-save.png)

> [!example]- List of object IDs
> Creatures
> 0-0-0 : ? 
> 1-0-0 : slugcat 
> 2-0-0 : ? 
> 3-0-0 : purple lizard 
> 4-0-0 : green lizard 
> 5-0-0 : blue lizard 
> 6-0-0 : yellow lizard 
> 7-0-0 : white lizard 
> 8-0-0 : red lizard 
> 9-0-0 : black lizard 
> 10-0-0 : salamander 
> 11-0-0 : cyan lizard 
> 12-0-0 : batfly 
> 13-0-0 : red leech 
> 14-0-0 : blue leech 
> 15-0-0 : pop-snails 
> 16-0-0 : vulture 
> \*17-0-0 : garbage worm 
> 18-0-0 : lantern mice 
> 19-0-0 : white squidcada 
> 20-0-0 : squidcada 
> 21-0-0 : spiders 
> 22-0-0 : jetfish 
> 23-0-0 : leviathan 
> 24-0-0 : rain deer 
> 25-0-0 : grapple grub 
> 26-0-0 : daddy long legs 
> 27-0-0 : brother long legs 
> 28-0-0 : living kelp 
> 29-0-0 : mimic 
> 30-0-0 : miros bird 
> 31-0-0 : depths guardian 
> 32-0-0 : small centipede 
> 32-0-2 : medium centipede 
> 32-0-3 : overgrown centipede 
> 33-0-0 : red centipede 
> 34-0-0 : flying centipede 
> 35-0-0 : infant centipede 
> 36-0-0 : scavenger 
> 37-0-0 : overseer 
> 38-0-0 : vulture grub 
> 39-0-0 : egg bug 
> 40-0-0 : wolf spider 
> 41-0-0 : spitter spider 
> 42-0-0 : infant needlefly 
> 43-0-0 : adult needlyfly 
> 44-0-0 : dropwig 
> 45-0-0 : king vulture 
> 46-0-0 : hazer 
> Items 
> 0-1-0 : rock 
> 0-2-0 : spear 
> 0-2-1 : explosive spear 
> 0-3-0 : flashbang 
> 0-4-0 : vulture mask 
> 0-5-0 : gas apple 
> 0-6-0 : pupa fruit 
> \*0-8-0 : lore pearl 
> 0-9-0 : neuron 
> 0-10-0 : moon neuron 
> \*0-11-0 : pearl 
> 0-13-0 : water nut 
> 0-14-0 : jellyfish 
> 0-15-0 : lantern/glowstone 
> 0-16-0 : karma flower 
> 0-17-0 : mushroom 
> 0-19-0 : explosive fern 
> 0-20-0 : orange mold 
> 0-21-0 : batnip 
> 0-22-0 : explosive 
> 0-23-0 : swarm cone 
> \*0-25-0 : eggbug egg 
> 0-26-0 : needlefly egg 
> 0-27-0 : spitter spider dart
> 0-28-0 : bubblegrass 
> 0-29-0 : green neuron 
> 0-30-0 : overseer eye

(source: [RW Main](https://discord.com/channels/291184728944410624/296133304632213504/505218239853363200))
##### Steam Cloud saving
Conditions for files to be stored in Steam Cloud
https://steamdb.info/app/312520/ufs/
Your files that are stored in Steam Cloud
https://store.steampowered.com/account/remotestorageapp/?appid=312520

### Logs
yeah i blatantly stole descs from ;allthelogs pls spare me
> [!warning] All logs are cleared on game restart. Make sure to save them in time.
> Another option is to install [LogManager](https://steamcommunity.com/sharedfiles/filedetails/?id=3138158069) mod and configure it. It also changes logs' locations to `idk i forgor`, however.

> [!tip] Enabling live `LogOutput.log` logs: [[Coding/Tips#Live logs\|coding tips]]

**TODO: FINISH IT**
##### LogOutput log
`Rain World\BepInEx\LogOutput.log`
Created by BepInEx, a Unity mod loader.
> [!info] if more that one instance are running on a single PC:
> second one will have `LogOutput.log.1` name, third one `LogOutput.log.2`, etc. 
##### CustomRegionsSupport log #crs 
`Rain World\RainWorld_Data\StreamingAssets\crsLog.txt`
Useful for lediting. 
Resolving issues with it: [[Lediting/Troubleshooting & fixing things/Connecting rooms\|Connecting rooms]]
##### exception log
`Rain World\exceptionLog.txt`
Collects all errors that occurred in game. If no errors occur, it won't be created. 
##### console log
Logs what is loading and happening in the game.
`Rain World\consoleLog.txt`