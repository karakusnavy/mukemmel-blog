import App, { Container } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 import auth from '../../components/auth/login'

function index() {
  useEffect(()=>{

    auth('karakusnaavy','123456789a','test').then(res => {
      if(res != false){
        //bilgiler doğru
        console.log('Doğru')
        console.log(res)
      }
      else{
        console.log('Yanlış')
        console.log(res)
        //
      }
    })

  })
  return(
    <div>Hello</div>
  )
}

export default index