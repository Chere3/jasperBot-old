const Discord = require("discord.js");

exports.run = async (client, message ,args) => {
    if (message.author.id !== "705580144936484915") return;

    const reglas1 = new Discord.MessageEmbed()
    .setTitle("Reglas del servidor 🧐")
    .setDescription("<:espacio:820079692098830347>\n")
    .addField("1- Insultos", "Los insultos están permitidos siempre y cuando no vayan con mala intención o sean demasiado fuertes.", true)
    .addField("2- Gore", " El contenido gore o derivados, esta prohibido en TODOS los chats ponerlo resutará en ban.", true)
    .addField("3- Acoso", "No acosar ni mandar información privada de ningun miembro del servidor", true)
    .addField("4- Walls of text o flood", "No hacer walltext en otro canal que no sea en FLOOD si se llega hacer en otro canal se te dará warn (la repetición de 6 emotes es warn)", true)
    .addField("3- Gustos de los demás", "Respetar los gustos de las demás personas siempre y cuando ellos respeten los tuyos.", true)
    .addField("4- Avisa", "Si ves a alguien incumpliendo las reglas avisa inmediatamente y no te quedes callado, igual si reportas cosas falsas se te sancionará", true)
    .addField("5- Voz","No molestar por canales de voz (errape, musica alta, sonidos feos, o insultos por vc)")
    .addField("6- ")
    .setColor("PURPLE");

    message.channel.send(reglas1);

}

exports.help = {
  name: "rules",
  description: "Comando usado solo una ves para poner las reglas.",
  example: ",rules",
  usage: "rules",
}

exports.conf = {
  aliases: ["reglas"],
  cooldown: 100000,
}