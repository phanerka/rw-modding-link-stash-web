---
{"dg-publish":true,"permalink":"/lediting/i-wanna-make-new-region/"}
---

Whoa, that will take a lot of time and effort... but, good luck! 
This [Wiki page](https://rainworldmodding.miraheze.org/wiki/Creating_A_Region) will be your best friend.

Regarding mod folder structure, refer to [[Mod structure\|Mod structure]] (duh).

### Files required to set up to make a proper region

##### world-xx.txt
**Required** to be created for region to run.
Can be created with FloodForge (?)
It's settings can be viewed in DevTools, in [Map](https://rainworldmodding.miraheze.org/wiki/Dev_Tools#tabber-tabpanel-Map-0) tab.
Responsible for:
- defining room types (shelters, gates, etc.)
- connecting rooms
- setting up creature spawns
- preventing batflies to enter specific room
https://rainworldmodding.miraheze.org/wiki/World_File_Format
**Always** has to have the following format:
https://rainworldmodding.miraheze.org/wiki/World_File_Format#Format

##### properties.txt
Not required to be created for region to run.
Responsible for defining:
- all kinds of region-wide properties for creatures
- settings templates for DevTools to use
- subregion names
- room attributes (what creatures are more/less likely to visit specific room)
https://rainworldmodding.miraheze.org/wiki/Properties_File
CRS adds more properties to use:
https://github.com/Bro748/Custom-Regions/tree/dp-release?tab=readme-ov-file#Region-Properties

### Pre-release to-do
##### Region naming
og regions acronyms
https://rainworld.miraheze.org/wiki/User:Alphappy/Region_codes
Region lease: 

> [!info] Recently, a [mod](https://steamcommunity.com/sharedfiles/filedetails/?id=3412393061) was released that allows to use more than 2 letters for acronym. Yay!

acronym
https://rainworld-region-lease-improved.glitch.me/
https://forms.gle/gdaGmLJuBJb4LvMS7
Once you're confident with them, you'll need to request access the document and add own values. 


if you ever decide to change region name during development, [this](https://github.com/glebi574/rw-fix-region-acronyms) might help you to do it quickly.

##### Region baking
just a friendly reminder to [bake](https://rainworldmodding.miraheze.org/wiki/Creating_A_Region#Baking) your rooms.

### Post-release to-do
When you finish the region, you'll likely want its map to be shared.
https://seroen.github.io/Seroens-Repo/Dist/Tools/Cornifer.zip
Check this and reach out Alduris to post your region map. 

##### Making static image map


##### Map exporter beta
> Makes interactive maps. The interface is in the remix menu. Instructions are included there, but here's the general gist of things:
> 1. Run the screenshotter for the regions/slugcats of your choice.
> 2. Use the editor to edit the map in case of overlapping or unpositioned rooms. The map takes from the dev view map in dev tools, NOT the canon view (in-game map).
> 3. Run the generator to turn the map into tiles.
> 4. Run the local server in the export tab to view it in-browser. The export feature is not done yet.
> 
> Permalink to download the latest version of the beta: https://github.com/alduris/MapExporter/releases/latest
> If you receive an error or the screenshotter stops running without closing, please upload LogOutput.log, LogOutput.log.1, and, if it exists, exceptionLog.txt

(source: [RWMS](https://discord.com/channels/1237826015829557400/1273913033831350296/1273913775732555816))
