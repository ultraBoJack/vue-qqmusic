import jsonp from '../../common/js/jsonpFunc'

const getSinger = function(type, pageNum) {
  let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  let queryStringParameters = {
    channel: 'singer',
    page: 'list',
    key: `${type}`,
    pagesize: 100,
    pagenum: pageNum,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  }
  return jsonp(url, queryStringParameters, {
    param: 'jsonpCallback',
    prefix: 'GetSingerListCallback'
  })
}

export { getSinger }