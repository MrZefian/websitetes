const { RichEmbed } = require("discord.js"),
  { inspect } = require("util"),
  config = require("../../config.json"),
      db = require('quick.db'),
  { noDevs, noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "eval",
    aliases: ["ev", "evaluate"]
  },
  run: async (bot, message, args) => {
    if (
            message.author.id !== config.bot.developer.zefianalfian
    )
      return noDevs(message);

    try {
      let code = args.join(" ");
      if (!code)
        return noArgs(message.channel, "Please provide some argumentations!");

      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = inspect(evaled, { depth: 0 });

      let evalEmbed = new RichEmbed()
        .setColor("#2c84de")
        .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
        .addField("Output", `\`\`\`js\n${evaled}\n\`\`\``);

      message.channel.send(evalEmbed);
    } catch (err) {
      message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
    }
  }
};
