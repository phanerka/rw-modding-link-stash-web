---
{"dg-publish":true,"permalink":"/lediting/how-to/in-leditor/add-custom-props-and-tiles-and-effects/"}
---

### Getting already existing ones
- [Tile packs](https://seroen.github.io/Seroens-Repo/tiles.html) and [prop packs](https://seroen.github.io/Seroens-Repo/props.html) from the Warehouse (if you want to get them all: [Github repo](https://github.com/Seroen/Seroens-Repo-Files))
**Make sure to read [permissions to use](https://github.com/Seroen/Seroens-Repo-Files/blob/main/Please%20read%20this%20if%20you%20are%20installing%20the%20region%20files.txt)!**
- RWMS: [\#tiles-and-props](https://discord.com/channels/1237826015829557400/1240708497469866134) | [D](discord://discord.com/channels/1237826015829557400/1240708497469866134) (most recent ones might not be included in the repo above.... *yet*)
- [Mo' Tiles](https://github.com/rwslugcat/mo-tiles-rw/releases/tag/release)
- [TotallyDutch's RW Tiles](https://github.com/totallydutch/Totallydutch-s-RW-tiles)
It seems that some tiles were not included in the Warehouse, so it was included separately.




### Making your own
- effects *(supported ONLY by Community Editor and Rained at the moment!!)*
https://rainworldmodding.miraheze.org/wiki/Creating_Custom_Effects
Example effects are stored in Seroen's [Github repo](https://github.com/Seroen/Seroens-Repo-Files/tree/main/Effects/Example%20Effects) 
*(remember that you can download them one by one, there's a download button above file preview!)*
- tiles and props
Tiles guide: [YT Video](https://www.youtube.com/watch?v=maOTf24PEKs&list=PLOpeR3bQUKEJIGBJ3TATHBLmNvZwyYioT&index=9)
[wiki page](https://rainworldmodding.miraheze.org/wiki/Creating_Custom_Tiles_and_Props)
https://github.com/Rain-World-Modding/Rain-World-Modding.github.io/blob/main/pages/region-development/level-editor/Custom-Palettes%2C-Tiles-and-Props.md
https://docs.google.com/document/d/147crgDMY4ScrU8vn8Kl6gOXsbfbb5raprUAXaNhWndw/edit?tab=t.0#heading=h.d8sdxl34h7wg
**TODO: make own damn prop n tile to understand which doc is most useful**

##### Making init.txt file
![Tile_Guide.png](/img/user/pics/Tile_Guide.png)

Specs Editor
https://drive.google.com/file/d/17hWH494JwnAOrjo3Xyh8J_QZbbuAA3CO/view

to help with init file: 
Tile Init Editor
https://drive.google.com/file/d/15it9oLIAD5698Y-4xe6cmD_ckdAHs-As/view

### Blender prop renderers
You can create props using Blender. 
- hard prop exporter
	- For Blender v2.79 ([tutorial video](https://youtu.be/8Nm1jWggH2I)) 
	https://drive.google.com/file/d/1LvD7pYMeS18RD4l0wD9KrdmQdigfaEdo/view 
	(source: [RW Main](https://discord.com/channels/291184728944410624/305139167300550666/420327770187366400))
	- For Blender v3.6 ([download](https://nqywadcmwusjqlrg.public.blob.vercel-storage.com/notes/files/lediting/blender/rainworldProp35_LeeMoriya-9fLHrvIhXe5nMQ5qb3giZSsEsD1xZJ.blend))
	(source: [RWMS](https://discord.com/channels/1237826015829557400/1238172653819527168/1245868873140539402))
	- For Blender v4.0 ([download](https://nqywadcmwusjqlrg.public.blob.vercel-storage.com/notes/files/lediting/blender/rainworldProp40-a3M97rg2XAjOsxW9Te8Ut3Agsa9nae.blend))
	(source... or at least where i found: [RWMS](https://discord.com/channels/1237826015829557400/1237868553450029208/1273024775291277313))
- soft prop exporter ([download](https://nqywadcmwusjqlrg.public.blob.vercel-storage.com/notes/files/lediting/blender/SoftPropRenderer2-TmpJnWr9hjv26yJlgtGz1g2CzQoeD9.blend), legacy version [download](https://nqywadcmwusjqlrg.public.blob.vercel-storage.com/notes/files/lediting/blender/SoftPropRenderer2Legacy-69bFC7yxPu9EfycaQb6APufQbo4Tfq.blend))
(source: [RWMS](https://discord.com/channels/1237826015829557400/1238172653819527168/1245873535822598165))
- lever compositor ([one](https://nqywadcmwusjqlrg.public.blob.vercel-storage.com/notes/files/lediting/blender/Rain_World_Level_Compositor-VHiHHdVwTF19r0hE472p6TKkCGzH0K.blend), [two](https://nqywadcmwusjqlrg.public.blob.vercel-storage.com/notes/files/lediting/blender/Basic%20level%20compositor-NeBhPcLl9ohQP0OHOT7Zk3nzKAMVjF.blend))
(source: [RW Main](https://discord.com/channels/291184728944410624/804088181904375819/1084222820818628618)) and another (source: [RW Main](https://discord.com/channels/291184728944410624/431534164932689921/1292092416244842627))
TODO check compositors

Troubleshooting:
TODO
https://discord.com/channels/1237826015829557400/1237868553450029208/1279078875481112650



Aseprite tile exporter: https://github.com/mayhemmmwith3ms/Aseprite-RW-Tile-Exporter
### Viewing tiles
##### rw_tileman
For viewing tiles from large packs.
https://github.com/thalber/rw_tileman/releases/latest

##### Tile Visualizer
*Requires Java to be installed.*
Shows how the tile will look in game. Allows to rotate around the tile.
Guide: [YT video](https://youtu.be/MoX6hXQZVMw)
https://github.com/LudoCrypt/TileVisualizer/releases