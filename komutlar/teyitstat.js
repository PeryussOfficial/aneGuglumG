const Discord = require(`discord.js`);
const db = require(`quick.db`);
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

let peryussyetkili = ayarlar.yetkili

  if (!message.member.roles.cache.has(peryussyetkili)) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")

// Peryuss Was Here xd

.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
.setFooter(`Peryuss Was Here xd`)
        .setDescription(`<@` + message.author.id + `> Yetkin Yetersiz.`)
    );
  }

  let kişi = message.mentions.users.first();
  if (!args[0]) {
    const erkekbilgi = await db.fetch(
      `peryusserkekstat${message.author.id}.${message.guild.id}`
    );
    const kızbilgi = await db.fetch(
      `peryusskadınstat${message.author.id}.${message.guild.id}`
    );
    const peryuss1 = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
      .setFooter(`Peryuss Was Here xd`)
      .setDescription(`
    \n\`>\` Toplam \`${erkekbilgi ? erkekbilgi : "0"}\` Erkek Kayıtı Bulunuyor.
    \`>\` Toplam \`${kızbilgi ? kızbilgi : "0"}\` Kız Kayıtı Bulunuyor.`);
    message.channel.send(peryuss1);
  }
  if (kişi) {
    const erkekbilgi = await db.fetch(
      `erkekistatistik${kişi.id}.${message.guild.id}`
    );
    const kızbilgi = await db.fetch(
      `kızistatistik${kişi.id}.${message.guild.id}`
    );
    const peryuss2 = new Discord.MessageEmbed()
      .setAuthor(kişi.username, kişi.avatarURL())
      .setFooter(`Peryuss Was Here xd`)
      .setColor("GREEN")
      .setDescription(`
    \n\`>\` Toplam \`${erkekbilgi ? erkekbilgi : "0"}\` Erkek Kayıtı Bulunuyor.
    \`>\` Toplam \`${kızbilgi ? kızbilgi : "0"}\` Kız Kayıtı Bulunuyor.
`);
    message.channel.send(peryuss2);
  }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["teyitbilgi", "teyit-bilgi", "kayıt-bilgi", "teyitbilgim", "teyit*bilgim"],
  permLevel: 0
};
exports.help = {
  name: "kayıtbilgi"
};
