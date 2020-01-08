import React, { Children } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Layout = props  => (
    
    <div>
       {props.children}
    </div>
   
);

Layout.getInitialProps = async ({ req }) => {
    alert(req)
    //
};

export default Layout;
