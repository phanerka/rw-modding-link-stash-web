---
{"dg-publish":true,"permalink":"/lediting/messing-with-rendered-rooms/manual-editing-rendered-rooms/"}
---

Entire room coloring is made via [[Exploring contents/Base game & Downpour/Assets#Documentation on LevelColor shader\|LevelColor]] shader.


45 degrees:
https://youtu.be/WgXjyBE6-IA
effect colors:
![rendered-room-colors.png](/img/user/pics/rendered-room-colors.png)

shit i forgot the source

### decomposing & composing rendered rooms
composing
https://cdn.discordapp.com/attachments/1083483045329375393/1304508040317243513/Screen_Maker.ipynb?ex=6786a849&is=678556c9&hm=87af72140640d19398d81cc534e8c828d2c6df1780866fb0185523d5109ce931&
decomposing
https://cdn.discordapp.com/attachments/1083483045329375393/1304508040678215720/Screen_Decomposer.ipynb?ex=6786a849&is=678556c9&hm=fb07cc94b5aed0d1719f64a0316a20479af298aff89e2d790a90e23d8170c954&
run in google collab

viewer
https://cdn.discordapp.com/attachments/1083483045329375393/1304510443540185129/Level_Viewer.ipynb?ex=6786aa86&is=67855906&hm=9604da8b78c90272aee69d708a1c94c70955506f09bdf6be0cb0e171a4c291f2&

I’ve used it to hand paint levels, but the screen decomposer can be used to tweak existing rooms. The benefit is having more control than leditors give.
For example, maybe you want:
• grime on everything
• to change the shape of pipes
• different camera perspectives
• stable decals between close cameras
• to use effect colors for extra shading
• to use the *”Secret 3rd effect color”* (white for batfly hives) 
TODO put a preview of this somewhere
• to do a bit of touch-up

To avoid Google Colab you can use Jupyter Notebook, Spyder, and the like. If you want use the old versions or modify the new ones (just change the file input/output stuff) then you could use a mobile app like Carnets.

the doc
https://cdn.discordapp.com/attachments/1083483045329375393/1304508041021886537/Manual_Camera_Rendering.pdf?ex=6786a849&is=678556c9&hm=495ab6dc327157607edbfbbe8b78d972a36d1be1942afe35b3e44f31861fef82&

source
https://discord.com/channels/1083481230839922688/1083483045329375393/1304508041189916714

todo: replace with [[Exploring contents/Base game & Downpour/Assets#Documentation on LevelColor shader\|Assets#Documentation on LevelColor shader]]
another doc on LevelColor shader (how the game reads rendered rooms): 
https://gist.github.com/EtiTheSpirit/97dfdc63f667e19acb6314dc8c1e2d18

wiki page
https://rainworldmodding.miraheze.org/wiki/Level_Image_Format