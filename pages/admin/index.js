import App, { Container } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import auth from '../../components/auth/login'


function login(username,password) {
    
}

 function index() {


  useEffect(async ()=>{
   
  })

  return (
    <div onClick={()=> auth('karakusnavy', '123456789a', 'test')} >Hello</div>
  )
}

export default index