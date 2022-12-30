/**
   * 
   Creator/Author DenzzJB
   * 
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}


global.ownername = 'DenzzVIPBOT'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['6285723219491']
global.premium = ['6285723219491']
global.packname = 'ERORER'
global.author = 'DenzzVIP'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Nya Buat Admin Tolol',
    botAdmin: 'Bot Nya Liat Udah Jadi Admin Belum? jadiin admin',
    owner: 'lo bukan owner jadi gk bisa',
    group: 'buat di grub doank',
    private: 'fitur dipake buat pm/pc/private',
    bot: 'fitur khusus pengguna bot',
    wait: 'TUNGGU YA BRO',
    endLimit: 'limit anda habis jadi tunggu sampe di reset',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
