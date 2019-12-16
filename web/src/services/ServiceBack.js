import React from 'react'
import 'firebase/auth'
import { post } from './Service'


const url = 'http://localhost:6009'

export async function logueo(firebase, provider){
  await firebase.auth().signInWithPopup(provider)
  return await firebase.auth().currentUser.getIdToken(true).then( function(idToken) {
      return post(url + '/Client/LogUser', idToken )}).catch(error => handleLogError(firebase, error))
    }

export async function setDireccion(firebase, direccion){
  return await firebase.auth().currentUser.getIdToken(true).then( idToken => {
    return post(url + '/Client/CompradorData', idToken, direccion )}).catch(error => 
      handleLogError(error))
  }

export async function verifyLogIn(firebase){
  return await firebase.auth().currentUser.getIdToken(true).then((idToken) => { 
    return post(url + '/Client/LogUser', idToken )}).catch(error =>
      handleLogError(firebase, error))}
    

function handleLogError(firebase, error){
  console.log(error)
  firebase.auth().signOut()
  return error
}

function handleError( error){
  console.log(error)
  return error
}