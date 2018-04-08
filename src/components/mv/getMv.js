import jsonp from '../../common/js/jsonpFunc'

const getMvList = function(area) {
  let url = 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag'
  let queryStringParameters = {
    g_tk: 5381,
    // jsonpCallback: 'MusicJsonCallback',
    MusicJsonCallback: '',
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'GB2312',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    cmd: 'shoubo',
    lan: `${area}`
  }
  return jsonp(url, queryStringParameters, {
    param: 'jsonpCallback',
    prefix: 'MusicJsonCallback'
  })
}

export { getMvList }