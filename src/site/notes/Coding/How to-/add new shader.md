---
{"dg-publish":true,"permalink":"/coding/how-to/add-new-shader/"}
---

https://twitter.com/joar_lj/status/1525445116789497856 (a [mirror](https://nitter.poast.org/joar_lj/status/1525445116789497856) for non-twitter users)

https://github.com/PJB3005/RainWorldMods/tree/master/ShaderReload for hot reload


**Existing shaders:** [[Exploring contents/Base game & Downpour/Assets#shaders\|Assets#shaders]]

;-; i dont wanna copy stuff


(source: [RW Main](https://discord.com/channels/291184728944410624/305139167300550666/858276294353092609))




> **Shaders, Lighting, and Shadows Information (For Shader Authors)**
> 
> This post addresses quirks with the lighting engine and how it interacts with custom shaders, as well as the available shader keywords and uniforms.
> 
> For some background, Futile is a bit of a frankenstein's monster when it comes to iteroperability with base Unity systems; while Unity shaders work, the behavior is overshadowed by Futile's layer system. This caused me to spend more hours than I care to admit trying to figure out why an unlit holographic/additive shader I wrote was casting shadows. It was pretty terrible to deal with.
> 
> Rather than witness people deal with that again, I spent the past couple hours gathering information and testing. You can read up on necessary information about the renderer here: <https://gist.github.com/EtiTheSpirit/655d8e81732ba516ca768dbd7410ddf4>
> 
> This should save shader authors a lot of time and headache c:

source: [RW Main](https://discord.com/channels/291184728944410624/838185248981385256/1128354653051044023)


### Basic shaders tutorials


wawa