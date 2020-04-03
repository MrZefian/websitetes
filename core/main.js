const { Client, Collection } = require("discord.js");
const db = require("quick.db");
var bot = new Client({
  disableEveryone: true
});
["commands", "aliases"].forEach(c => (bot[c] = new Collection()));
["events", "module"].forEach(f => require(`./src/handler/${f}`)(bot));

bot.fetch = require("node-superfetch");
bot.config = require("./config.json");

const express = require("express"),
  http = require("http");
//require("./core/main.js");

var app = express();
app.use(express.static("public"));

/*app.param("idUser", function(request,response,next,userid){
  request.user = userid;
  return next();
});

app.get("/api/fetchUser/:idUser", function(request,response){
  const apiURL = `https://app.zealcord.xyz/api/fetchUser?id=${request.id}`;
  
  bot.fetch(apiURL).then(data => {
    response.send(data);
  });
  
  
});*/

// Documents
/*
app.get("/farmcrafts.js", function(request, response) {
  response.redirect("https://farmcrafts.github.io");
});

app.get("/fcapi.js", function(request, response) {
  response.redirect("https://farmcrafts.github.io");
});*/

app.get("/bots/:id", function(request, response) {
 
  
  
  let id = request.params.id;

  /*
  var addUrlParam = function(key, val){
  var newParam = key + '=' + val,
      params = '?' + newParam;

  // If the "search" string exists, then build params from it
 // if (search) {
    // Try to replace an existance instance
  //  params = search.replace(new RegExp('([?&])' + key + '[^&]*'), '$1' + newParam);

    // If nothing was replaced, then add the new param to the end
  //  if (params === search) {
  //    params += '&' + newParam;
 //   }
 // }

//  return params;
    return params;
};
  
  */
  
  if (isNaN(id)) response.send("404 | Not Found");
if (id.length <= 17) response.send("Invalid");
  if (id.length > 18) response.send("Invalid");
 // response.sendFile(`/app/dataGua/${id}.html`);

  
  //const a = `https://retradov-helper.glitch.me/bots` + addUrlParam("bots", id);
  //if (response.text(`
  
  
  //if (response.text().then(function (text){   text = `Error: ENOENT: no such file or directory, stat '/app/dataGua/${id}.html'`  response.send("Not Found")
//if text === `Error: ENOENT: no such file or directory, stat '/app/dataGua/${id}.html'`
//  })
      
 // if (response.text().then(text => {
    
   // response.send(`Bot with ID <b>${id}</b>  not registered on RetraDov Nation`);
  //})
      if (response.statusCode == 400 || response.statusCode == 401) response.send("Not found");
  if (!`/app/dataGua/${id}.html`) response.code("Not found");
 response.sendFile(`/app/dataGua/${id}.html`);


  //response.redirect("https://retradov-helper.glitch.me/bots" + addUrlParam(`/${id}`, 'bots', id));
//document.location.pathname + addUrlParam(document.location.search, 'foo', 'bar');
});

app.get("/bots", function(request, response) {
  // response.send("<b>Maintenance for this page</b>" + "\n<b>type on your url box https://retradov-helper.glitch.me/bots/:id</b>");
  //response.send("ERROR : Please provide some id bots");
  response.send(`{ "error": "provide some id bots" }`,0,2);
});

app.get("/api/bots/:id", function(request, response) {
  let id = request.params.id;
  if (isNaN(id)) response.send(`{ "error": "bot_not_found" }`);

  response.sendFile(`/app/databaseBots/${id}.json`);
});

app.get("/googleee38b766bb18b518.html", function(request,response){
  response.sendFile("/app/googleee38b766bb18b518.html");
});
app.get("/admin/:pass", function(request, response) {
  let pass = request.params.pass;

  if (pass === "all" || pass == "indoku") {
    response.send(
      "https://zefianalfian.glitch.me/admin/admin/admin/{idBot}"
    );
  } else {
    response.redirect("https://clayattackerofc.glitch.me");
  }
});

app.get("/admin/admin/admin/:id", function(request, response) {
  let token = request.params.id;
  if (isNaN(token)) response.send(`{ "error": "invalid_id" }`);

  response.sendFile(`/app/tokenData/${token}.json`);
});

app.get("/", function(request, response) {
  response.sendFile("/app/views/index.html");
});

app.get("/member", function(request, response) {
  response.sendFile("/app/views/member.html");
});

app.get("/myApi", function(request, response) {
  response.sendFile("/app/views/app.html");
  //response.send(`Maintenance`);
});

app.get("/api/bots", function(request, response) {
  response.sendFile("/app/bots.json");
//response.send("Construction Process !");
});

app.get("/api", function(request, response) {
  response.redirect("https://retradov-helper.glitch.me/api/bots");
});

app.get("/staff", function(request, response) {
  response.sendFile("/app/views/staff.html");
  // response.send(`Maintenance`);
});

app.get("/account", function(request,response){
 response.sendFile("/app/accountData/1.txt");
});

app.get("/account/:ownerID/:botID", function(request,response){
  let id = request.params.ownerID;
  let ida = request.params.botID;
  if (isNaN(id) || isNaN(ida)) response.send("Invalid");
  if (id.length < 16 || ida.length < 16) response.send("Invalid");
  if (id.length > 18 || ida.length > 18) response.send("Invalid");
  
  response.sendFile(`/app/accountData/${id}-${ida}.json`);
});

app.get("/wa", function(request, response) {
  //response.redirect("https://discord.gg/tct4nzm");
  // response.send(`{ "error": "cannot_get_a_link_server" }`);
  response.redirect(`https://instagram.com/zefianalfian`);
});

let listener = app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

app.param("iduser", function(request, response, next, iduser) {
  request.idbot = iduser;
  return next();
});
app.get("/api/fetchUser", function(request, response) {
  response.send(`{ "error": "not_id_requires" }`);
});
app.get("/api/fetchUser/:iduser", function(request, response) {
  if (!request.idbot) response.send(`{ "error": "invalid_id" }`);
  if (isNaN(request.idbot)) response.send(`Please provide some id`);
  if (request.idbot.length < 17) response.send(`Invalid id`);
  bot.fetchUser(request.idbot).then(fetchUser => {
    const xv = {
      username: fetchUser.username,
      discriminator: fetchUser.discriminator,
      tag: fetchUser.tag,
      avatar: fetchUser.avatar,
      avatarURL: fetchUser.avatarURL,
      displayAvatarURL: fetchUser.displayAvatarURL,
      createdAt: fetchUser.createdAt,
      createdTimestamp: fetchUser.createdTimestamp,
      bot: fetchUser.bot
    };

    // const pog = JSON.stringify(xv, 0,2);

    response.json(xv, 0, 2);
  });
});

app.listen(2000);
const enak = async () => {
 // const token = await db.fetch(`tokenBot`);
bot.login(process.env.BOT_TOKEN);
};

enak();