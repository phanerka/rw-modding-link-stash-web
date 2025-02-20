---
{"dg-publish":true,"permalink":"/coding/how-to/technically/log-things/"}
---

Log locations are described [[Exploring contents/Base game & Downpour/Technical files#Logs\|here]].

You can log variables on runtime if you [[Coding/Debugging & troubleshooting#DNSpy'ing\|attach DNSpy]] to the game.

> `Debug.Log` is Unity's logger, which is not ready when `OnEnable` runs
> 
> try using `Logger.LogDebug` instead, which goes to `Rain World\BepInEx\LogOutput.log`

(source: [RWMA](https://discord.com/channels/1083481230839922688/1083483097145819348/1334384577371705367))