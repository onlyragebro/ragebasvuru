 const { MessageEmbed } = require('discord.js');
const { yetkili, yetki1, onaylog } = require('../config.json');
module.exports = {
    name: 'onayla',
    description: 'Başvuruyu onaylamanıza yarar ',
    async execute(message, args, client) {
        if(!message.member.roles.cache.get(yetkili)) return message.react('❌');
        const member = message.guild.members.cache.get(args[0] || message.channel.topic);
        if(!member) return message.reply(`Kişinin ID'sini belirtmeyi unuttunuz!`).then(msg => msg.delete({ timeout: 5000 }));
        member.roles.add([yetki1]); 
        member.send(new MessageEmbed().setColor('#550607').setDescription(`**Başvurun onaylandıı! <a:tadaa:845826682047692840> Desteklerin için teşekkürler artık sende ekibimizin bir üyesisin! <a:mevlananime:846408080899571772>**`)
         .addField(`Müsait isen sesliye girmen gerek.`, `[Tıkla!](https://discord.gg/78Bd6jNsNB)`)).catch(e => { });
        message.channel.send(`<a:10sec:850816334886600774> | Başvuruyu başarıyla onayladınız ve roller verildi. Kanal 10 saniye içerisinde silinecektir. Görüşmek üzere.`)
        const channel = client.channels.cache.get(onaylog);
        client.channels.cache.get(onaylog).send(`${member}`)
        if (channel) channel.send(new MessageEmbed().setColor('#550607').setDescription(`${member}**'in başvurusu ${message.author} tarafından uygun görüldü ve onayladı! **`));
    }
}