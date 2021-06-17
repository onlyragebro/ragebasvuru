const Discord = require('discord.js');
const ayarlar = require("./ayarlar.json")
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
client.commands = new Discord.Collection();
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.on("ready", async () => {
  client.user.setPresence({ activity: { name: ` Poyraz's Paradise 💜 RAGE`}, status: "online" });
  })


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => console.log(client.user.tag + ' Şu anda hazır!'));

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(`command.error.${command.name.toUpperCase()}:\n` + error.stack);
    }
});
client.login(ayarlar.token).then(()=>{}).then(x => console.log(`${client.user.tag} Giriş yaptı`)).catch(err => console.error(`${client.user.tag} Bot giriş yapamadı Hata ${err}`))