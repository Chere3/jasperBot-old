const Discord = require("discord.js");
const tutorialBot = require("./handler/Client.js");
const client = new tutorialBot();

require("./handler/Module.js")(client);
require("./handler/Event.js")(client);
require('dotenv').config();


client.on("warn", console.warn); 
client.on("error", console.error); 
client.login(process.env.SECRET).catch(console.error); 
