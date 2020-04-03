const { RichEmbed } = require("discord.js");

module.exports = {
  config: {
    name: "serverinfo",
    aliases: ["server"]
  },
  run: async (bot, message, args) => {
    let verification = message.guild.verificationLevel,
      region = message.guild.region.toLowerCase(),
      serverinfoEmbed = new RichEmbed()
        .setColor("#2c84de")
        .setThumbnail(message.guild.iconURL).setDescription(`
:label: Name: **${message.guild.name}**
:credit_card: ID: **${message.guild.id}**
`);
    if (verification === 0) verification = "**None** (Unrestriced)";
    if (verification === 1)
      verification =
        "**Low** (Must have a verified email on their Discord account)";
    if (verification === 2)
      verification =
        "**Medium** (Must also be registered on Discord for longer 5 minutes)";
    if (verification === 3)
      verification =
        "**(╯°□°）╯︵ ┻━┻** (Must also be a member of this server for longer 10 minutes)";
    if (verification === 4)
      verification =
        "**┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻** (Must have a verified phone on their Discord account)";
    
    if (region === "brazil") region = "🇧🇷 **Brazil**";
    if (region === "us-west") region = ":flag_us: **Us West**";
    if (region === "japan") region = "🇯🇵 **Japan**";
    if (region === "singapore") region = "🇸🇬 **Singapore";
    if (region === "central-europe") region = ":flag_eu: **Central Europe**";
    if (region === "hong-kong") region = "🇭🇰 **Hong Kong**";
    if (region === "us-south") region = ":flag_us: **US South**";
    if (region === "south-africa") region = ":flag_af: **South Africa**";
    if (region === "us-central") region = ":flag_us: **US Central**";
    if (region === "us-east") region = ":flag_us: **US East**";
    if (region === "sydney") region = "🇦🇺 **Sydney**";
    if (region === "western-europe") region = ":flag_eu: **Western Europe**";
    if (region === "india") region = "🇮🇳 **India**";
    if (region === "russia") region = "🇷🇺 **Russia**";

    if (!args[0]) {
      serverinfoEmbed
        .setAuthor("Server Informations")
        .addField("✅ Verification Levels", verification)
        .addField("Region", `• ${region}`)
        .addField("Roles Count", `• **${message.guild.roles.size} Roles**`)
        .addField(
          `Channel Count [ ${message.guild.channels.size} ]`,
          `
• **${message.guild.channels.filter(m => m.type === "category").size} Category**
• **${message.guild.channels.filter(m => m.type === "text").size} Text**
• **${message.guild.channels.filter(m => m.type === "voice").size} Voice**
`
        )
        .addField(
          `Member Count [ ${message.guild.memberCount} ]`,
          `
• **${
            message.guild.members.filter(m => m.presence.status === "online")
              .size
          } Online**
• **${
            message.guild.members.filter(m => m.presence.status === "idle").size
          } Idle**
• **${
            message.guild.members.filter(m => m.presence.status === "dnd").size
          } Do Not Disturb**
• **${
            message.guild.members.filter(m => m.presence.status === "offline")
              .size
          } Offline**
`
        )
        .addField(
          "Server Owner",
          `**• ${message.guild.owner} | ${message.guild.owner.user.tag}**`
        )
        .addField("Created At", `**${message.guild.createdAt}**`)
        .setFooter(
          `• Messaged by: ${message.author.tag}`,
          message.author.avatarURL
        )
        .setTimestamp();

      message.channel.send(serverinfoEmbed);
    }
  }
};
