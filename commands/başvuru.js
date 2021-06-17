const Discord = require('discord.js');
const moment = require('moment');
const ayar = require("../config.json");
const ms = require('ms')
module.exports = {
    name: 'başvuru',
    description: 'Başvuru yapmanızı sağlar.',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client 
     */
async execute(message, args, client) { 
  if([ayar.cezali].some(role => message.member.roles.cache.get(role))) return message.react('❌')
  let rage = new Discord.MessageEmbed().setColor('#550607').setFooter().setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
  if(!message.guild.id == ayar.sunucu) return message.reply("Bu sunucuda kullanamazsın!")
  if(message.channel.id == ayar.basvuruKanal){
  var filter = m => m.author.id === message.author.id;
message.react('<a:tikmor:841741186724659242>');
let modRole = message.guild.roles.cache.find(r => r.id === ayar.yetkili);
if (!modRole) {
    throw new Error('cmd.errors.NEW: Yetkili rolü bulunamadı!');
}
message.guild.channels.create(`${message.author.username} - ${message.author.discriminator}`, {
topic: message.author.id,
type: 'text',
permissionOverwrites: [
    { id: message.guild.id, deny: ['VIEW_CHANNEL'] },
    { id: modRole.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
    { id: message.author.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }]}).then(c=>
c.send(`**${message.author} Hoşgeldin! Bizi desteklediğin için öncelikle teşekkürler! Bir kaç sorum olacak. Öncelikle isim ve yaş alabilir miyim?**`).then(msg => {
c.awaitMessages(filter, { max: 1,  time: 60000,  errors: ['time']}).then(collected => {
  //------------------------------------Kanal------------------------------------\\
let room = client.channels.cache.get(ayar.basvuruLog)
if(!room) return message.channel.send('<a:60s2:850814454375120906> | **Böyle bir kanal bulamadım**');
room = collected.first().content;
//------------------------------------Soru1------------------------------------\\
let soru1 = collected.first().content;
collected.first();
c.send('** 1. Sorunuz**').then(msg => {
c.awaitMessages(filter, {max: 1, time: 60000, errors: ['time']}).then(collected => {
//------------------------------------Soru2------------------------------------\\
let soru2 = collected.first().content
collected.first()
c.send('** 1. Sorunuz**').then(msg => {
c.awaitMessages(filter, { max: 1, time: 60000, errors: ['time']}).then(collected => {
//------------------------------------Soru3------------------------------------\\
let soru3 = collected.first().content
collected.first()
c.send('** 1. Sorunuz**').then(msg => {
c.awaitMessages(filter, { max: 1, time: 60000, errors: ['time']}).then(collected => {
//------------------------------------Soru4------------------------------------\\
let soru4 = collected.first().content
collected.first()
c.send('** 1. Sorunuz**').then(msg => {
c.awaitMessages(filter, { max: 1, time: 60000, errors: ['time']}).then(collected => {
//------------------------------------Soru5------------------------------------\\
let soru5 = collected.first().content
collected.first()
c.send('** 1. Sorunuz**').then(msg => {
c.awaitMessages(filter, { max: 1, time: 60000, errors: ['time']}).then(collected => {
//------------------------------------Soru6------------------------------------\\
let soru6 = collected.first().content
collected.first()
c.send('** 1. Sorunuz**').then(msg => {
c.awaitMessages(filter, { max: 1, time: 60000, errors: ['time']}).then(collected => {
//-----------------------------Başvuru Bitiş Mesajı-----------------------------\\
  let soru7 = collected.first().content;
  title = collected.first().content;
  collected.first()
  c.send(`**Bizi desteklediğin için teşşekkür ederiz! Başvurun birazdan cevaplanacaktır lütfen bekle... **`)
  c.send(`<@&${ayar.yetkili}>`)
  c.send(rage.setDescription(`
  **Bu kişiyi ne yapmak istiyorsun?**
  • ${ayar.prefix}onayla
  • ${ayar.prefix}bekleme
  • ${ayar.prefix}reddet
  • ${ayar.prefix}cezalı
  `))
message.author.send(rage.setDescription(`**Başvurunuz alınmıştır. En kısa zamanda dönülecek! <a:3yesilyldz:845626073684115466>**`)).catch(e => { })
  //------------------------------Log Kanal Mesajı------------------------------\\
  
let giveEmbed = rage.setTitle(`Yeni Bir Başvuru`)
.setDescription(`
**soru1:**\n${soru1}
**soru2**\n ${soru2}
**soru3:**\n ${soru3}
**soru4:**\n${soru4}
**soru5:**\n${soru5}
**soru6:** \n(${soru6})
**soru7:**\n${soru7} 
────────────────────────
**__Kişinin bilgileri;__**

**ID:** ${message.author.id}
**Kişi:** ${message.author.tag}
**Etiketli hali:** <@${message.author.id}>`);
client.channels.cache.get(ayar.basvuruLog).send(giveEmbed)
client.channels.cache.get(ayar.basvuruLog).send(`<@${message.author.id}>'isimli üyenin Başvurusu`)                   
{
let memberr = message.member.id;
c.createOverwrite(memberr, { VIEW_CHANNEL: false, SEND_MESSAGES: false})}
//1800000);
});
});
});
});
});
});
});
});
});
})
})
})
})
})
)}else{
       return message.reply(`Bu komut yalnızca <#${ayar.basvuruKanal}> kanalında çalışmaktadır.`)
}}}