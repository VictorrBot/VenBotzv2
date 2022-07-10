let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Dont Mention It*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/e0ff44e949bf1c33390ff.png',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/e0ff44e949bf1c33390ff.png', hyzer, { packname: "⌬ Lexa Bot", author: "6282253479547" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq)$/i
handler.command = new RegExp

module.exports = handler
