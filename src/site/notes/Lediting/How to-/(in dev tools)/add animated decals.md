---
{"dg-publish":true,"permalink":"/lediting/how-to/in-dev-tools/add-animated-decals/"}
---

 #regionKit mod required



> first, create the frames you want to have. They should be named 0001 0002 0003 and so on. 
i do that with blender 

first you will have to get ffmperg from the internet
i got mine from https://www.gyan.dev/ffmpeg/builds/ the essential package one 

then you open your comand prompt, via win+r. type cmd then enter.
cmd opens.
then enter the path to your ffmpeg, because it doesnt always do that itself
for me it is i downloads so C:\Users\ATOM\Downloads
then the command should be 
C:\Users\ATOM\Downloads\ffmpeg-2024-03-28-git-5d71f97e0e-essentials_build\bin\ffmpeg -hide_banner -i C:\tmp\%04d.png -r 24 -pix_fmt yuva420p -c:v libvpx -b:v 2M -metadata:s :v: 0 alpha_mode="1" -auto-alt-ref 0 -y C:\Users\ATOM\Documents\output.webm
In this command:

-i C:\tmp\%04d.png specifies the input image sequence. location being C:\tmp\, or where blender outputs stuff by default. It uses all avaliable images that fit the description, it can be any images as long as they are png and named correctly. be carefull. It should accept resolution changes fine.
   -r 24 sets the output frame rate to 24 fps.
   -pix_fmt yuva420p specifies the pixel format.
   -c:v libvpx selects the VP8/VP9 codec for video encoding.
   -b:v 2M sets the target bitrate for video encoding to 2 Mbps.
   -metadata:s :v: 0 alpha_mode="1" adds metadata to specify alpha channel mode.
   -auto-alt-ref 0 disables automatic alternate reference frames.
   -y overwrites output files without asking.
   C:\Users\Documents\output.webm pecifies the output filename with the .webm extension.



(source: [RWMA](https://discord.com/channels/1083481230839922688/1083483045329375393/1249297299662704681))