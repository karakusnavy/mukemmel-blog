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


export default async function login(username, password, logincontrol) {
    
    var loginInfo
    firebase.database().ref().child('users').orderByChild('username').equalTo(username).on("value", function(snapshot) {
        snapshot.forEach(function(data) {
            if(data.key != null)
            {
                loginInfo = []
                loginInfo = snapshot.val()
            }
            else{
                loginInfo = false
            }
        });
    });


    var ls = new SecureLS()

    return loginInfo

}
