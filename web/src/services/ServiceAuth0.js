import React from 'react'
import 'firebase/auth'
import { post } from '../services/ServiceMenus'


const url = 'http://localhost:6009'

export async function logueo(firebase, provider){
  
  await firebase.auth().signInWithPopup(provider)
  return await firebase.auth().currentUser.getIdToken(true).then( function(idToken) {
      return post(url + '/Client/LogUser', idToken )}).catch(error => handleLogError(firebase, error))
    }

export async function setDireccion(firebase, direccion){
  return await firebase.auth().currentUser.getIdToken(true).then( function(idToken) {
    post(url + '/Client/CompradorData', idToken, direccion )}).catch(error => handleError(error))
  }
    

function handleLogError(firebase, error){
  console.log(error)
  firebase.auth().signOut()
}

function handleError( error){
  console.log(error)
  return error
  
}