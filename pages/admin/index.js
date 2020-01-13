import React, { useEffect } from 'react'
import Home from './dashboard'
import Router from 'next/router'

function Index({ match }) {

  useEffect(() => {
      // veri çekip giriş yaptığını anlayacağım
      Router.push('/')
  })

  return(
    <div>Denem</div>
  )


}

export default Index;