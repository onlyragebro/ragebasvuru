const { MessageEmbed } = require('discord.js');
const { yetkili, cezali, onaylog } = require('../config.json');
module.exports = {
    name: 'cezalı',
    description: 'Başvuruyu cezalı yapmanıza yarar ',
        /**
         * @param {Discord.Message} message
         * @param {Discord.Client} client 
         */
    async execute(message, args, client) {
        if(!message.member.roles.cache.get(yetkili)) return message.react('❌');
        const member = message.guild.members.cache.get(args[0] || message.channel.topic);
        if(!member) return message.reply(`Kişinin ID'sini belirtmeyi unuttunuz!`).then(msg => msg.delete({ timeout: 5000 }));
        member.roles.add([cezali]); 
        member.send(new MessageEmbed().setColor('#550607').setDescription(`Başvurun maalesef cezalıya atılmıştır! Sunucu kurallarına uymadın veya 1 den fazla başvuru yaptın. 
        Desteklerin için teşekkürler!`)).catch(e => { });

        message.channel.send(`<a:10sec:850816334886600774> | Başvuruyu başarıyla onayladınız ve roller verildi. Kanal 10 saniye içerisinde silinecektir. Görüşmek üzere.`)
        if (message.channel.deletable)                
        setTimeout(() => {
            return message.channel.delete().catch(err => console.log(err));
        }, 10000);
        const channel = client.channels.cache.get(onaylog);
        client.channels.cache.get(onaylog).send(`${member}`)
        if (channel) channel.send(new MessageEmbed().setColor('#550607').setDescription(`**${member} 'in başvurusu ${message.author} tarafından cezalandırıldı ve <@&${cezali}> rolleri verildi!**`));
    }
}