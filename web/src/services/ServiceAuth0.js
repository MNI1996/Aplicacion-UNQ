import React from 'react'
import 'firebase/auth'
import { post } from '../services/ServiceMenus'


const url = 'http://localhost:6009'

export async function logueo(firebase, provider){
  
  await firebase.auth().signInWithPopup(provider)
  return await firebase.auth().currentUser.getIdToken(true).then( function(idToken) {
      return post(url + '/Client/LogUser', idToken )}).catch(error => error )
    }