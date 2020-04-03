const fs = require("fs"),
      weatherjs = require("weather-js"),
  config = require("../../config.json");

module.exports = {
  noPerms: async message => {
    message.reply("Sorry, but you're not our Staff(s).");
  },
  noDevs: async message => {
    message.reply("Sorry, but you're not my **`DEVELOPERS`**.");
  },
  noArgs: async (channel, args) => {
    channel.send(args);
  }
};
