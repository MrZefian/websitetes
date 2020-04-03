const FarmCraftsDev = require("retradov.js"),
  FarmCrafts = new FarmCraftsDev("647714347329650691","616962893451231233","d6ogeis9va94w1kclkjzm"),
  { RichEmbed } = require("discord.js");

module.exports = {
  config: {
    name: "botinfo",
    aliases: []
  },
  run: async (bot, message, args) => {
    let mention = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!mention)
      return message.channel.send("Please provide some mention or ID users");

    FarmCrafts.getBot(mention.id).then(botData => {
      if (!botData || botData === undefined)
        return message.reply(
          "Sorry, you're but that Bot was not registered yet on **__Retradov Nation__**."
        );
      
      
      const link = "https://retradov-helper.glitch.me/bots/" + mention.id;
      let approved = botData.accepted;
      if (approved === false)
        approved = "Not Approved..";
   //   link = "Not Anything";
      
      if (approved === true)
    //    link = link; 
        approved = "Registered and **Approved** on **__Retradov Nation__**";

      let botinfoEmbed = new RichEmbed()
        .setTitle(`${mention.user.tag} Retradov Nation Information(s)`)
        .setColor("#2c84de")
        .setThumbnail(mention.user.displayAvatarURL)
        .addField(
          "Username",
          `**${mention} | ${mention.user.tag}**`,
          true
        )
        .addField(
          "Developer",
          `**<@!${botData.owner.id}> | ${botData.owner.tag}**`,
          true
        )
        .addField("Prefix", `Use **\`${botData.prefix}\`**`, true)
        .addField("Library", `**\`${botData.lib}\`**`, true)
        .addField("Registration", approved)
     .addField("Home Page :", link) 
      .addField("Created At", `**\`\`\`${mention.user.createdAt}\`\`\`**`);

      message.channel.send(botinfoEmbed);
    });
  }
};
