/*

# Base By Es Teams Tech
# Owner ? : t.me/examsolutionteam
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['2348104400066']
global.ownMain = '2348104400066'
global.NamaOwner = 'Joshua' //gausah diganti
global.sessionName = 'Josh'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'Josh BOT🩸' //ganti aj klo mau
global.author = 'Joshua' //ganti aj klo mau
global.packname = 'Josh BOT🩸' //ganti aj klo mau
global.url1 = 'https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU' //gausah diganti
global.url2 = 'https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU' //gausah diganti
global.linkgc = 'https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU'
global.delayjpm = 3500

global.mess = { // Custom Sesuka Lu
ingroup: 'Stinger V3  can only be used in groups.',
admin: 'Stinger V3 is specifically for group admins.',
notadmin: "Stinger V3 must be an admin first",
owner: 'You are not Joshua .',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success Bang',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "̊S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸⿻‏‎‏‎‏‎‏",
bbb: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸",
ccc: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸",
ddd: "",
eee: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸༏",
xxx: "► S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸◄",
sss: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸 ✨",
ttt: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
