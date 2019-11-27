const rp = require('request-promise');


export function get(url) {
    return callToServer('GET', url, {})
  }
  
export function post( url, data) {
    return callToServer('POST', url, data)
  }
  
export function put( url, data) {
    return callToServer('PUT', url, {data: data})
  }

async function callToServer(method, url, params) {
  let options = {
    uri: url,
    method: method,
    headers: {
      "X-Firebase-ID-Token": params,
      "content-type": "application/json"
    },
    body: { },
    json: true 
}
  return await rp(options).catch((error) => { console.log('algo salio mal', error) })

}