var spliceUrl = require('../util/spliceUrl')

module.exports = function(vid){
  let baseUrl = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let params =  {
    '-': 'getUCGI47668331580192724',
    g_tk: 2038583198,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"comm":{"ct":24,"cv":4747474},"mvinfo":{"module":"video.VideoDataServer","method":"get_video_info_batch","param":{"vidlist":["f00291tcre9"],"required":["vid","type","sid","cover_pic","duration","singers","video_switch","msg","name","desc","playcnt","pubdate","isfav","gmid"]}},"other":{"module":"video.VideoLogicServer","method":"rec_video_byvid","param":{"vid":"${vid}","required":["vid","type","sid","cover_pic","duration","singers","video_switch","msg","name","desc","playcnt","pubdate","isfav","gmid","uploader_headurl","uploader_nick","uploader_encuin","uploader_uin","uploader_hasfollow","uploader_follower_num"],"support":1}}}`
  }
  return spliceUrl(baseUrl, params)
}



