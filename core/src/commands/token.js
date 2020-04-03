const fs = require('fs'),
      { RichEmbed } = require('discord.js');

module.exports = {
  config: {
    name: "token",
    aliases:['token']
  },
  run: async (bot,message,args) => {
    
    if (!args[0]) return message.reply("Use `<show/regenerate>`");
    
    if (args[0] === "show"){
      const user = message.mentions.users.first();//message.mentions.users.first() || message.author;
   //  if (user.bot === false) return;
      
      if (!user) return message.reply("Put your bot ID or mention");
      if (!user.bot) return message.channel.send("That isn't bot")
      let apikey = require(`../../../accountData/${message.author.id}-${user.id}.json`);
      
      if (!apikey || apikey === undefined)
      return message.channel.send(
          `
${message.author} Sorry, but you're not have API Token **Retradov Nation**,
Please contact a Staff Member(s)!
`
        );
      
      
      message.channel.send(`${message.author}, Check you're on the DM's!`);

      let tokenEmbed = new RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor(message.member.displayHexColor)
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(
          `
Hi ${message.author}, Your **API TOKEN** is, Token:
**\`\`\`${apikey.token}\`\`\`**
`
        )
        .addField(
          "Links Account",
          `**[Retradov Account](https://${process.env.PROJECT_DOMAIN}.glitch.me/account/${message.author.id}/${user.id})**`
        )
        .setFooter("Note: Don't share API Token with people Unknown!")
        .setTimestamp();

      message.author.send(tokenEmbed);
    

    }
    
    if (args[0] === "regenerate" || args[0] === "regen"){
      if (message.author.id !== "539541219651485696") return message.channel.send(`STAFF ONLY TO SECURE ALL API KEY`);
      
      let mentions = message.mentions.users.first();
      let idB = args[1];
      if (!idB) return message.reply("ada yang lupa lurd?");
      
      if (!mentions) return message.reply(`Mentions user please`);
      if (mentions === true) return message.channel.send("You're mentions is **Bots**, Please mentions **Users**!");
      
      let tokenLength =
          Math.random()
            .toString(36)
            .substring(2, 17) +
          Math.random()
            .toString(36)
            .substring(2, 17),
        tokenUser = {
          token: tokenLength,
          ownerID: mentions.user.id,
          isThatTokenValid: true,
          valid: true
        },
          dataBot = {
            token: tokenLength,
            developerID: mentions.user.id,
            developerTag: mentions.user.tag
          };
      
      
      fs.createWriteStream(
      `./tokenData/${idB}.json`
      ).write(JSON.stringify(dataBot,0,2), err => {
        if (err) console.error(err);
      });
      
      fs.createWriteStream(
        `./accountData/${mentions.user.id}-${idB}.json`
      ).write(JSON.stringify(tokenUser, 0, 2), err => {
        if (err) console.error(err);
      });
      
      
      message.channel.send(
        `✅ Successfully **\`REGENERATE API TOKEN\` ${mentions.user.tag}**, Check <#647597401351258152> for more details.`
      );

      let tokenEmbed = new RichEmbed()
        .setAuthor("REGENERATE API TOKEN.", message.author.avatarURL)
        .setColor(mentions.displayHexColor)
        .setThumbnail(mentions.user.displayAvatarURL)
        .addField("User Name", `**${mentions} | ${mentions.user.tag}**`)
        .addField("Staff User", `**${message.author} | ${message.author.tag}**`)
        .addField("Time stamps", `**\`\`\`${message.createdAt}\`\`\`**`)
        .setTimestamp();

      bot.guilds
        .get("647582209699741709")
        .channels.get("647597401351258152")
        .send(tokenEmbed);

      let dmEmbed = new RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(
          `
You have been **REGENERATE API TOKEN** on The Server, Token:
**\`\`\`${tokenLength}\`\`\`**
`
        )
        .addField(
          "Regenerate Token details",
          `
**Server Staff:** ${message.author} **|** ${message.author.tag}
**Time stamp:** ${message.createdAt}
`
        )
        .setFooter("Note: Don't share API Token with people Unknown!")
        .setTimestamp();

      mentions.send(dmEmbed);
    
    }
  }
};