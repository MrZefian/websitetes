const { RichEmbed } = require("discord.js");

module.exports = {
  config: {
    name: "ping",
    aliases: ["pang", "peng", "pong"]
  },
  run: async (bot, message, args) => {
    let start = Date.now();

    message.channel.send("Ping...").then(m => {
      let Latency = Date.now() - start;
      let API = bot.ping.toFixed(2);

      let pingEmbed = new RichEmbed()
        .setAuthor("🏓 PONG!")
        .setColor("#2c84de")
        .addField("📶 Latency", `\`${Latency}\`ms!`)
        .addField("💻 API", `\`${API}\`ms!`)
        .setFooter(`• Pinged Of: ${bot.user.tag}`, bot.user.avatarURL);

      m.edit(pingEmbed);
    });
  }
};
