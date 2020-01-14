import SecureLS from 'secure-ls'
import firebase from 'firebase'
import firebaseconnection from '../firebaseconnection'
import { useState } from 'react'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}

//var ls = new SecureLS();
//ls.set('key1', { data: 'test' });
//console.log(ls.get('key1').data)
//localStorage.setItem('test', 'samet karakuş')


async function login(username, password, logincontrol) {


    firebase.database().ref().child('users').orderByChild('username').equalTo(username).on("value", function (snapshot) {
        
        if (snapshot.val() != null && snapshot.val()[username].password == password) {
            return alert('giriş başarılı')
        }
        else return alert('giriş başarısız')

    });


}

export default login