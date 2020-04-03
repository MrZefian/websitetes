/**
* Documentation retradov.js

* @param {string} new RetraClient(string,string,token)
* @param {string} getBot(string)
* @param {version} - Mengetahui versi
* @param {getBot} - botName, prefix, ownerTag, ownerId, lib, accepted
* 
**/

const RetraClient = require("retradov.js")
const Retra = new RetraClient("Your ID Bot","Your Owner ID","Your Token Bot")
const bot = new require("discord.js").Client()
const PREFIX = "!"


bot.on("ready",async () => {
  console.log("Bot Started")
})

bot.on("message",async (msg) => {
  const message = msg.content.toLowerCase()
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g)
  const cmd = args.shift().toLowerCase()
  
  if (cmd === "retra"){
    const id = args[0];
    if (!id) return message.reply("Put your id")
    if (isNaN(id)) return message.reply("Please provide some id")
    if (id.length < 17) return message.reply("Invalid id")
    const data = await Retra.getBot(id);
    
    message.channel.send(`Bot Name : ${data.botName}
Prefix : ${data.prefix}
Owner : ${data.owner.tag}
Library : ${data.lib}
Accepted : ${data.accepted}
  `)
  }
})

bot.login("Put your token")