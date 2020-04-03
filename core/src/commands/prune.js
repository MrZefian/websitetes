const { noPerms, noArgs } = require("../utils/errors.js");

module.exports = {
  config: {
    name: "prune",
    aliases: ["purge", "clear"]
  },
  run: async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
      return noPerms(message);

    if (!args[0])
      return noArgs(message.channel, "Did you delete the chat **Number** ?");

    message.channel.bulkDelete(args[0]).then(() => {
      message.channel
        .send(`✅ Successfully **CLEARED ${args[0]} MESSAGED**.`)
        .then(msg => msg.delete(5000));
    });
  }
};
