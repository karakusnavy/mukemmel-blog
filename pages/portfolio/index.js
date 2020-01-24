import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../../components/firebaseconnection'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}


const portfolio = ({ query }) => {

    const Box = ({ color1 }) => {
        const rgb = [color1.substring(1, 3), color1.substring(3, 5), color1.substring(5, 7)];
        const color2 = `rgb(${rgb.map(c => (parseInt(c, 16) * 0.8)).join()})`;
        return (
            <div class="col-lg-12 blogPost" style={{ background: `linear-gradient(${color1}, ${color2})`,height:50 }} >

                Test Buuuu
            
            </div>
        );
    }

    return (
        <Layout sidebar={false} >
            <div className='row'>
                
                    <Box color1='#24c6dc' />

                </div>
         
        </Layout>
    )
}


portfolio.getInitialProps = async ({ req2, query }) => {



    return { query: 'getting' };

};


export default portfolio
