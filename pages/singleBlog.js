import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../components/firebaseconnection'
import Layout from '../components/Layout/Layout'
import {
  useParams
} from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconnection);
}

const posts = ({ query }) => {
 
  return (
    <Layout sidebar={true} >
      {
        query[0] == undefined ?
          <h4>Sayfa Bulunamadı</h4>
          :
          <div>
            <h2>{query[0].title}</h2>
            <img style={{ width: '90%', marginTop: 20 }} src={query[0].image} />
            <p style={{ color: 'black', marginTop: 10 }} >
              {query[0].blog}
            </p>
          </div>
      }

    </Layout>
  )
}

posts.getInitialProps = async ({ req2, query }) => {
  const {id} = useParams()
  var BlogText = []
  firebase.database().ref().child('blogs').on('child_added', data => {
    if (data.val().link == id) {

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