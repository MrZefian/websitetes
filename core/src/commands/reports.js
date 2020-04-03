const { RichEmbed } = require("discord.js"),
  config = require("../../config.json"),
  { noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "reports",
    aliases: ["report", "helpop"]
  },
  run: async (bot, message, args) => {
    message.delete();
    let mention = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!mention)
      return noArgs(message.channel, "Please provide some mention users");
    let reason = args.join(" ").slice(22);
    if (!reason) reason = "No Given Reason!";

    message.channel
      .send(
        `
✅ Successfully **\`REPORT\` ${mention.user.tag}**.
`
      )
      .then(m => m.delete(5000));

    let reportsEmbed = new RichEmbed()
      .setAuthor("REPORT.", message.author.avatarURL)
      .setColor(mention.displayHexColor)
      .setThumbnail(mention.user.displayAvatarURL)
      .addField("Report User", `**${mention} | ${mention.user.tag}**`)
      .addField("Member", `**${message.author} | ${message.author.tag}**`)
      .addField("On Channels", `<#${message.channel.id}>`)
      .addField("Time stamp", `**${message.createdAt}**`)
      .addField("Report Reason", `\`\`\`${reason}\`\`\``)
      .setTimestamp();

    bot.guilds
      .get(config.servers.GuildsID)
      .channels.get(config.servers.ReportsID)
      .send(reportsEmbed);
  }
};
