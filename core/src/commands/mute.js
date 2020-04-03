const { RichEmbed } = require("discord.js"),
  config = require("../../config.json"),
  { noPerms, noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "mute",
    aliases: ["mutes", "muted"]
  },
  run: async (bot, message, args) => {
   const role = message.guild.roles.find("name","Muted")
    message.delete();
    if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"]))
      return noPerms(message);
    let mention = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!mention)
      return noArgs(message.channel, "Please provide some mention users");
    let reason = args.join(" ").slice(22);
    if (!reason) reason = "No Given Reason!";

    message.channel.send(`
✅ Successfully **\`MUTED\` ${mention.user.tag}**, Check <#${config.servers.ModerationID}> for more details.
`);

    let muteEmbed = new RichEmbed()
      .setAuthor("MUTED.", message.author.avatarURL)
      .setColor("RED")
      .setThumbnail(mention.user.displayAvatarURL)
      .addField("Mute User", `**${mention} | ${mention.user.tag}**`)
      .addField("Staff Server", `**${message.author} | ${message.author.tag}**`)
      .addField("Time stamp", `**${message.createdAt}**`)
      .addField("Mute Reason", `\`\`\`${reason}\`\`\``)
      .setTimestamp();

    bot.guilds
      .get(config.servers.GuildsID)
      .channels.get(config.servers.ModerationID)
      .send(muteEmbed);

    if (message.author.bot === false) {
      let dmEmbed = new RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(
          `
You have been **MUTED** on the Server, because:
\`\`\`${reason}\`\`\`
`
        )
        .addField(
          "Mute details",
          `
**Server Staff: ${message.author} | ${message.author.tag}**
**Time stamp:** ${message.createdAt}
`
        )
        .setTimestamp();

      mention
        .send(dmEmbed)
        .then(() => mention.addRole(role))
        .catch(err => console.info(`[MUTED ERROR]: ${err}`));
    }
  }
};
