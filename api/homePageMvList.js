let spliceUrl = require('../util/spliceUrl')

let params = {
  '-': 'mvlib041377939900614225',
  g_tk: 5381,
  loginUin: 0,
  hostUin: 0,
  format: 'json',
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'yqq.json',
  needNewCode: 0,
  data: '{"comm":{"ct":24},"mv_tag":{"module":"MvService.MvInfoProServer","method":"GetAllocTag","param":{}},"mv_list":{"module":"MvService.MvInfoProServer","method":"GetAllocMvInfo","param":{"start":0,"size":20,"version_id":7,"area_id":15,"order":1}}}'
}

let baseUrl = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

module.exports = spliceUrl(baseUrl, params)