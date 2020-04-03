const { readdirSync } = require("fs");

module.exports = async bot => {
  let file = readdirSync("./core/src/events/").filter(f => f.endsWith(".js"));

  for (let f of file) {
    let evt = require(`../events/${f}`);
    let eName = f.split(".")[0];

    bot.on(eName, evt.bind(null, bot));
  }
};
