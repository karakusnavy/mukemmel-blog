import React, { Children } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'


const Layout = props => {
    return (
        <>
            <Header topmargin={100} />

            <section className="generic-banner" >
                <div className="container">
                    <div style={{ height: 200 }} className="row align-items-center justify-content-center"></div>
                </div>
            </section>
            <div className="container" style={{ marginTop: 20, marginBottom: 20 }}>


                {

                    props.sidebar == true ?
                        <div className="row">
                            <div className="col-lg-9">
                                {props.children}
                            </div>
                            <Sidebar />
                        </div>
                        :
                        <div className="row">
                            <div className="col-lg-12">
                                {props.children}
                            </div>
                        </div>

                }


            </div>

            <Footer />
        </>
    )
}

Layout.getInitialProps = async ({ req }) => {
    alert(req)
    //
};

export default Layout;
