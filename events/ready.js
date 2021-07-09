const no = "819807831679172668"
const discord = require("discord.js");
const { version } = require("../package.json")

module.exports = async (client) => {
  console.log(`${client.user.username} esta listo`);

  const log = new discord.MessageEmbed()
  .setTitle("Status")
  .setColor("ORANGE")
  .setDescription(`He sido encendido/reiniciado!`)
  .addField(`El modulo de rich presence se esta encendiendo..`, ".")
  .setTimestamp();

  const m = await client.channels.cache.get(no).send(log);

  let prefix = client.config.prefix;


  const loaded = new discord.MessageEmbed()
  .setTitle("Status")
  .setColor("PURPLE")
  .setDescription(`He sido encendido/reiniciado!`)
  .addField(`Modulos:`, "```yaml\nModulo de rich presence: Cargado correctamente\nModulo de comandos: Cargado correctamente```")
  .setTimestamp();

  const rpcerror = new discord.MessageEmbed()
  .setTitle("Status")
  .setColor("RED")
  .setDescription(`Ha ocurrido un error mientras se cargaba la rpc. Intenta de nuevo más tarde`)

  let currentActivity = 0;
    let maxActivity = 1;

    setInterval(async () => {
        currentActivity++;
        if (currentActivity > maxActivity) {
            currentActivity = 0
        };
        switch (currentActivity) {
            case 0:
                client.user.setActivity(`Canal de JasperDev | Alpha ${version}`, {
                    type: "WATCHING"
                })
                break;
            case 1:
                client.user.setActivity(`Vigilando ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} mapaches | Alpha ${version} `, {
                    type: "WATCHING"
                }).catch(() => {
                  return m.edit(rpcerror)
                })
                break;
        };
    }, 10000)

    await m.edit(loaded)




  
}
