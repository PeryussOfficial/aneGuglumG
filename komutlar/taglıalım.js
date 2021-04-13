const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
const ayar = require("../ayarlar.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {

if (message.author.id !== ayar.sahip)

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
  
  
    let embed = new MessageEmbed().setColor('RANDOM').setFooter('Peryuss was here xd')
    let data = await db.get(`taglıalım.${message.guild.id}`)

    if (args[0] === "aç") {
        if (data) return message.channel.send(embed.setDescription(`${message.author}, Taglı alım modu zaten aktif.`))
        db.set(`taglıalım.${message.guild.id}`, 'acik')
        message.channel.send(embed.setDescription(`${message.author}, Taglı alım modu başarıyla aktif edildi.`))
    }
    if (args[0] === "kapat") {
        if (!data) return message.channel.send(embed.setDescription(`${message.author}, Taglı alım modu zaten kapalı.`))
        db.delete(`taglıalım.${message.guild.id}`)
        message.channel.send(embed.setDescription(`${message.author}, Taglı alım modu başarıyla kapatıldı.`))
    }
    if (!args[0]) {
        message.channel.send(embed.setDescription(`${message.author} Hatalı kullanım: \`.taglıalım aç/kapat\``))
    }


}
exports.conf = {
  aliases: ["taglı-alım"]
};
exports.help = {
  name: "taglıalım"
};