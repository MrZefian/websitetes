const { exec } = require("child_process"),
  { noDevs, noArgs } = require("../utils/errors.js"),
  config = require("../../config.json");

module.exports = {
  config: {
    name: "exec",
    aliases: ["ex", "execute", "$"]
  },
  run: async (bot, message, args) => {
    if (
            message.author.id !== config.bot.developer.zefianalfian
    )
      return noDevs(message);

    let cmd = args.join(" ");
    if (!cmd)
      return noArgs(message.channel, "Please provide some argumentations!");

    exec(cmd, (error, stdout) => {
      let response = error || stdout;
      message.channel
        .send(
          `
**⟩_ ${cmd}**
\`\`\`bash\n${response}\`\`\`
`
        )
        .catch(console.error);
    });
  }
};
