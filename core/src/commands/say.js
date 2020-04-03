const { noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "say",
    aliases: ["said"]
  },
  run: async (bot, message, args) => {
    let text = args.join(" ");
    if (!text) return noArgs(message.channel, "What should i **Say** ?");

    message.channel.send(text);
  }
};
