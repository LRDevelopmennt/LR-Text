**[Preview](https://www.youtube.com/watch?v=JIcUNFGUtRE)**
**[Github](https://github.com/LRDevelopmennt/LR-Text)**

> ## **📜 • CONTENT**

LR Text is a simple application made mostly for roleplay servers, which helps you specify tasks.

---

> ## **🛠️ • SETUP**

- Install the zip file.

- After downloading, open the “LR-Text-main.zip” and rename the folder named “LR-Text-main” inside the “LR-Text-main.zip” to “LR-Text”. Then put the folder named “LR-Text” into resources/[qb].

- Open the “server.cfg” and type “ensure LR-Text”.

---

> ## **❓ • EXPORTS**

> **Open Text:**
> ```lua
  >QBCore.Functions.Progressbar("random_task", "Doing something", 5000, false, true, {
  >    disableMovement = false,
  >    disableCarMovement = false,
  >    disableMouse = false,
  >    disableCombat = true,
  >}, {
  >    animDict = "mp_suicide",
  >    anim = "pill",
  >    flags = 49,
  >}, {}, {}, function()
  >    -- Done
  >end, function()
  >    -- Cancel
 >end)
> ``` 

> **Close Text**
> export["lr-text"]:closeText()

---

> ## **📁 • DEPENDENCIES**

- [QBcore](https://github.com/qbcore-framework)

> ## **🌐 • SOCIALS**

- 🌐 • _Discord:_ https://discord.gg/JCsRKtRwAN
- 🌐 • _YouTube:_ https://www.youtube.com/@LRDevelopment
- 🌐 • _CFX:_ https://forum.cfx.re/t/free-qb-lr-text-qbcore/5209518
