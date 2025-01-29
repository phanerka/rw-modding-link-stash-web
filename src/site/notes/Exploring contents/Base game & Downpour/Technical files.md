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
(source: [RW Main](https://discord.com/channels/291184728944410624/296133304632213504/505218239853363200))

TODO add object ID thing

##### Steam Cloud saving
Conditions for files to be stored in Steam Cloud
https://steamdb.info/app/312520/ufs/
Your files that are stored in Steam Cloud
https://store.steampowered.com/account/remotestorageapp/?appid=312520

### Logs

> [!warning] All logs are cleared on game restart. Make sure to save them in time.
> Another option is to install [LogManager](https://steamcommunity.com/sharedfiles/filedetails/?id=3138158069) mod and configure it. It also changes logs' locations to `idk i forgor`, however.

> [!tip] Enabling live `LogOutput.log` logs: [[Coding/Tips#Live logs\|coding tips]]

**TODO: FINISH IT**
##### LogOutput log
`Rain World\BepInEx\LogOutput.log`
Useful in general.
> [!info] if more that one instance are running on a single PC:
> second one will have `LogOutput.log.1` name, third one `LogOutput.log.2`, etc. 
##### CustomRegionsSupport log #crs 
`Rain World\RainWorld_Data\StreamingAssets\crsLog.txt`
Useful for lediting.
##### exception log
`Rain World\exceptionLog.txt`
Gathers all errors that occured in game. 
##### console log
`consoleLog.txt`