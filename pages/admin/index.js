import React, { useEffect } from 'react'
import Home from './dashboard'
import { Router, Route, Switch } from 'react-router-dom';
import Login from './login'
import { createMemoryHistory } from 'history';




const Index = () => {
  const history = createMemoryHistory();

  return (
    
      <Router history={history}  >
      
        
          <Route path="/admin">
            <Home />
          </Route>
          <Route path="/admin/samet">
            <Login />
          </Route>
        
       
      </Router>
      
    
  )
}
export default Index