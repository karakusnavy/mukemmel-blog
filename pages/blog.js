import React from "react";
import Header from './SharedPages/Header'
import Footer from './SharedPages/Footer'
import firebase from 'firebase'
import firebaseconnection from './firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}

export default class blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gelenUrl: null
        }
    }
    componentDidMount() {
        blog.getInitialProps = async ({ req, query }) => {
            this.setState({ gelenUrl: query.id })
        }
    }
    render() {


        return (
            <div  >
                <Header topmargin={100} />

                <section class="generic-banner" >
                    <div class="container">
                        <div style={{ height: 200 }} class="row align-items-center justify-content-center"></div>
                    </div>
                </section>
                <div class="container" style={{ marginTop: 20, marginBottom: 20 }}>
                    <div class="row">


                        <div class="col-lg-10">
                            <div class="col-lg-12 blogPost">
                                <div class="row">
                                    <div class="col-sm-4 align-items-center justify-content-center">
                                        <img src="img/mac_background.jpg" style={{ height: 180,width:'95%', borderRadius: 10, backgroundSize: 'contain' }} />
                                    </div>
                                    <div class="col-sm-6 title">
                                        <h3>Başlık Burası</h3><br />
                                        <p>
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                </p>
                                        <b>09.25.2019 - Samed Karakuş</b>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 blogPost">
                                <div class="row">
                                    <div class="col-sm-4 align-items-center justify-content-center">
                                        <img src="img/mac_background_2.jpg" style={{ height: 180,width:'95%', borderRadius: 10, backgroundSize: 'contain' }} />
                                    </div>
                                    <div class="col-sm-6 title">
                                        <h3>Başlık Burası</h3><br />
                                        <p>
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                </p>
                                        <b>09.25.2019 - Samed Karakuş</b>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 blogPost">
                                <div class="row">
                                    <div class="col-sm-4 align-items-center justify-content-center">
                                        <img src="img/mac_background.jpg" style={{ height: 180,width:'95%', borderRadius: 10, backgroundSize: 'contain' }} />
                                    </div>
                                    <div class="col-sm-6 title">
                                        <h3>Başlık Burası</h3><br />
                                        <p>
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                </p>
                                        <b>09.25.2019 - Samed Karakuş</b>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-2">
                            Buraya Reklam Ver ?
                    </div>

                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
