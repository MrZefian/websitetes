const config = require("../../config.json");
const fs = require("fs");
module.exports = {
  config: {
    name: "decline",
    aliases: ["declined"]
  },
  run: async (bot, message, args) => {
    if (
      message.author.id !== config.bot.developer.zefianalfian
    )
      return;
    
    let botID = args[0],
      developerID = args[1],
      reason = message.content
        .split(" ")
        .slice(3)
        .join(" ");

    if (!botID) return message.channel.send(`Please provide some Bots IDs`);
    if (!developerID)
      return message.channel.send(`Please provide some Bots Developers`);
    if (!reason) reason = "No Given Reason!";

    let user = bot.users.get(developerID),
      client = bot.users.get(botID);

    message.channel.send(`
✅ Successfully **\`DECLINED\` ${client.tag}**, Check <#${config.servers.BotsID}> for more details.
`);
    
    
//message.guild.members.get(botID).kick();
    
    
    const fileNya = `./databaseBots/${botID}.json`;
  
    fs.unlinkSync(`./dataGua/${botID}.html`, function(err)  {
      if (err) throw err; 
      console.log("file deleted :" + " " + botID); 
    });
    
    
    fs.unlinkSync(fileNya, function(err) {
      if (err) throw err;
      console.log("file deleted : " + botID);
    });
    
    
    
    bot.guilds
      .get(config.servers.GuildsID)
      .channels.get(config.servers.BotsID)
      .send(
        `(Developer: ${user}) **${client.tag}** has been **__Declined__** by **${message.author.tag}**.`
      );

    bot.users.get(developerID).send(
      `:frowning: Hi ${user}, Your **${client.tag}** Bots was **__Declined__** from **Retradov Nation**, because:
` +
        "```" +
        reason +
        "```"
    );
  }
};
