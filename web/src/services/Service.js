import rp from 'request-promise'

export async function getd(url, token) {
    return await callToServer('GET', url, token) }
  
export async function post( url, token , params) {
    return await callToServer('POST', url, token, params) }
  
export async function put( url, token , params) {
    return await callToServer('PUT', url, token, params) }

async function callToServer(method, url, token, params) {
  let options = {
    uri: url, method: method,
    headers: {
      'X-Firebase-ID-Token': token,
      'content-type': 'application/json'
    }, body: params, json: true }
  return await rp(options)}

export async function hereMap( url, params) {
  let options = { uri: url, qs: params, json: true }
  return await rp.get(options).catch((error) => printError(error))}

function printError(error){
  console.log('algo salio mal', error)  
  throw(error)
}
