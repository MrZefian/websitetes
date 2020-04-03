const { RichEmbed } = require("discord.js"),
  config = require("../../config.json"),
  { noPerms, noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "kick",
    aliases: ["kicks", "kicked"]
  },
  run: async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"]))
      return noPerms(message);
    let mention = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!mention)
      return noArgs(message.channel, "Please provide some mention users");
    let reason = args.join(" ").slice(22);
    if (!reason) reason = "No Given Reason!";

    message.channel.send(`
✅ Successfully **\`KICKED\` ${mention.user.tag}**, Check <#${config.servers.ModerationID}> for more details.
`);

    let kickEmbed = new RichEmbed()
      .setAuthor("KICKED.", message.author.avatarURL)
      .setColor("RED")
      .setThumbnail(mention.user.displayAvatarURL)
      .addField("Kick User", `**${mention} | ${mention.user.tag}**`)
      .addField("Staff Server", `**${message.author} | ${message.author.tag}**`)
      .addField("Time stamp", `**${message.createdAt}**`)
      .addField("Kick Reason", `\`\`\`${reason}\`\`\``)
      .setTimestamp();

    bot.guilds
      .get(config.servers.GuildsID)
      .channels.get(config.servers.ModerationID)
      .send(kickEmbed);

    if (message.author.bot === false) {
      let dmEmbed = new RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(
          `
You have been **KICKED** on the Server, because:
\`\`\`${reason}\`\`\`
`
        )
        .addField(
          "Kick details",
          `
**Server Staff: ${message.author} | ${message.author.tag}**
**Time stamp:** ${message.createdAt}
`
        )
        .setTimestamp();

      mention
        .send(dmEmbed)
        .then(() => mention.kick())
        .catch(err => console.info(`[KICKED ERROR]: ${err}`));
    }
  }
};
