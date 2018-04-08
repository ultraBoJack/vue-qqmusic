import jsonp from '../../common/js/jsonpFunc'

const getNewAlbumList = function(area) {
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
    data: `{"comm":{"ct":24},"new_album":{"module":"music.web_album_library","method":"get_album_by_tags","param":{"area":${area},"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":40,"click_albumid":0}}}`
  }
  return jsonp(url, queryStringParameters, {})
}

export { getNewAlbumList }