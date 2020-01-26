import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import firebaseconnection from '../../components/firebaseconnection'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}


const portfolio = ({ }) => {
    const [portfoliom, setportfolio] = useState([])
    const Box = ({ color1, title, about, link, textColor, imagelink }) => {

        const rgb = [color1.substring(1, 3), color1.substring(3, 5), color1.substring(5, 7)];
        const color2 = `rgb(${rgb.map(c => (parseInt(c, 16) * 0.8)).join()})`;



      


        return (

            <div class="col-lg-12 blogPost" style={{ background: `linear-gradient(${color1}, ${color2})`, padding: 10, color: 'white', fontWeight: 'bold', fontFamily: 'arial' }} >

                <div class='row'>
                    <div class='col-sm-8'>
                        <h2>{title}</h2>
                        <p style={{ color: textColor }} >
                            {about}
                        </p>
                        <img src='img/playstore.png' style={{ height: 50, margin: 10 }} />
                    </div>
                    <div class='col-sm-4'>
                        <img src={imagelink} style={{ height: 166, margin: 10 }} />
                    </div>
                </div>

            </div>

        );
    }
    useEffect(() => {



        var getting = []


        firebase.database().ref().child('portfolio').on('child_added', data => {

            getting.push({
                about: data.val().about,
                color1: data.val().color1,
                imagelink: data.val().imagelink,
                link: data.val().link,
                id: data.key,
                textColor: data.val().textColor,
                title: data.val().title,
            })



        })

        setportfolio(getting)
        

    }, [portfoliom])

    return (
        <Layout sidebar={false} >
            <div className='row'>

                {
                    portfoliom.map((item) =>
                        <Box textColor={item.textColor} color1={item.color1} title={item.title} about={item.about} link={item.link} imagelink={item.imagelink} />
                    )
                }



            </div>

        </Layout>
    )
}






export default portfolio
