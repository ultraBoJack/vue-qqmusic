import JSONP from 'jsonp'

const jsonp = function(url, urlParams, jsonpOptions) {
  let encodedParams = encodeParams(urlParams)
  console.log(encodedParams)
  let encodeUrl = url + (~url.indexOf('?') ? '&' : '?') + encodedParams
  console.log(encodeUrl)
  return new Promise((resolve, reject) => {
    JSONP(encodeUrl, jsonpOptions, (error, data) => {
      if (!error) {
        resolve(data)
      } else {
        reject(error)
      }
    })
  }) 
}

function encodeParams (params) {
  let encodeParams = ''
  for (let key in params) {
    let value = params[key]
    encodeParams += `&${key}=${encodeURIComponent(value)}`
  }
  return encodeParams.substring(1)
}

export default jsonp