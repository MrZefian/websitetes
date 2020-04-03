const config = require("../../config.json"),
  moment = require("moment");

module.exports = async bot => {
  console.log(`[CORE READY]: ${bot.user.tag} has been online!`);

  function Presence() {
    bot.user.setStatus("dnd");
    /*let ga = [
      "Core RetraDov",
      "Kocheng Ireng"
      ]
    */
    
    let PREFIX = config.bot.prefix.toLowerCase(),
      status = [
        `My prefixes is ${PREFIX}`,
        `Mention me (@${bot.user.username})`,
        `Type ${PREFIX}help for Commands List!`,
        `${PREFIX}help | zefianalfian.glitch.me`,
        `${PREFIX}help | Welcome to null`,
        `${PREFIX}help | null`,
        `${PREFIX}help | Hi there,`,
        `${PREFIX}help | With ${bot.guilds.size} guilds`,
        `${PREFIX}help | In ${bot.users.size} users`,
        `${PREFIX}help | On ${bot.channels.size} channels`,
        `${PREFIX}help | Localhost Time :  ${moment()
          .utcOffset("+07:00")
          .format("HH:mm")} WIB`,
        `${PREFIX}help | Pukul ${moment()
          .utcOffset("+08:00")
          .format("HH:mm")} WITA`,
        `${PREFIX}help | Pukul ${moment()
          .utcOffset("+09:00")
          .format("HH:mm")} WIT`
      ];
    let rstatus = status[Math.floor(Math.random() * status.length)];

    bot.user.setStatus("online");
    bot.user.setActivity(rstatus, {
      type: "PLAYING"
    });
  }/*
  function a() {
    const name = [
      "Core RetraDov",
      "RetraDov Nation",
      "Kocheng Ireng"
      ];
    
    bot.user.setUsername(name[Math.floor(Math.random() * name.length)]);
  }

  
  setInterval(a,1,08e+7);*/
  setInterval(Presence, 5000);
};
