const { version, RichEmbed } = require("discord.js"),
  moment = require("moment"),
  m = require("moment-duration-format"),
  cpuStat = require("cpu-stat"),
  os = require("os");

module.exports = {
  config: {
    name: "stats",
    aliases: ["statistic", "status", "info"]
  },
  run: async (bot, message, args) => {
    cpuStat.usagePercent(async (err, percent) => {
      if (err) console.error(`[STATS ERROR]: ${err}`);

      let botuptime = moment
          .duration(bot.uptime)
          .format("d [Day(s)], h [Hour(s)], s [Second(s) ago]"),
        osuptime = moment
          .duration(os.uptime())
          .format("d [Day(s)], h [Hour(s)], s [Second(s) ago]"),
        statsEmbed = new RichEmbed()
          .setAuthor("Core Statistic")
          .setColor("#2c84de")
          .setThumbnail(bot.user.displayAvatarURL)
          .addField(
            "Connected To",
            `**\`\`\`c
• Users = ${bot.users.size}
• Guilds = ${bot.guilds.size}
• Channels = ${bot.channels.size}
\`\`\`**`,
            true
          )
          .addField(
            "Engines",
            `**\`\`\`c
• Langs = Node.js ${process.version}
• Libs = Discord.js v${version}
\`\`\`**`,
            true
          )
          .addField(
            "Usage",
            `**\`\`\`c
• CPU = ${percent.toFixed(2)}%
• Memory = ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(
              os.totalmem() /
              1024 /
              1024
            ).toFixed(2)} MB
• OS Uptime = Booted Up ${osuptime}
• Core Uptime = Booted Up ${botuptime}
\`\`\`**`
          )
          .setFooter(
            `• Messaged by: ${message.author.tag}`,
            message.author.avatarURL
          )
          .setTimestamp();

      message.channel.send(statsEmbed);
    });
  }
};
