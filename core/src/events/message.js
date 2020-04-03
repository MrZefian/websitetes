const { RichEmbed } = require("discord.js"),
  config = require("../../config.json"),
  fs = require("fs")
//file = JSON.parse(fs.readFileSync("bots.json", "utf8"));

module.exports = async (bot, message) => {
  if (message.author.bot || !message.guild) return;

  let PREFIX = config.bot.prefix.toLowerCase(),
    msg = message.content.toLowerCase(),
    args = message.content
      .slice(config.bot.prefix)
      .trim()
      .split(/ +/g);

  if (msg.startsWith(PREFIX)) require("../handler/commands.js")(bot, message);

  if (msg == `<@${bot.user.id}>` || msg == `<@!${bot.user.id}>`) {
    let msgEmbed = new RichEmbed()
      .setAuthor("RetraDov Servant Bots.")
      .setColor("#2c84de")
      .setThumbnail(
        message.guild.iconURL
      )
      .setDescription(
        `
Hi ${message.author}... my name is **${bot.user.username}**, nice to meet you!
You need to know my Prefixes before running some Commands.
This bot cordinated by ApaAjaBoleh#9204
You can also start use my Commands by typin' **\`${PREFIX}help\`**.
      `
      )
      .setFooter(`My Prefixes is ${PREFIX}`)
      .setTimestamp();

    message.channel.send(msgEmbed);
  }
  if (message.channel.id === "649935042096660491") {
  message.delete();

    let botID = args[0],
      prefix = args[1],
      lib = args[2];

    if (!botID)
      return message.channel
        .send("Please provide some ID Bots.")
        .then(msg => msg.delete(1000));
    if (!prefix)
      return message.channel
        .send("Please provide some Prefixes Bots.")
        .then(msg => msg.delete(1000));
    if (!lib)
      return message.channel
        .send("Please provide some library Bots.")
        .then(msg => msg.delete(1000));
    bot.fetchUser(botID).then(invitebot => {
      if (!invitebot.bot)
        return message.channel
          .send("Please provide some ID only Bots.")
          .then(msg => msg.delete(1000));
/*
      file[invitebot.id] = {
        botName: invitebot.tag,
        prefix: prefix,
        developerTag: message.author.tag,
        developerID: message.author.id,
        lib: lib,
        accepted: false
      };*/
      
      const dataA = {
        botName: invitebot.tag,
        prefix: prefix,
        developerTag: message.author.tag,
        developerID: message.author.id,
        lib: lib,
        accepted: false
      };
      
      const gentod = `




<!DOCTYPE html>
<html lang="en" class="full-height">

<head>
  <title>RetraDov</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RetraDov" />
  <meta name="author" content="HaNs PuTera" />
  <meta content="#54FCFF" name="theme-color" />
  <meta content="#54FCFF" name="msapplication-navbutton-color" />
  <meta property="og:url" content="https://nyoba.glitch.me/" />
  <meta property="og:image"
    content="${message.guild.iconURL}" />
  <meta property="og:description" content="${invitebot.tag} bot, owned by ${message.author.tag}." />
  <meta property="og:footer" content="• RetraDov" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="icon"
    href="${message.guild.iconURL}" />
  <link rel="shortcut icon" type="image/png"
    href="${message.guild.iconURL}" />

 <link rel="stylesheet" href="https://assets.azalelnation.com/304377187057008645/zealcord.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.10/css/mdb.min.css" rel="stylesheet">

  <script type="8316295a88a7d6788097ff1b-text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script type="8316295a88a7d6788097ff1b-text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js">
  </script>
  <script type="8316295a88a7d6788097ff1b-text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script type="8316295a88a7d6788097ff1b-text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.10/js/mdb.min.js"></script>
</head>

<header>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img
          src="${message.guild.iconURL}"
          alt="" class="rounded" width="32px" />
        <strong> RetraDov</strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a target="_blank" href="https://nyobaaa.glitch.me/myApi" class="nav-link"><i class="fab fa-uber"></i> API</a>
          </li>
          <li class="nav-item">
            <a href="/staff" class="nav-link"><i class="fas fa-users"></i>
              Staff Teams</a>
          </li>
          <li class="nav-item">
            <a href="/bots" class="nav-link"><i class="fas fa-robot"></i>
              Bot List (Beta)</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<main>
  
  <div class="container text-center white-text wow fadeInUp">
    <br><br><br>

    <section class="team-section text-center my-5">
      <h3 class="h1-responsive font-weight-bold ">${invitebot.tag}</h3>
      <img src="${invitebot.displayAvatarURL}" class="rounded-circle z-depth-1" alt="Sample avatar" width="128px">
      <br><br>
      <a class="btn btn-outline-white" target="_blank" href="https://discordapp.com/oauth2/authorize?client_id=${invitebot.id}&scope=bot&permissions=0">Invite Me :)</a>
      <br><br><br>
      <p>
        <b>Owner :</b> <br><a class="btn btn-rounded"><img src="${message.author.displayAvatarURL}" class="rounded-circle z-depth-1" alt="own " width="24px" />  ${message.author.tag}</a>
        <br>
        <b>Prefix :</b> <br>${prefix}
        <br>
        <b>Library :</b> <br>${lib}
        <br>
        <b>Accepted :</b> <br>Not Accepted
        <br><br>
    </section>
    <br><br>
  </div>
</main>
  <!--
<footer class="page-footer font-small elegant-color-dark">

  <div class="container">

    <div class="row">

      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

          <a class="" target="_blank" href="https://app.zealcord.xyz/discord">
            <i class="fab fa-discord fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="" target="_blank" href="https://www.youtube.com/c/ZealcordStudio">
            <i class="fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="" target="_blank" href="https://www.instagram.com/zealcord_nation">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="" target="_blank" thref="https://www.facebook.com/zealcord_nation">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="" target="_blank" href="https://github.com/zealcordNation">
            <i class="fab fa-github fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>

    </div>

  </div>-->

  <div class="footer-copyright text-center py-3">© 2019
    <a href="/api/bots"> API | RetraDov</a>
  </div>

</footer>

<script src="https://ajax.cloudflare.com/cdn-cgi/scripts/95c75768/cloudflare-static/rocket-loader.min.js" data-cf-settings="8316295a88a7d6788097ff1b-|49" defer=""></script></html>



`;
      
      //const tokenKu = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
     // const targetLogs = bot.channels.get("625263207790936079");
    const targetLogs = bot.channels.get("571321874798215188");
      const ahg = fs.createWriteStream(`./dataGua/${invitebot.id}.html`);
      const dataFile = fs.createWriteStream(`./databaseBots/${invitebot.id}.json`);
      const dataB = JSON.stringify(dataA,0,2);
      
      ahg.write(gentod, (err) => {
        if (err) {
          console.log(err.message); 
                 } else {
                   console.log(`Data bot with ID : ${invitebot.id} was posted to web`);
                   targetLogs.send(`[POSTED ${new Date()}] Hi ${message.author} your bot information was posted to https://nyobaaa.glitch.me/bots/${invitebot.id}`);
                 }
      });
    
      dataFile.write(dataB, (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log(`Data bot with ID : ${invitebot.id} was created on /app/databaseBots/${invitebot.id}.json`);
          targetLogs.send(`[ADDED ${new Date()}] Bot ID : **${invitebot.id}** was added to database __RetraDov Nation__`);
        };
      });
/*
      fs.writeFile("./bots.json", JSON.stringify(file, 0, 2), err => {
        if (err) console.log(err);
      });
      */

      let inviteEmbed = new RichEmbed()
        .setAuthor(
          `${message.author.username} Bots`,
          message.author.displayAvatarURL
        )
        .setColor("#2c84de")
        .setThumbnail(invitebot.displayAvatarURL)
        .setDescription(
          `Thanks for submitting your Bot. Your Bot'll be **[Invite](https://discordapp.com/oauth2/authorize?client_id=${invitebot.id}&scope=bot&permissions=0)** and **Tested** first,  please patient and read the **Bot Rules** on <#617315303340113951>.`
        )
        .addField("Username", `**${invitebot} | ${invitebot.tag}**`, true)
        .addField("Bot IDs", `**${invitebot.id}**`, true)
        .addField(
          "Developer",
          `**${message.author} | ${message.author.tag}**`,
          true
        )
        .addField("Prefixes", `Use **\`${prefix}\`**`, true)
        .addField("Library", `**\`${lib}\`**`, true)
        .setTimestamp();

      bot.guilds
        .get(config.servers.GuildsID)
        .channels.get(config.servers.BotsID)
        .send(
          `(Developer: ${message.author}) **${invitebot.tag}** has been **__Added__** to **RetraDov Nation** .`
        );

  bot.guilds
        .get(config.servers.GuildsID)
        .channels.get(config.servers.BotsID)
        .send(
          `(Developer : ${message.author}) **Your request invite bot was posted at (https://retradov-helper.glitch.me/api/bots/${invitebot.id}) !**`
        );

      bot.users
        .get(message.author.id)
        .send(
          `Thank You for submitting **${invitebot.tag}**. Firstly, we need to Invite and Test your Bot. And we'll notify you if the Test Progress of your Bot is done!`
        );
     message.channel.send(inviteEmbed);
  });
  
  

   }
  };
