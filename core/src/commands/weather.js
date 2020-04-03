const { RichEmbed } = require("discord.js"),
  weather = require("weather-js"),
  { noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "weather",
    aliases: []
  },
  run: async (bot, message, args) => {
    let text = args.join(" ");
    if (!text) noArgs(message.channel, "Please provide the name of City too!");

    weather.find({ search: text, degreeType: "F" }, function(err, result) {
      if (err) message.channel.send(err);

      if (result.length === 0)
        return;

      let current = result[0].current,
        location = result[0].location;

      let weatherEmbed = new RichEmbed()
        .setAuthor(`Forecast For ${current.observationpoint}`)
        .setColor(0x00ae86)
        .setThumbnail(current.imageUrl)
        .addField("Temperature", `\`${current.temperature}\`**°C**`, true)
        .addField("Humidity", `\`${current.humidity}\`**%**`, true)
        .addField("Winds", `\`${current.winddisplay}\``, true)
        .addField("Status", `**${current.skytext}**`, true)
        .setFooter(
          `• Messaged by: ${message.author.tag}`,
          message.author.avatarURL
        )
        .setTimestamp();

      message.channel.send(weatherEmbed);
    });
  }
};
