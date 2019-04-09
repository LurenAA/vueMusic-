let spliceUrl = require('../util/spliceUrl')

module.exports = function (area_id = 20 ,version_id = 7){
  let baseUrl = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let params = {
    '-': 'mvlib9025287206346431',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"comm":{"ct":24},"mv_list":{"module":"MvService.MvInfoProServer","method":"GetAllocMvInfo","param":{"start":0,"size":20,"version_id":${version_id},"area_id":${area_id},"order":1}}}`
  }
  return spliceUrl(baseUrl, params)
}
