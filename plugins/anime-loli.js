let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/anime/loli?apikey=Vb5BLFFB', '', '', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
