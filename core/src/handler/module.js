const { readdir } = require("fs");

module.exports = async bot => {
  readdir("./core/src/commands/", async (err, files) => {
    if (err) console.error(`[FILE ERROR]: ${err}`);

    files.forEach(f => {
      if (!f.endsWith(".js"))
        return console.info("[FILE INFO]: Cloudn't find a commands!");

      let props = require(`../commands/${f}`);
      bot.commands.set(props.config.name, props);
      props.config.aliases.forEach(alias => {
        bot.aliases.set(alias, props.config.name);
      });
    });
  });
};
