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
            gelenUrl: null,
            blogs: []
        }
    }
    componentDidMount() {
        blog.getInitialProps = async ({ req, query }) => {
            this.setState({ gelenUrl: query.id })
        }
        var getting = []
        firebase.database().ref().child('blogs').on('child_added', data => {
            getting.push({
                title: data.val().title,
                date: data.val().date,
                image: data.val().image,
                link: data.val().link,
                blog: data.val().blog,
                id: data.key
            })
            this.setState({ blogs: getting })
        })

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
                            {
                                this.state.blogs.map(item =>
                                    <div class="col-lg-12 blogPost">
                                        <div class="row">
                                            <div class="col-sm-4 align-items-center justify-content-center">
                                                <img src={item.image} style={{ height: 180, width: '95%', borderRadius: 10, backgroundSize: 'contain' }} />
                                            </div>
                                            <div class="col-sm-6 title">
                                                <h3 href="/" >{item.title}</h3><br />
                                                <p style={{ marginTop: -15 }} >
                                                    {item.blog.length > 300 ? item.blog.substring(0, 280) + '...' : item.blog}
                                                </p>
                                                <b style={{ marginTop: -5 }} >{item.date} - Samed Karakuş</b>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }




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
