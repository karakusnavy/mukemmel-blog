import React from "react";
import Header from './SharedPages/Header'
import Footer from './SharedPages/Footer'
import firebase from 'firebase'
import firebaseconnection from './firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}

export default class singleblog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gelenUrl: null,
            blogs: [],
            title:'',
            image:'',
            blog:'',
        }
    }
    componentDidMount = async () => {
        singleblog.getInitialProps = async ({ req, query }) => {
            await this.setState({ gelenUrl: query.id })
        }
   
        await firebase.database().ref().child('blogs').on('child_added', data => {
            if (data.val().link == this.state.gelenUrl) {
                this.setState({
                    title:data.val().title,
                    image:data.val().image,
                    blog:data.val().blog,
                })
             
                
               
            }
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
                            <h2>{this.state.title}</h2>
                            <img style={{ width: '90%', marginTop: 20 }} src={this.state.image} />
                            <p style={{ color: 'black', marginTop: 10 }} >
                               {this.state.blog}
                            </p>



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
