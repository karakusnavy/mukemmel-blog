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

            <section class="generic-banner" >
                <div class="container">
                    <div style={{ height: 200 }} class="row align-items-center justify-content-center"></div>
                </div>
            </section>
            <div class="container" style={{ marginTop: 20, marginBottom: 20 }}>


                {

                    props.sidebar == true ?
                        <div class="row">
                            <div class="col-lg-9">
                                {props.children}
                            </div>
                            <Sidebar />
                        </div>
                        :
                        <div class="row">
                            <div class="col-lg-12">
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
