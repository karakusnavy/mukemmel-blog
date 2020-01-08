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
    const res = await fetch("http://localhost:3000/api/posts");
    const json = await res.json();
    return { posts: json.posts };
    //
};

export default Layout;
