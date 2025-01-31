---
{"dg-publish":true,"permalink":"/exploring-contents/other-mods/"}
---

To look up for open source mods, easiest solution is to open RW Workshop page and search by "github" ([hey look, i did it for ya](https://steamcommunity.com/workshop/browse/?appid=312520&searchtext=github))

Workshop mods location: 
`Steam\steamapps\workshop\content\312520`
You can debug them just like [[Coding/Debugging & troubleshooting\|your own mod]]. 

To find technical files e.g. saves created by other mods (except [[Exploring contents/Base game & Downpour/Technical files#CustomRegionsSupport log crs\|CRS]] since it's a must-have for general lediting), check "Coding" -> "How to-" -> "add mod compat" [[Coding/How to-/add mod compat/Meadow\|folder]].

Downloading mods w/o workshop: 
https://rainworldmodding.miraheze.org/wiki/Remix_Mods_Outside_of_Steam


Decrypting lines from CRS regions:
https://steamcommunity.com/sharedfiles/filedetails/?id=3213183426&searchtext=decrypt

(i yoinked tutorial from mod description and translated with DeepL)
Tutorial for using it (take the pearl text of module Howling Rift as an example):
> 1. Get the pearl of Howling Rift.
> 2. Give the pearl to the iterator to read, trigger the reading of the pearl text file (here is HC_PIT.txt).
> 3. This module will generate the HC_PIT.txt.decrypted file in the same directory, open the file with a text editor to find this is the decrypted text.
> We don't know if the echoed text is available yet.
> 
> For those who want to translate the module, please note that you have to remove the .decrypted suffix at the end of the file and change the first character at the beginning of the file to “0” (0 means the file is unencrypted) for the game to be able to read it normally.
> 
> In addition, text that is not encrypted in the first place will be invalidly “decrypted” and a file will be created. I didn't special-case this because I'm lazy. If this causes problems, please let me know.
