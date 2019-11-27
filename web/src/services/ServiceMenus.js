const rp = require('request-promise')


export function get(url, token) {
    return callToServer('GET', url, token, {})
  }
  
export function post( url, token , params) {
    return callToServer('POST', url, token, {json: params})
  }
  
export function put( url, token , params) {
    return callToServer('PUT', url, token, {json: params})
  }

async function callToServer(method, url, token, params) {
  let options = {
    uri: url,
    method: method,
    headers: {
      "X-Firebase-ID-Token": token,
      "content-type": "application/json"
    },
    body: params,
    json: true 
}
  return await rp(options).catch((error) => { console.log('algo salio mal', error) })

}