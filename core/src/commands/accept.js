const CommandCore = require("../../handler/commandcore"),
  fs = require("fs");

const baseURL = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;

module.exports = class AcceptCommand extends CommandCore {
  constructor() {
    super({
      name: "accept",
      description: "Accept the Bot is Testing agree.",
      usage: "accept [@users]",
      cooldown: 5,
      aliases: ["accept", "approve"],
      devOnly: false,
      guildOnly: true,
      nsfw: false,
      clientPermission: ["MANAGE_GUILD"],
      authorPermission: ["MANAGE_GUILD"]
    });
  }

  async execute(client, message, args, thread) {
    const botID = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (!botID) return args.missing(message, "What you're mention **Bots** ?");
    if (botID.user.bot === false)
      return message.channel.send(
        "You're mention is **Users**, Please mentions **Bots**!"
      );

    const { body } = await client.snek.get(
      `${baseURL}/api/bots/${botID.user.id}`
    );

    const bots = JSON.parse(fs.readFileSync("bots.json", "utf8"));

    client.fetchUser(body.botID).then(bot => {
      client.fetchUser(body.ownerID).then(botOwn => {
        bots[bot.id] = {
          ownerID: botOwn.id,
          botID: bot.id,
          prefix: body.prefix,
          accepted: true
        };

        fs.writeFile("./bots.json", JSON.stringify(bots, 0, 2), err =>
          console.error(err)
        );

        const DatabaseBots = {
          ownerID: botOwn.id,
          botID: bot.id,
          prefix: body.prefix,
          accepted: true
        };

        fs.createWriteStream(`./DatabaseBots/${bot.id}.json`).write(
          JSON.stringify(DatabaseBots, 0, 2),
          err => console.error(err)
        );

        const DatabaseWebBots = `
<html lang="en" class="full-height">
  <head>
    <title>Retradov Nation</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Retradov Nation" />
    <meta name="author" content="Retradov Nation" />
    <meta content="#54FCFF" name="theme-color" />
    <meta content="#54FCFF" name="msapplication-navbutton-color" />
    <meta property="og:url" content="https://retradov.glitch.me/bot/${bot.id}" />
    <meta
      property="og:image"
      content="https://cdn.glitch.com/ebf6700b-62eb-45ca-bf40-47d129d0c9d0%2Fretradov.png?v=1574565151883"
    />
    <meta
      property="og:description"
      content="Retradov Nation Official Website."
    />
    <meta property="og:footer" content="• retradov.glitch.me" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="icon"
      href="https://cdn.glitch.com/ebf6700b-62eb-45ca-bf40-47d129d0c9d0%2Fretradov.png?v=1574565151883"
    />
    <link
      rel="shortcut icon"
      type="image/png"
      href="https://cdn.glitch.com/ebf6700b-62eb-45ca-bf40-47d129d0c9d0%2Fretradov.png?v=1574565151883"
    />

    <link
      rel="stylesheet"
      href="/retradov.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.10/css/mdb.min.css"
      rel="stylesheet"
    />

    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.10/js/mdb.min.js"
    ></script>
    <link
      id="avast_os_ext_custom_font"
      href="chrome-extension://eofcbnmajmjmplflapaojjnihcjkigck/common/ui/fonts/fonts.css"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      /* Chart.js */
      @-webkit-keyframes chartjs-render-animation {
        from {
          opacity: 0.99;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes chartjs-render-animation {
        from {
          opacity: 0.99;
        }
        to {
          opacity: 1;
        }
      }
      .chartjs-render-monitor {
        -webkit-animation: chartjs-render-animation 0.001s;
        animation: chartjs-render-animation 0.001s;
      }
    </style>
  </head>

  <body>
    <header>
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src="https://cdn.glitch.com/ebf6700b-62eb-45ca-bf40-47d129d0c9d0%2Fretradov.png?v=1574565151883"
              alt=""
              class="rounded"
              width="32px"
            />
            <strong> Retradov Nation</strong></a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a
                  target="_blank"
                  href="/myAPI"
                  class="nav-link waves-effect waves-light"
                  ><i class="fab fa-uber"></i> API</a
                >
              </li>
              <li class="nav-item">
                <a href="/staff" class="nav-link waves-effect waves-light"
                  ><i class="fas fa-users"></i> Staff Teams</a
                >
              </li>
              <li class="nav-item">
                <a href="/bots" class="nav-link waves-effect waves-light"
                  ><i class="fas fa-robot"></i> Bot List (Beta)</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div class="container text-center white-text wow fadeInUp">
          <br /><br /><br />

          <section class="team-section text-center my-5">
            <h3 class="h1-responsive font-weight-bold ">${bot.username}</h3>
            <img
              src="${bot.avatarURL}"
              class="rounded-circle z-depth-1"
              alt="Sample avatar"
              width="128px"
            />
            <br /><br />
            <a
              class="btn btn-outline-white waves-effect waves-light"
              target="_blank"
              href="https://discordapp.com/oauth2/authorize?client_id=${bot.id}&amp;scope=bot&amp;permissions=0"
              >Invite Me!</a
            >
            <br /><br /><br />
            <p>
              <b>OWNER:</b> <br /><a
                class="btn btn-rounded waves-effect waves-light"
                ><img
                  src="${botOwn.avatarURL}"
                  class="rounded-circle z-depth-1"
                  alt="own "
                  width="24px"
                />
                ${botOwn.tag}</a
              >
              <br /><br />
              <b>PREFIX:</b> <br />${body.prefix} <br /><br />
            </p>
          </section>
          <br /><br />
        </div>
      </main>
      <footer class="page-footer font-small elegant-color-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-5">
              <div class="mb-5 flex-center">
                <a
                  class=""
                  target="_blank"
                  href="/discord"
                >
                  <i class="fab fa-discord fa-lg white-text mr-md-5 mr-3 fa-2x">
                  </i>
                </a>
                <a
                  class=""
                  target="_blank"
                  href="https://www.youtube.com/channel/UCHTBvF5HHHsF3_Rqf8qO_OQ"
                >
                  <i class="fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x">
                  </i>
                </a>
                <a
                  class=""
                  target="_blank"
                  href="https://www.instagram.com/retradov_nation"
                >
                  <i
                    class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"
                  >
                  </i>
                </a>
                <a
                  class=""
                  target="_blank"
                  href="https://github.com/retradovNation"
                >
                  <i class="fab fa-github fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2019 <a href="/myApi"> Retradov Development</a>
        </div>
      </footer>
    </header>
    <div class="hiddendiv common"></div>
  </body>
</html>
`;
        fs.createWriteStream(`./DatabaseWebBots/${bot.id}.html`).write(
          DatabaseWebBots,
          err => console.error(err)
        );

        if (message.guild.id === "648792266697080853") {
          message.guild.members.get(bot.id).removeRole("650508924625354772");
          message.guild.members.get(bot.id).addRole("650508504150573070");
          message.guild.members.get(bot.id).setNickname(`${body.prefix} | ${bot.username}`);
        }

        message.channel.send(`
✅ Successfully **\`APPROVED\` ${bot.tag}**, Check <#647597431357177921> for more details.
`);

        client.guilds
          .get("647582209699741709")
          .channels.get("647597431357177921")
          .send(
            `(Owner: **${botOwn || botOwn.tag}**) **${bot.tag}** has been __**APPROVED**__ by **${message.author.tag}**.`
          );

        client.users
          .get(botOwn.id)
          .send(
            `Hi <@${botOwn.id}>, You're Bots **${bot.tag}** has been __**APPROVED**__ by **${message.author.tag}** on **Retradov Nation**.`
          );
      });
    });
  }
};
