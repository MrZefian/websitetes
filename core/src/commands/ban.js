const { RichEmbed } = require("discord.js"),
  config = require("../../config.json"),
  { noPerms, noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "ban",
    aliases: ["bans", "banned"]
  },
  run: async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
      return noPerms(message);
    let mention = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!mention)
      return noArgs(message.channel, "Please provide some mention users");
    let reason = args.join(" ").slice(22);
    if (!reason) reason = "No Given Reason!";

    message.channel.send(`
✅ Successfully **\`BANNED\` ${mention.user.tag}**, Check <#${config.servers.ModerationID}> for more details.
`);

    let banEmbed = new RichEmbed()
      .setAuthor("BANNED.", message.author.avatarURL)
      .setColor("RED")
      .setThumbnail(mention.user.displayAvatarURL)
      .addField("Ban User", `**${mention} | ${mention.user.tag}**`)
      .addField("Staff Server", `**${message.author} | ${message.author.tag}**`)
      .addField("Time stamp", `**${message.createdAt}**`)
      .addField("Ban Reason", `\`\`\`${reason}\`\`\``)
      .setTimestamp();

    bot.guilds
      .get(config.servers.GuildsID)
      .channels.get(config.servers.ModerationID)
      .send(banEmbed);

    if (message.author.bot === false) {
      let dmEmbed = new RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(
          `
You have been **BANNED** on the Server, because:
\`\`\`${reason}\`\`\`
`
        )
        .addField(
          "Ban details",
          `
**Server Staff:** ${message.author} **|** ${message.author.tag}
**Time stamp:** ${message.createdAt}
`
        )
        .setTimestamp();

      mention
        .send(dmEmbed)
        .then(() => mention.ban())
        .catch(err => console.info(`[BANNED ERROR]: ${err}`));
    }
  }
};
