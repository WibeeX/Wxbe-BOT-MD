const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { en, es, ar, id, pt, rs } = require('./libs/idiomas/total-idiomas.js')
const axios = require('axios')

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["18293733257", "Owner", true]]
global.mods = ["18293733257"]
global.premium = ["18293733257"]
global.blockList = []

//---------[ NOMBRE/INFO ]---------
global.pagina = "atom.bio/blogansi"
global.botname = "✨ 𝐖𝐗𝐈𝐁𝐄 𝐁𝐎𝐓 ✨"
global.wm = '✨ 𝑹𝑬𝒀  𝑾𝑰𝑳𝑩𝑬𝑹𝑻  ✨'
global.vs = '1.2'
global.creador = '𝑹𝑬𝒀  𝑾𝑰𝑳𝑩𝑬𝑹𝑻 '
global.creador2 = '𝑹𝑬𝒀  𝑾𝑰𝑳𝑩𝑬𝑹𝑻 '
global.name = '𝑪𝑹𝑬𝑨𝑫𝑶𝑹'
global.nunber = Math.floor(Math.random() * (27 - 18 + 1)) + 18;




//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +18293733257
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Managua' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "."
global.author = `{
 "bot": "✨ 𝑹𝑬𝒀  𝑾𝑰𝑳𝑩𝑬𝑹𝑻  ✨"
  "autor": "𝑹𝑬𝒀  𝑾𝑰𝑳𝑩𝑬𝑹𝑻 ",
  "version": "1.2",
  "creador": "𝑹𝑬𝒀  𝑾𝑰𝑳𝑩𝑬𝑹𝑻 "
}
`
 
//-----------------IMAGENES---------
global.img = "https://tinyurl.com/Wilbert12";
global.img1 = 'https://tinyurl.com/Wilbert04';
global.img2 = 'https://tinyurl.com/Wilbert08';
global.img3 = 'https://tinyurl.com/Wilbert06';
global.img4 = 'https://tinyurl.com/263bj3ce';
global.img5 = 'https://tinyurl.com/Wilbert09';
global.img6 = 'https://tinyurl.com/Wilbert56';
global.img7 = 'https://tinyurl.com/Wilbert80';
global.img8 = 'https://tinyurl.com/Wilbert43';
global.img9 = 'https://tinyurl.com/Wilbert55';


global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.imagen4 = fs.readFileSync('./media/menu4.jpg')
global.imagen5 = fs.readFileSync('./media/menu5.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.verificar = fs.readFileSync('./media/menu2.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com/WibeeX/Wibe-BOT-MD.git'
global.yt = 'https://www.youtube.com/@WilbertYT-zf4dx/featured'
global.tiktok = 'https://www.tiktok.com/@reywilbert?_t=8oWzY8lKtio&_r=1'
global.fb = 'https://www.facebook.com/wilbert.jimenez.545402/'
global.faceb = 'https://www.facebook.com/wilbert.jimenez.545402/'

global.host = 'https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV' //Infinity-host
global.nna = 'https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36' //Update 
global.nn7 = 'https://chat.whatsapp.com/GFgaQyuU6Ux92CZ6WkrJV3' //Grupo ayuda sobre el bot
global.nna2 = 'Em4Byf4w5VgHObPvZQlfnM'
global.n2 = "https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36"
//---------[ INFO ]--------- 
global.info = { wait: '*_■■□□□40%_*', 
waitt: '*_■■■□□60%_*', 
waittt: '*_■■■■□80%_*', 
waitttt: '*_■■■■□90%_*', 
waittttt: '*_■■■■■100%_*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
premium: `${lenguaje['prem']()}`,                
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '⏳'
global.dmoji = '😅'
global.done = '✔️'
global.error = '⚠️'
global.xmoji = '💥'

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
