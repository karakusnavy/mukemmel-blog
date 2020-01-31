import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import firebaseconnection from '../../components/firebaseconnection'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}


const blog = ({   }) => {

    const [blogs,setblogs] = useState([])

    useEffect(() => {
        var getting = []

        var urlRef = firebase.database().ref().child("blogs");
        urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                getting.push({
                    title: child.val().title,
                    date: child.val().date,
                    image: child.val().image,
                    link: child.val().link,
                    blog: child.val().blog,
                    id: child.val()
                })
            });
            setblogs(getting)
        });
       
    },[blogs])

    return (
        <Layout sidebar={true} >
            {
                blogs.map(item =>
                    <div class="col-lg-12 blogPost">
                        <div class="row">
                            <div class="col-sm-4 align-items-center justify-content-center">
                                <img src={item.image} style={{ height: 180, width: '95%', borderRadius: 10, backgroundSize: 'contain' }} />
                            </div>
                            <div class="col-sm-6 title">
                                <a href={'blog/' + item.link}>
                                    <h3 >{item.title}</h3>
                                </a>
                                <br />
                                <p style={{ marginTop: -15 }} >
                                    {item.blog.length > 300 ? item.blog.substring(0, 280) + '...' : item.blog}
                                </p>
                                <b style={{ marginTop: -5 }} >{item.date} - Samed Karakuş</b>

                            </div>
                        </div>
                    </div>
                )
            }
        </Layout>
    )
}





export default blog
