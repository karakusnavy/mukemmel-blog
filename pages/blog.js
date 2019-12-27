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
                        <div  style={{height:200}} class="row align-items-center justify-content-center"></div>
                    </div>
                </section>
                <div class="container" style={{marginTop:20,marginBottom:20}}>

                    <h1>HELLO</h1>

                </div>

                <Footer />
            </div>
        )
    }
}
