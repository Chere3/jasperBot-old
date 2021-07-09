exports.run = async (client, message, args) => {

  const m = await message.channel.send({embed: {
    color: "RED",
    description: "Midiendo ping..."
  }})

  m.edit({
    embed: {
      color: "PURPLE",
      description: `😳 Discord ping: **${(Math.floor(client.ws.ping))}** milisegundos\n<a:DownAcariciandoPersonaHorny:806611316932476979> Mi ping: **${m.createdTimestamp - message.createdTimestamp}** milisegundos`
    }
  })
};

exports.help = {
  name: "ping",
  description: "Check if the bot was online.",
  usage: "!ping",
  example: "!ping"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = second.
};
