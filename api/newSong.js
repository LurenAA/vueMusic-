let spliceUrl = require('../util/spliceUrl')

module.exports = function (mid) {
  let baseUrl = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let param = {
    '-': 'getplaysongvkey5678659442374052',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"4669419300","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"4669419300","songmid":["${mid}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}`
  }
  return spliceUrl(baseUrl,param)
}