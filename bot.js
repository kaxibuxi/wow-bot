const Discord = require('discord.js');
const client = new Discord.Client();
require('./util/eventloader')(client);
const servers={

}
let prefix = "wow "
let yapimciid = "791977957010702367"
let yapimcinick = "developer kedy"
let yapımcıtag = "developer kedy#9372"

//EĞLENCE KISMI
client.on('message', msg => {
  if (msg.content === prefix +'avatar') {
    msg.channel.send({embed: {
      color: 0x0,
      image: {
        url: msg.author.displayAvatarURL()
    }}});
  };
});
client.on('message', msg => {
  if (msg.content === prefix +'botavatar') {
    msg.channel.send({embed: {
      color: 0x0,
      image: {
        url: "https://cdn.discordapp.com/avatars/791977957010702367/802cd9bde5db65319cf287d8cf5ce04e.png?size=128"
    }}});
  };
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'kapak') {
    msg.delete()
    msg.channel.send('<:kapakk:796809495355326474>')
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'dogedance') {
    msg.delete()
    msg.channel.send('<a:congadogeParrot:800041404298428446><a:congadogeParrot:800041404298428446><a:congadogeParrot:800041404298428446>')
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'dogebread') {
    msg.delete()
    msg.channel.send('<:doge_twinkie1:800042400239845429><:doge_twinkie2:800042475687116860><:doge_twinkie3:800042581034664006>')
  }
});
//sa as
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.react("🇦")
    msg.react("🇸")
    msg.react("🇪")
    msg.react("🇭")
    msg.react("🇬")
    
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.react("🇦")
    msg.react("🇸")
    msg.react("🇭")
    msg.react("🇬")
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.react("🇦")
    msg.react("🇸")
    msg.react("🇭")
    msg.react("🇬")
  }
});
//oylama
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'oylama') {
    msg.react("⬆️")
    msg.react("⬇️")
  }
});
//KULLANICI İŞLEMLERİ
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'id') {
    msg.channel.send(msg.author.id)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'nick') {
    msg.channel.send(msg.author.username)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'username') {
    msg.channel.send(msg.author.username)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'kullanıcıadı') {
    msg.channel.send(msg.author.username)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'tag') {
    msg.channel.send(msg.author.tag)
  }
});
//sunucu. wow.
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'server') {
    msg.channel.send(`${client.guilds.cache.size} sunucuda yer alıyorum. wow.`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'sunucu') {
    msg.channel.send(`${client.guilds.cache.size} sunucuda yer alıyorum. wow.`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'sil') {
    msg.channel.send('20 mesaj mesaj uazaya yollandı!')
    msg.delete()
    msg.channel.bulkDelete(20)
    msg.edit(`20 mesaj mesaj uazaya yollandı! wow.`);
  }
});
//DAVET
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'davet') {
    msg.reply({embed: {
      color: 0x0,
      title: "davet linki",
      url: "https://discord.com/oauth2/authorize?client_id=791977957010702367&scope=bot&permissions=8",
      description: `**beni gerçekten de davet mi ediyorsun. wow.**.`,
  }});
}});
//YARDIM
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix +'yardım') {
    msg.reply({embed: {
      color: 0x0,
      title: `**${msg.author.username}**'e özel Yardım menüsü`,
      url: "",
      description: `> **Kullanıcı işlemleri**\n${prefix}id\n${prefix}nick-${prefix}kullanıcıadı\n${prefix}tag\n\n> **Eğlence Komutları**\n${prefix}bilmece\n${prefix}pp\n${prefix}zar\n${prefix}avatar\n${prefix}botavatar\n${prefix}dogedance\n${prefix}dogebread\n${prefix}oylama\n\n`,
  }});
}});
//RANDOM KISMI
client.on ('message', msg => {
  if (msg.content === prefix +'yazıtura') {
    msg.reply(
      "Para havada dönüyor. <a:coinspin:796368476826238976>"
      )
      .then(message => {
        var espriler = [
          "yazı",
"tura"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit(`${espri}`);
              });
}});

client.on ('message', msg => {
  if (msg.content === prefix +'bilmece') {
    msg.reply(
      "çok gizli bilmece arşivinden bilmecelri çalıyorum."
      )
      .then(message => {
        var espriler = [
          "Tuvaletteki 10’a ne denir?\n||SİFON||",
"En güzel yemek yapan Ceren hangisidir?\n||TENCEREN||",
"İshal olmuş böceğe ne denir?\n||CIRCIR BÖCEĞİ||",
"Bacaktaki 10’a ne denir?\n||PANTOLON||",
"Türkiye’nin en yeni şehri hangisidir?\n||NEVŞEHİR||",
"Yıkanan ton balığına ne denir?\n||WASHINGTON||",
"Baykuşlar vedalaşırken ne der?\n||BAY BAY KUŞ||",
"Yemeğin suyuna kim bandı?\n||KOLİ BANDI||",
"Bebeğe patik giydirmeye çalışmışlar ama giymemiş neden?\n||BEBEK ANTİPATİKMİŞ||",
"Gülen ördeğe ne denir?\n||KIKIRDUCK||",
"Örümcek adam ağ atamıyormuş neden?\n||AĞ BAĞLANTISI KOPMUŞ||",
"Siviller hangi dili konuşur?\n||SİVİLCE||",
"En değerli meşe hangisidir?\n||İZZET ALTINMEŞE||",
"Küçük su birikintisine ne denir?\n||SUCUK||",
"Hiç bozuk paran var mı?\n||YOK HEPSİNİ TAMİR ETTİRDİM||",
"Aya ilk bayrağı kim dikmiştir?\n||TERZİ||",
"İneklerin sevmediği element?\n||AZOT||",
"Kırmızı giyen erkeğe ne denir?\n||ALBAY||",
"En çok eşek yavrusu nerde bulunur?\n||SPA MERKEZİNDE||",
"Pişmemiş burgere ne denir?||HAMBURGER||",
"Dört tarafı suyla çevrili çaya ne denir?\n||ADAÇAYI||",
"Bir kırkayak için en zor iş nedir?\n||AYAKKABI GİYMEK||",
"Takım elbise giyen ata ne denir?",
"Karlı bir günde dışarı çıkan adama ne denir?\n||KARABASAN||",
"Öğretmenler ne zaman gözlük takma gereği duyarlar?\n||ÖĞRENCİLERİ ÇALIŞKANLIKLARIYLA GÖZ KAMAŞTIRDIĞI ZAMAN||",
"Doktorlar hangi ameliyatı yaparken gözleri sulanır?\n||OMRİLİK SOĞANI AMELİYATI||",
"Elma bıçağa ne demiş?\n||NE OLUR BENİ SOYMA||",
"En kolay para kazanılan meslek?\n||PİLOT||",
"Temel her şimşek çaktığında saçını düzeltiyormuş neden?\n||FOTOĞRAF ÇEKİLİYUR ZANNETMİŞ||",
"Suda çok kalan kurbağa ne olur?\n||ROMANT||",
"Hangi eda ile temizlik yapılır?\n||VİLEDA||",
"Metal mıknatısa ne demiş?\n||ÇOK ÇEKİÇSİN||",
"Adamın biri gelene geçene su atıyormuş, neden?\n||ADAMIN ADI SUAT'MIŞ||",
"Bir çocuk derste sıranın üstünde uyumuş, sıra kırılmış. Neden?\n||ÇÜNKÜ ÇOCUK ÇOK AĞIR BAŞLIYMIŞ||",
"Bir erkek için traş ne zaman şart olur?\n||TERS OKUMDUĞU ZAMAN||",
"Ağır suya ne denir?\n||BUZ||",
"Bir kadın bir apartmanın 25. katında cam siliyormuş, aşağı düşmüş, neden ölmemiş?\n||ÇÜNKÜ CAMI İÇERİDEN SİLİYORMUŞ||",
"Su yutmuş toprağa ne denir?\n ||ÇAMUR||",
"En çok kardeşi olan meyve?\n||ÜZÜM||",
"Efe’nin selamı var. Hangi Efe?\n||KÜNEFE||",
"Kızlar tuvaletine bir erkek girerse ne olur?\n||AYIP OLUR||",
"Etli makarnanın kısaltması nedir?\n||M@K@RN@||",
"Hangi leğene su dolmaz?\n||FESLEĞEN||",
"Sana Beşir’in selamı var. Hangi Beşir?\n||TEBEŞİR||",
"Yumurta derede karşıdan karşıya nasıl geçer?\n||TAVUĞUN İÇİMDE||",
"Hangi gemi yüzmez?\n||UZAY GEMİSİ||",
"Suda yaşayan balık ne için ölür?\n||YAŞLANDIĞI İÇİN||",
"Hangi saatte çay içilmez?\n||DUVAR SAATİNDE||",
"Kuş konmayan kafese ne denir?\n||GÖĞÜS KAFESİ||",
"Tomi’nin annesine ne denir?\n||ANATOMİ||",
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit(`${espri}`);
              });
}});
client.on ('message', msg => {
  if (msg.content === prefix +'zar') {
    msg.reply(
      "Zarı attım 🎲"
      )
      .then(message => {
        var espriler = [
          "🎲 1",
"🎲 2",
"🎲 3",
"🎲 4",
"🎲 5",
"🎲 6",
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit(`${espri}`);
              });
}});

client.on ('message', msg => {
  if (msg.content === prefix +'pp') {
    msg.reply(
      "pp arşivinden ppler çalınıyor..."
      )
      .then(message => {
        var espriler = [
          "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/135307089_520877042167357_3748814106345357289_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=WRHDF6FQdAIAX_8j0Vg&tp=1&oh=14afbdfe027e39bf8d641ae381d16c34&oe=60206870",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/136413686_409176223746656_7069636919917065511_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=nGiOSq9fk1cAX83x5U3&tp=1&oh=ba2155a4677bedee018ccaaf17a6b20d&oe=6020274D",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/135266590_168012441775284_7161793881000739588_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=nJaTYM4l1fcAX_tkLGY&tp=1&oh=9bdc8755cf3c2baa4be5ae7b6aab2fc2&oe=601F4106",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/135609732_969842530089354_6006221005094137181_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=eN57HKA2imwAX_CCaEz&tp=1&oh=3990cc7273725e06092bf144962e021d&oe=601F12BD",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/c92.0.879.879a/s320x320/133690207_599681724174042_3240169058406784984_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uLCauKTVqIAAX_goMY0&tp=1&oh=c4b271881dc04c127612f697ad06bc51&oe=6022498E",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/c70.0.940.940a/s320x320/133871688_400524464357569_2453936069764248199_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=k6GI9j02HuMAX8cGuir&tp=1&oh=067b321df76cad50ddb49b5a021e71fe&oe=601E86F5",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c2.0.715.715a/s640x640/133921054_431170731594320_3670044841825569876_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=EvLRnWaFuyoAX-uKXcF&tp=1&oh=69f169353dc8769e987d13be18a4b3de&oe=601FAA1E",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/133360897_231932015212938_1007948750046468598_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ASsvVqxoTKgAX_ZKhR6&tp=1&oh=9be4cbbe396769aff5a9a482d556f612&oe=6020F8EE",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.38.1080.1080a/s480x480/132744173_447319752945163_3087455942014906183_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=nBscW3-mi1EAX_-x9lk&tp=1&oh=e9d279f22dd4222139a404637b1f14a9&oe=602161BC",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/131980606_759120551404901_5828291395636701346_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MguFOxiZQ94AX_x5rbW&tp=1&oh=fadcdbfe6184d00f0c169c27b13a2b89&oe=601FBAF5",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/131986663_449892226025085_9212771005308946304_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=8EriMeWF7YsAX8kIVIP&tp=1&oh=6c3fd1105a29c5fb75bef78ba6d87ef3&oe=601FF380",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/131509595_206090581183097_2762745730916140518_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=65HQEQFEsTwAX8kFsIc&tn=0CJNlU6D2g09dp6G&tp=1&oh=01763be68168f63e080eb339edff432a&oe=601F5311",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/131350839_831970760982351_3983233757439669190_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Y0xoMUbOfGUAX9qdYcT&tp=1&oh=cdf6c0a6be433a6e8d2dfffda89ca78a&oe=601F81A9",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131922783_188421256292857_7093756934363325139_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=KEM2lHlNtREAX__zRrS&tp=1&oh=231356519d22a094d7218946781729ea&oe=6020268F",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/c75.0.930.930a/s240x240/130877727_196074495471202_3122811276635845093_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=bsWof8aNuuEAX9w5Sys&tp=1&oh=c74abb2e2b54d183a66feca3b3284a43&oe=6021943F",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130860179_545789349660377_4241044900201190725_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fS1Ya2oNFMQAX_-GPH-&tp=1&oh=ebff3650b9ea2374ca4d0083fd88b9ce&oe=601E9818",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.10.1059.1059a/s640x640/130277013_3480132075439187_1261210400744922666_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AvcqSl2jXrYAX9Us-_F&tp=1&oh=53ca885508ee3d62f40fa8f765bfead7&oe=6021392D",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/c40.0.322.322a/s240x240/130109259_135914604780119_334569776687144587_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=NvFh60WGoXUAX88Ijm7&tp=1&oh=44fe6695c64fb42c68c879145de1cc9e&oe=601EDF74",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/129749870_519561012333290_2364360133237961262_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=muVUMbN3lPUAX-RMxPx&tp=1&oh=661f9ed9af47ff34f7242bb942ab50e5&oe=6021CF21",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/129208294_1108676076216817_6155537452591811071_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=CDdWfYkpxWMAX8WeO78&tp=1&oh=b43b5c2e338f99ecce542f50e4128bd3&oe=601FC50D",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/128865188_2517235381911917_8645889418085283848_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=KBPRSt7PjOkAX8Q1elc&tp=1&oh=d145e5c0e9767063ad7ce1eeec5edbe2&oe=601EF03D",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.11.1080.1080a/s320x320/128128694_868755110534182_8279975459294598423_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=fYU5J4X4SWMAX-zaxHw&tp=1&oh=ab39e0241a11f39d1aca407c3be188be&oe=6021392B",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/127283785_304009597529345_6779303537737763781_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=EQfygGmrnhQAX_TXhJX&tp=1&oh=98e70b26ed79c250f9dee017c6a1594d&oe=602256ED",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/c2.0.1080.1080a/s240x240/126240408_157071546151358_7109767933011140854_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=re4zkYmEsiwAX9aWmWK&tp=1&oh=704db7a790cc193bb0c65ae9d1a04f7d&oe=60218822",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.49.1080.1080a/s320x320/125969101_1212870519108381_7168965677508265889_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Ab2CVWwUAQYAX9jeQHg&tp=1&oh=d35d785a53605df49e8d2069daacc2bc&oe=6020A369",
"https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/126911237_373708993899126_5867228113680081685_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uaGmBFJugd4AX9ehAs6&tp=1&oh=592b17033d7cda0cdd73d1e8031709dd&oe=6021AFAB",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/125445124_128889012353665_2023428058232156908_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=DmTQFqdKr48AX9j9pjB&tp=1&oh=53968adc575eaecc4e54dfce98ef1e6d&oe=6021DA45",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/125203061_212260570511137_140186028330733729_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=sCR6xTT8skQAX818Z-e&tp=1&oh=60861f39c7037177ba0f014b3f62c8c1&oe=6021706C",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/124991536_133200784864969_1717917477084983651_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BJuDYVdLdrUAX--oTMi&tp=1&oh=175910669828eea849ea4527e4a7ebf0&oe=601F595D",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/124472311_732083587388573_6139314446989016841_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=tLuK-0g6iZ4AX9eJ62A&tp=1&oh=16cfda9377110d1e2dabbd7dabdf5931&oe=602054DC",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/123116914_188108036174474_482919597154861420_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NoDjcWmkYWgAX-rZ_JU&tp=1&oh=ba7e8fa77e03946e6c12bf8f4d9149e2&oe=60226222",
"https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/e35/c1.0.717.717a/s320x320/122752526_369932580821632_210921590105704568_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=vrFKRmqOrPAAX9mxa0B&tp=1&oh=bb748e2e7b9bb72f832a555f0db6ca27&oe=60220457",
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit(`${espri}`);
              });
}});
client.login(`NzkxOTc3OTU3MDEwNzAyMzY3.X-XA8w.1AOOovq4mg9gPHP2ROTty76T-rQ`);
