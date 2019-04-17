var spliceUrl = require('../util/spliceUrl')

module.exports = function(vid = 200){
  let baseUrl = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let params =  {
    '-': 'getUCGI3867631733275396',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":${vid},"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}`
  }
  return spliceUrl(baseUrl, params)
}
