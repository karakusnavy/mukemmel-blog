import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from './SharedPages/Header'
import Footer from './SharedPages/Footer'

const Home = () => (
  <div className="container">
    <Header />

    İçerik Buraya Gelecek

    <Footer />

    <style jsx>{`
     
    `}</style>
  </div>
);


export default Home;
