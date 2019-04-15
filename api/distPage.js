var spliceUrl = require('../util/spliceUrl')

module.exports = function(vid){
  let baseUrl = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  let params =  {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid: vid,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
  }
  return spliceUrl(baseUrl, params)
}
