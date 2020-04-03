const { RichEmbed } = require("discord.js");

module.exports = {
  config: {
    name: "help",
    aliases: ["h", "command", "commands", "cmd", "cmds"]
  },
  run: async (bot, message, args) => {
    let helpEmbed = new RichEmbed()
      .setAuthor(`RetraDov's Commands List.`)
      .setColor("2c84de")
      .setThumbnail(
       // "https://cdn.discordapp.com/icons/647582209699741709/9e17677bf44ea48bd176483dcdfce7a7.jpg"
    message.guild.iconURL
      )
      .setDescription(
        `
* General Command(s)

• help
• ping
• stats
• weather \`[city name]\`
• suggest \`[suggestion]\`
• say \`[arguments]\`
• reports \`[@user]\` \`[mistakes]\`
• botinfo \`[id]\`

* Staff Command(s)

• mute \`[@user]\` \`[reason]\`
• prune \`[message amount]\`
• unmute \`[@user]\` \`[reason]\`
• warn \`[@user]\` \`[reason]\`
• kick \`[@user]\` \`[reason]\`
• ban \`[@user]\` \`[reason]\`
• accept \`[id_bot]\` \`[prefix_bot]\` \`[owner_id]\` \`[library]\`
• decline \`[id_bot]\` \`[id_developer]\` \`[reason]\`
• ev \`[some JS codes]\`
• exec \`[some bash commands]\`
`
      )
      .setFooter("© 2019 RetraDov Nation.", bot.user.avatarURL);

    message.channel.send(helpEmbed);
  }
};