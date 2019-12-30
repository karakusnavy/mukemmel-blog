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


                        <div class="col-lg-9">
                            <div class="col-lg-12 blogPost">
                                <div class="row">
                                    <div class="col-sm-4 align-items-center justify-content-center">
                                        <img src="img/mac_background.jpg" style={{ height: 180, width: '95%', borderRadius: 10, backgroundSize: 'contain' }} />
                                    </div>
                                    <div class="col-sm-6 title">
                                        <h3>Başlık Burası</h3><br />
                                        <p style={{marginTop:-15}} >
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                </p>
                                        <b style={{marginTop:-5}} >09.25.2019 - Samed Karakuş</b>

                                    </div>
                                </div>
                            </div>
                           
                            <div class="col-lg-12 blogPost">
                                <div class="row">
                                    <div class="col-sm-4 align-items-center justify-content-center">
                                        <img src="img/mac_background.jpg" style={{ height: 180, width: '95%', borderRadius: 10, backgroundSize: 'contain' }} />
                                    </div>
                                    <div class="col-sm-6 title">
                                        <h3>Başlık Burası</h3><br />
                                        <p style={{marginTop:-15}} >
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                </p>
                                        <b style={{marginTop:-5}} >09.25.2019 - Samed Karakuş</b>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 blogPost">
                                <div class="row">
                                    <div class="col-sm-4 align-items-center justify-content-center">
                                        <img src="img/mac_background.jpg" style={{ height: 180, width: '95%', borderRadius: 10, backgroundSize: 'contain' }} />
                                    </div>
                                    <div class="col-sm-6 title">
                                        <h3>Başlık Burası</h3><br />
                                        <p style={{marginTop:-15}} >
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                            İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,İçerik, İçerik,
                                </p>
                                        <b style={{marginTop:-5}} >09.25.2019 - Samed Karakuş</b>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3">

                            <div class="row">
                                <div class="col-lg-12 etiketler">
                                    <h5>Etiketler</h5>
                                    <a>#yazılım </a>
                                    <a>#teknoloji </a>
                                    <a>#hayat </a>
                                    <a>#girişimcilik </a>
                                    <a>#araba </a>
                                    <a>#yapayzeka </a>
                                    <a>#trend </a>
                                    <a>#moda </a>
                                    <a>#tasarım </a>
                                    <a>#kayseri </a>
                                    <a>#türkiye </a>
                                    <a>#selmankahya </a>
                                    <a>#youtube </a>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}