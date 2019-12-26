import React from "react";
import Header from './SharedPages/Header'
import Footer from './SharedPages/Footer'
import firebase from 'firebase'
import firebaseconnection from './firebaseconnection'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconnection);
}

export default class Blog extends React.Component{
    render()
    {
        return(
            <div>Merhaba burası BLOG sayfası</div>
        )
    }
}