const config = require("../../config.json");

module.exports = async (bot, message) => {
  let PREFIX = config.bot.prefix,
    args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(" "),
    commands = args.shift().toLowerCase();

  try {
    let commandsFile =
      bot.commands.get(commands) || bot.commands.get(bot.aliases.get(commands));
    if (commandsFile) commandsFile.run(bot, message, args);
  } catch (e) {
    console.error(e.message);
  } finally {
    bot.channels.get("649901599514165248").setName(`Member Count : ${message.guild.memberCount}`);
    console.info(
      `[MESSAGE INFO]: ${
        message.author.tag
      } has been using ${message.content
        .split(" ")[0]
        .replace(PREFIX, "")} commands!`
    );
  }
};
