import jsonp from '../../common/js/jsonpFunc'

const getCategoryList = function(id) {
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
    data: `{"comm":{"ct":24},"playlist":{"method":"get_playlist_by_category","param":{"id":${id},"curPage":1,"size":66,"order":5,"titleid":${id}},"module":"playlist.PlayListPlazaServer"}}`
  }
  return jsonp(url, queryStringParameters, {})
}

export { getCategoryList }