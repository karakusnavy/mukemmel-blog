import App, { Container } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 
 import history from '../../components/history'
export default class Login extends React.Component {
  
  render() {
    return (
      <div>
        <Router history={history} >
          <Switch>
            <Route path='/'>
              <div>
                Selam
              </div>
            </Route>
            <Route path='/admin'>
              <div>
                Selam
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
