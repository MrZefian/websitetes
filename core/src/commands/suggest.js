const { RichEmbed } = require("discord.js"),
  { noArgs } = require("../utils/errors.js"),
  config = require("../../config.json");

module.exports = {
  config: {
    name: "suggest",
    aliases: []
  },
  run: async (bot, message, args) => {
    message.delete();

    let text = args.join(" ");
    if (!text) return noArgs(message.channel, "What is your **Suggestion** ?");

    message.channel.send(`
✅ Successfully **\`Suggestions\`** **${message.author.tag}**, Check <#${config.servers.SuggestionsID}> for more details.
`);

    let suggestEmbed = new RichEmbed()
      .setAuthor("💡 Suggestions")
      .setColor(message.member.displayHexColor)
      .setDescription(text)
      .setFooter(
        `• Suggested by: ${message.author.tag}`,
        message.author.avatarURL
      )
      .setTimestamp();

    bot.guilds
      .get(config.servers.GuildsID)
      .channels.get(config.servers.SuggestionsID)
      .send(suggestEmbed)
      .then(m => {
        m.react("❎").then(() => m.react("✅"));
      });
  }
};
