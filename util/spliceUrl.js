function spliceUrl(baseUrl, dataObj){
  let url = baseUrl.indexOf('?') === -1 ? baseUrl + '?' : baseUrl
  url += spliceDataObj(dataObj)
  return url.replace('?&', '?')
}

function spliceDataObj(dataObj) {
  let str = ''
  for(x in dataObj) {
    str += `&${x}=${dataObj[x]}`
  }
  return str
}

module.exports = spliceUrl