import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../components/firebaseconnection'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconnection);
}

const posts = ({ query }) => {
  return (
    <div>
      {query[0].title}
    </div>
  )
}

posts.getInitialProps = async ({ req2, query }) => {
  var BlogText = []
  firebase.database().ref().child('blogs').on('child_added', data => {
    if (data.val().link == query.postId) {

      BlogText.push({
        title: data.val().title,
        image: data.val().image,
        blog: data.val().blog,
      })
    }
  })


  return { query: BlogText };

};

export default posts;