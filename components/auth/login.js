import SecureLS from 'secure-ls'
import firebase from 'firebase'
import firebaseconnection from '../firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}


async function login(username, password) {

    
    var ls = new SecureLS();
    await firebase.database().ref().child('users').orderByChild('username').equalTo(username).on("value", function (snapshot) {
        
        if (snapshot.val() != null && snapshot.val()[username].password == password) {
            
            ls.set('log_in_my_blog_546_555',username)
           
            return true

        }
        else return false

    });


}

export default login