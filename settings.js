
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['201098906252'] //ur owner number
global.ownername = "ᗴᒪᘜᗩᘔᗩᖇ ᗩᒪᗯᗩᘔᗴᖇ❤️" //ur owner name
global.ytname = "يوتيوب: ELGAZAR_ALWAZER" //اسم قناتك او موقعك
global.socialm = "يوتيوب: Nipuna15" //اسم قناتك او نوقعك
global.location = "Africa, Egypt, Cairo" //بلدك

//bot bomdy 
global.ownernomer = "201098906252" //رقم المطور
global.premium = ['201098906252'] //رقم المطور للبريميوم
global.botname = '❤️ᗴᒪᘜᗩᘔᗩᖇ ᗷOT❤️' //اسم البوت
global.linkz = "https://youtube.com/@ABDALLAH_MOHAMED" //رابط جروب دعم واتساب
global.websitex = "https://youtube.com/@ABDALLAH_MOHAMED" //قناه اليوتيوب الخاص بك او انستجرام او اي موقع خاص بك
global.botscript = 'https://youtube.com/@ABDALLAH_MOHAMED' //وهنا ايضا تضع الموقع الخاص بك
global.themeemoji = "🐤" //ايموجي المنشن
global.packname = "⍣الجزار الوزير يروحي⍣" //حقوق الملصق
global.author = "⍣01098906252⍣" //حقوق الملصق التانيه
global.wm = "❤️ᗴᒪᘜᗩᘔᗩᖇ ᗷOT❤️" //حقوق الملصق عند عمل ملصق بحقوقك

//Downlod messages
global.videodownlod = "📥 جاري تنزيل الفيديو..."
global.videouplod = "📤 جاري تحميل الفيديو..."
global.songdownlod = "📥 جاري تنزيل المقطع الصوتي..."
global.songuplod = "📤 جاري تحميل المقطع الصوتي..."

//Image url
global.aliveimg = "https://github.com/nipuna15/nipuna15/raw/main/Moxiepic.jpg" // لا تغيرها ما الها فائده
global.menuimg = "https://github.com/nipuna15/nipuna15/raw/main/Moxiepic.jpg" // لا تغيرها ما الها فائده


//alive,menu messages
global.alivemg = "┌─❖\n│ Hi 👋 └┬❖  ${pushname} \n┌┤✑  ${ucapanWaktu} 😄\n│└────────────┈ ⳹\n│\n└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        \n│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds\n│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}\n│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}\n│𝗕𝗼𝘁 : ${global.botname}\n│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}\n│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX \n│𝗠𝗼𝗱𝗲 : ${ElgazarBot.public ? 'Public' : `Self`}\n│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}\n│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}\n│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}\n│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}\n│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}n/│\n└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 \n│𝗡𝗮𝗺𝗲 : ${pushname}\n│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}\n│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPremium ? '✅' : `❌`}\n│𝗟𝗶𝗺𝗶𝘁 : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}\n│\n└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 \n│𝗧𝗶𝗺𝗲 : ${xtime}\n│𝗗𝗮𝘁𝗲 : ${xdate}\n└┬────────────┈ ⳹\n │✑  Please Select\n\n│✑  The Button Below\n └─────────────┈ ⳹"
global.antilinkmg = "\'\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مشرفا ، فلا ترسل أي رابط في هذا الجروب وإلا فسيتم طردك على الفور!"
global.badwordmg = "\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nلا يسمح لأحد باستخدام كلمات سيئة في هذا الجروب, الشخص الذي يستخدم سيتم طرده على الفور!"

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'تم يروحي!',
    admin: '『 الامر دا لادمن بس! 』',
    botAdmin: '『 ارفع البوت ادمن الاول 』',
    premime: '『 ميزات خاصة متميزة إذا كنت ترغب في تسجيل نوع الإيجار』',
    owner: '『 الميزه دي للمطور بس!』',
    group: '『 الميزه دي للجروبات بس! 』',
    private: '『 الميزه دي في الخاص بس! 』',
    bot: '『 الميزه دي للبوت بس! 』',
    wait: '『 استني شويه... 』',
    linkm: '『 فين الرابط? 』',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur error pic
global.thumb = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
