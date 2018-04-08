import jsonp from '../../common/js/jsonpFunc'

const getNewSongList = function(type) {
  let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let queryStringParameters = {
    // callback: 'recom022073411057146775',
    g_tk: 5381,
    // jsonpCallback: 'recom022073411057146775',
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    data: '{"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":' + type + '}}}'
  }
  return jsonp(url, queryStringParameters, {})
}

export { getNewSongList }