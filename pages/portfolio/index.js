import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../../components/firebaseconnection'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}


const portfolio = ({ query }) => {

    const Box = ({ color1,title,about,link,textColor }) => {

        const rgb = [color1.substring(1, 3), color1.substring(3, 5), color1.substring(5, 7)];
        const color2 = `rgb(${rgb.map(c => (parseInt(c, 16) * 0.8)).join()})`;


        return (

            <div class="col-lg-12 blogPost" style={{ background: `linear-gradient(${color1}, ${color2})`, padding: 10,color: 'white', fontWeight: 'bold', fontFamily: 'arial' }} >

                <div class='row'>
                    <div class='col-sm-8'>
                        <h2>{title}</h2>
                        <p style={{color:textColor}} >
                            {about}
                            </p>
                        <img src='img/playstore.png' style={{ height: 50, margin: 10 }} />
                    </div>
                    <div class='col-sm-4'>

                    <img src='img/karakod.png' style={{ height: 166, margin: 10 }} />

                    </div>
                </div>

            </div>

        );
    }

    return (
        <Layout sidebar={false} >
            <div className='row'>

                <Box textColor='black' color1='#FFE47A' title='Karakod' about=' Karakod, size yazılım ve yazılım mantığını öğretmeyi amaçlamış, içerisinde birden fazla yazılım desteği
                            bulunan bir mobil uygulama. Karakod "React Native" yazılım teknolojisi ile yazıldı. Karakod, Kayseri Erciyes
                            Teknopark, Orta Anadolu Kalkınma Ajansı, Sanayi ve Teknoloji Bakanı ve Sera Kuluçka Merkezi tarafından 2018-2019
                            da düzenlenen Benim İşim Girişim yarışmasından yatırım ve destek almıştır.' link='https://google.com' />
                <Box color1='#24c6dc' />
                <Box color1='#24c6dc' />

            </div>

        </Layout>
    )
}





portfolio.getInitialProps = async ({ req2, query }) => {



    return { query: 'getting' };

};


export default portfolio
