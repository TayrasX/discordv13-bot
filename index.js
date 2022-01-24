const express = require("express");
const app = express()

app.listen(3000, () => {
  console.log("Tutorial bot is online!")
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const Discord = require("discord.js")

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === "ping") {
    message.reply("pong!")
  }
})

client.login(process.env.token);
