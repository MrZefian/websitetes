const qs = require("querystring"),
  { noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "docs",
    aliases: ["docsdjs", "documents"]
  },
  run: async (bot, message, args) => {
    if (args.length <= 1)
      return noArgs(message.channel, "Please provide some argumentations!");

    let source = [
      "stable",
      "master",
      "rpc",
      "commando",
      "akairo",
      "akairo-master",
      "11.5-dev"
    ].includes(args.slice(-1)[0])
      ? args.pop()
      : "stable";
    if (source === "11.5-dev") {
      source = `https://raw.githubusercontent.com/discordjs/discord.js/docs/${source}.json`;
    }
    try {
      let queryString = qs.stringify({ src: source, q: args.join(" ") }),
        { body } = await bot.fetch.get(
          `https://djsdocs.sorta.moe/v2/embed?${queryString}`
        );

      message.channel.send({ embed: body });
    } catch (e) {
      return message.channel.send(`
:negative_squared_cross_mark: Some Error was appeared!
**\`Not Found\`**, please try again later...`);
    }
  }
};
