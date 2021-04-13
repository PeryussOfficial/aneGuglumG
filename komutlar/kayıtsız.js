const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  let kayıtsız = ayarlar.kayıtsız;
  let peryussyetkili = ayarlar.yetkili;

  if (!message.member.roles.cache.has(peryussyetkili)) {
message.react(ayarlar.no)
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
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!member)
message.react(ayarlar.no)
    return message.channel.send(`Kimi Kayıtsız Yapacağım?`);
  const peryuss = new Discord.MessageEmbed()
    .setTitle(`Başarılı!`)
    .setDescription(
      `${member} Adlı Kullanıcıyı Başarılı Bir Şekilde <@&${kayıtsız}> Olarak Ayarladım.`
    );
  message.channel.send(peryuss);
message.react(ayarlar.yes)
  member.roles.set(['822530384319086602'])
};
exports.conf = {
  aliases: []
};
exports.help = {
  name: "kayıtsız"
};
