---
{"dg-publish":true,"permalink":"/exploring-contents/base-game-and-downpour/assets/"}
---

**Looking up online:** [[Drawing & making assets/References\|here]].

##### Scenes & art
~~Anything that is NOT sprites (for creatures, items, UI, font),~~
It's not encrypted and is located in folders in `Rain World\RainWorld_Data\StreamingAssets`
Also, available in [[Drawing & making assets/References#Github images repository\|Github image repo]].
Breakdown:
https://rainworldmodding.miraheze.org/wiki/Slideshows_and_Scenes#Breaking_up_the_basics_of_a_scene

Krita plugin for convenient importing and exporting scenes:
https://github.com/henpemaz/RWSceneEditor ([demo](https://dl.dropboxusercontent.com/s/8pmjwl0998l2wbc/krita_2022-09-02_17-52-05.mp4))
(source: [RW Main](https://discord.com/channels/291184728944410624/838185248981385256/1015364893198782624))

All Downpour assets are stored as common mod assets in `Rain World\RainWorld_Data\StreamingAssets\mods\moreslugcats`
### Sounds
**Looking up online: [[Making music/For inspiration#In game sounds\|here]]**.
TODO: check if it works
All music (threat, arena, on region enter) and few other sounds are in `resources.assets`



`Rain World\RainWorld_Data\StreamingAssets\loadedsoundeffects`
Decrypting:
https://www.reddit.com/r/rainworld/comments/11apuoi/having_trouble_accessing_sound_effects_in_game/

### Sprites
Decrypting:
https://rainworldmodding.miraheze.org/wiki/Custom_Assets#Sprites_and_Atlases

### Arena icons
https://dl.dropboxusercontent.com/s/151jfgurb6otcjc/arenaicons_by_henpemaz.zip
(source: [RW Main](https://discord.com/channels/291184728944410624/481900360324218880/722224693893136466))
Also, available in [[Drawing & making assets/References#Github images repository\|Github image repo]].


### Color hex codes
Most encrypted assets (e.g. for slugcats) are white and colored via game code.
![hex-colors.png](/img/user/pics/hex-colors.png)
(source: [RW Main](https://discord.com/channels/291184728944410624/305139167300550666/1081023267378303036))
~~Besides, it's possible to find values in game, upon opening color picker (for example, in custom slugcat color selection)-~~
where tf did i see that feature????
hsl / rgb / predetermined colors switch
this? fr??? TODO
https://steamcommunity.com/sharedfiles/filedetails/?id=3371225357


### Shaders
`Rain World\RainWorld_Data\StreamingAssets\shaders`
Shaders code is decompiled and is readable via any text editor. 
put preview here 

(source: [RWMA](https://discord.com/channels/1083481230839922688/1083484108056957089/1095172254549168268))

##### Documentation on LevelColor shader 
responsible for room coloring
https://gist.github.com/EtiTheSpirit/97dfdc63f667e19acb6314dc8c1e2d18
(source: [RW Main](https://discord.com/channels/291184728944410624/838185248981385256/1150360982397386823))
### Fonts
Some fonts are encrypted in a form of atlass. Others technically don't even exist (characters are just a bunch of sprites).

The fonts below are made by the community, for convenient usage.

https://fontstruct.com/gallery/tag/48144/Rain%20World

- RW title-like font (based on [Rodondo](https://www.dafont.com/rodondo.font))
https://drive.google.com/file/d/15q8BBFUtt8G3XGyYi1JsD3IAuC-aUbpy/view?usp=drive_link
Rodondo RU: \#general pins
(source: [RW Main](https://discord.com/channels/291184728944410624/838185248981385256/1166479012193906718))

- UI-like font
wawa
Supports cyrillic!
(source: [RW Main](https://discord.com/channels/291184728944410624/481900360324218880/1094033795524612147))

- RW Glyphs being assembled in a font
https://drive.google.com/file/d/1jEUJ23r1vTYXXoI21I1PexlfiIetJVzv/view
(source: [Reddit post](https://www.reddit.com/r/rainworld/comments/1bei8sy/i_created_a_fully_functional_typeface_for_every/))

https://drive.google.com/file/d/1fmA2AK0utiy1Yajb10Hlny8_Bkpl8m3u/view
(source: [RW Main](https://discord.com/channels/291184728944410624/481900360324218880/540335659890769931))

https://docs.google.com/document/d/1QZnQgeoW3RyoR3_ZR1DGse99p1UPZRhU5LoVvCGUT_A/edit?usp=sharing
(source: [RW Main](https://discord.com/channels/291184728944410624/296133304632213504/822957346711928922))
### Rooms
- rendered room assets (looking red)
are in `Rain World\SteamingAssets\world\XX-rooms` (where XX is region acronym) 
- rendered AND colored rooms (like how they look in game)
TODO map exporter for online maps!!!!!
check out [[Lediting/For inspiration#Region maps\|rain world maps]] for quick view, [[Drawing & making assets/References#Github images repository\|Github image repo]] for download and [RoomScreenshot mod](https://steamcommunity.com/sharedfiles/filedetails/?id=3125783486) (single room) /  \### (all region rooms) for manual rendering.
- project files for lediting
refer to [[Lediting/How to-/modify rooms from the game#modify rendered image\|modify rooms from the game#modify rendered image]]

Static map images:
https://drive.google.com/drive/folders/1EW91sf2nWv4S6Ine6pUfnzav4zn7LUPA

All palettes used by the game list were conveniently put in a single list
https://docs.google.com/spreadsheets/d/1WloVDTQ4MOv0mnodrED1KLArJS7u5FUikr_DWpEkgsE/edit?gid=0#gid=0
