import jsonp from '../../common/js/jsonpFunc'

const getAlbum = function(area, genre, type, year, company, sort, sin) {
  let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let queryStringParameters = {
    callback: 'getUCGI',
    jsonpCallback: 'getUCGI',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    data: `{"albumlib":{"method":"get_album_by_tags","param":{"area":${area},"company":${company},"genre":${genre},"type":${type},"year":${year},"sort":${sort},"get_tags":1,"sin":${sin},"num":19,"click_albumid":0},"module":"music.web_album_library"}}`
  }
  return jsonp(url, queryStringParameters, {
    // param: 'jsonpCallback',
    // prefix: 'getUCGI'
  })
}

export { getAlbum }