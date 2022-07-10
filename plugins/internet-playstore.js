let hxz = require('hxz-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .playstore coc'
  let res = await hxz.playstore(text)
conn.sendBut(m.chat, `*PLAY STORE*

NAMA: ${res[0].name}
DEVELOPER: ${res[0].developer}
LINK: ${res[0].link}`, wm, 'ok', 'huuu', m)

}
handler.help = ['playstore' <apk>]
handler.tags = ['internet']
handler.command = /^playstore$/i


module.exports = handlerhandler