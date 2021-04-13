const peryussDiscord = require("discord.js");
const peryussveri = require("quick.db")
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

  // BELİRLEMELER DOKUNMA

  let peryussyetkili = ayarlar.yetkili;
  let peryusskadın = ayarlar.kadın;
  let peryusskadın2 = ayarlar.kadın2;
  let peryusskayıtsız = ayarlar.kayıtsız;
  let peryusslogkanal = ayarlar.log; 
  let peryusskayıtkanal = ayarlar.kayıtkanal;
  let peryusstoplamstat = peryussveri.fetch(`peryusstoplamstat${message.author.id}`,1) || 0

// Peryuss Was Here xd

  if (!message.member.roles.cache.has(peryussyetkili)) {
message.react(ayarlar.no)
    return message.channel.send(
      new peryussDiscord.MessageEmbed()
        .setColor("RED")

// Peryuss Was Here xd

.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
.setFooter(`Peryuss Was Here xd`)
        .setDescription(`<@` + message.author.id + `> Yetkin Yetersiz.`)
    );
  } else {
    let member =
      message.mentions.users.first() || client.users.cache.get(args[0]);

 let mention = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(mention.roles.cache.has(peryusskadın))
message.react(ayarlar.no)
      return message.channel.send(
        new peryussDiscord.MessageEmbed()
          .setColor("RED")

.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
.setFooter(`Peryuss Was Here xd`)
          .setDescription(
            `<@` + message.author.id + `> Bu Salak Zaten Sunucuda Kayıtlı.`
          )
      );

if (message.channel.id !== peryusskayıtkanal)
message.react(ayarlar.no)
    return message.channel.send(
        new peryussDiscord.MessageEmbed()
          .setColor("RED")
.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
.setFooter(`Peryuss Was Here xd`)
          .setDescription(
            `<@` + message.author.id + `> Burası Kayıt Kanalı Değil.`
          )
      );

    if (!member)
message.react(ayarlar.no)
      return message.channel.send(
        new peryussDiscord.MessageEmbed()
          .setColor("RED")
.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
.setFooter(`Peryuss Was Here xd`)
          .setDescription(
            `<@` + message.author.id + `> Bir Kullanıcı Belirtmelisin.`
          )
      );

    const user = message.guild.member(member);
    const peryussnick = args[1];
    const peryussyas = args[2];
    if (!peryussnick)
message.react(ayarlar.no)
      return message.channel.send(
        new peryussDiscord.MessageEmbed()
          .setColor("RED")
.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )

// Peryuss Was Here xd

.setFooter(`Peryuss Was Here xd`)
          .setDescription(`<@` + message.author.id + `> Bir İsim Belirtmelisin.`)
      );
    if (!peryussyas)
message.react(ayarlar.no)
      return message.channel.send(
        new peryussDiscord.MessageEmbed()
          .setColor("RED")
.setFooter(`Peryuss Was Here xd`)
          .setDescription(`<@` + message.author.id + `> Bir Yaş Belirtmelisin.`)
      );

// TAGLI ALIM

let taglıalım = await peryussveri.get(`taglıalım.${message.guild.id}`)
    if (taglıalım) {
        if (!member.user.username.includes(ayarlar.tag) && !member.roles.cache.has(ayarlar.booster) && !member.roles.cache.has(ayarlar.vip)) {
message.react(ayarlar.no)
            return message.channel.send(
        new peryussDiscord.MessageEmbed()
          .setColor("RED")
.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )

// Peryuss Was Here xd

.setFooter(`Peryuss Was Here xd`)
          .setDescription(`<@` + message.author.id + `> Bu Kullanıcıda Tagımız Yok.`));
        }
    };

    setTimeout(function() {
      user.roles.add(peryusskadın);
    }, 2000);
    setTimeout(function() {
      user.roles.add(peryusskadın2);
    }, 2000);
    setTimeout(function() {
      user.roles.remove(peryusskayıtsız);
    }, 2000);

peryussveri.add(`peryusstoplamstat.${message.author.id}`, 1);
peryussveri.add(`peryusskadınstat.${message.author.id}`, 1)

// Peryuss Was Here xd

    user.setNickname(`${ayarlar.tag} ${peryussnick} | ${peryussyas}`);
message.react(ayarlar.yes)

    const peryusslog = new peryussDiscord.MessageEmbed()
      .setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
      .setThumbnail(member.displayAvatarURL({ dynamic: true }))
      .setDescription(`\n\nKadın Kayıt İşlemi ${message.author} Adlı Yetkili Tarafından Gerçekleştirildi. \n\nYetkili Kişi ${member} Adlı Kullanıcının İsmini \`${ayarlar.tag} ${peryussnick} | ${peryussyas}\` Olarak Ayarlayarak \`${message.guild.roles.cache.get(peryusskadın).name}\` \`${message.guild.roles.cache.get(peryusskadın2).name}\`  Rollerini Verdi ve \`${message.guild.roles.cache.get(peryusskayıtsız).name}\` Rollerini Aldı. \n\nYetkilinin Toplam Kayıtlarını \`${peryusstoplamstat}\` Olarak Belirledim.`)
      .setFooter("Peryuss Was Here xd")
      .setColor("#ee6aa7");

// Peryuss Was Here xd

    message.channel.send(
      new peryussDiscord.MessageEmbed()
        .setColor("#ee6aa7")
        .setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
        .setFooter(`Peryuss Was Here xd`)
        .setDescription(
          `\nKullanıcının İsmini \`${ayarlar.tag} ${peryussnick} | ${peryussyas}\` Yaparak,\n\nKullanıcıya \`${message.guild.roles.cache.get(peryusskadın).name}\` \`${message.guild.roles.cache.get(peryusskadın2).name}\` Rollerini Verdim ve \`${message.guild.roles.cache.get(peryusskayıtsız).name}\` Rollerini Aldım. \n\nToplam Kayıtların \`${peryusstoplamstat}\` Olarak Belirlendi.`
        )
    );
    message.guild.channels.cache.get(peryusslogkanal).send(peryusslog);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: "kadın @etiket"
};











// Peryuss Was Here xd