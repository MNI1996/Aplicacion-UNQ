import { hereMap } from './ServiceMenus'

const url = 'http://autocomplete.geocoder.api.here.com/6.2/suggest.json'
const urlGeo = 'https://geocoder.api.here.com/6.2/geocode.json'

const sugentionParams = (params) => (
  {'app_id': 'Boze0cQ9ZbYPqj62AV4J',
    'app_code': 'f8qaglUm2Rwtq84mZNtTvQ',
    ...params})

const GeoParams = (params) => (
  {'app_id': 'Boze0cQ9ZbYPqj62AV4J',
  'app_code': 'f8qaglUm2Rwtq84mZNtTvQ',
    ...params})

     

export const onSearch = async (ubicacion) => {
  return await hereMap(url, sugentionParams({'query': ubicacion, 'maxresults':20 ,'country':'ARG'})).catch(error => handleError(error))}

export const onSearchgeoCode = async (ubicacion) => {
  return await hereMap(urlGeo, GeoParams({'searchtext': ubicacion, 'maxresults':15})).catch(error => handleError(error))}
  
  function handleError(firebase, error){
    console.log(error)
  }