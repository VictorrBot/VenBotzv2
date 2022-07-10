let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
╭〔 DONASI EMONEY 〕
╽
┣• Dana : ${dana}
┣• Pulsa : ${pulsa}
┣• Gopay : ${gopay}
┣• Ovo : 081248537085
┣• Trakteer : https://trakteer.id/VenBotz/tip
╿
╰───────────────
Berapapun donasi kalian akan sangat berarti 👍
Thanks

Contact person Owner:
wa.me/${numberowner} (Owner)

'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler