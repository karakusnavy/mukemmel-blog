import SecureLS from 'secure-ls'
import firebase from 'firebase'
import { useRouter } from 'next/router'
import firebaseconnection from '../firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}


function login(username, password) {

     var ls = new SecureLS();

    firebase.database().ref().child('users').orderByChild('username').equalTo(username).on("value", function (snapshot) {
        
        if (snapshot.val() != null && snapshot.val()[username].password == password) {
            
            ls.set('log_in_my_blog_546_555',username)
            return alert('giriş yapıldı')

        }
        else return alert('giriş başarısız')

    });
}

export default login