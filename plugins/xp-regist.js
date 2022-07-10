const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format Salah\n*${usedPrefix}daftar nama.umur*\n\nPerhatikan Tanda Titik Diantar Nama Dan Umur, Itu Adalah Pemisah`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw '*Umur Anda Tidak Memenuhi Syarat*'
  if (age < 11) throw '*Umur Anda Tidak Memenuhi Syarat*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`----------〔  SUCCEED 〕----------

╭─┄┄─❒ INFO
│ Nama: ${name}
│ Umur: ${age} tahun 
╰────┄┄┄┄┄┄┄┄┄•

Serial Number
${sn}

_Serial Number Dapat Digunakan Untuk Un-Reg Atau Lain-Nya_
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
