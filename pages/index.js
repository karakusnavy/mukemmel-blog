import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from 'react-router'
import Home from './Home/index'
import Blog from './Blog/blog'
function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}


function NotFound() {
  return (
    <>
      <Status code={404}/>
      <h2>Not found</h2>;
    </>
  )
}

function App() {
  return(
    <div>
      <h1>Welcome to Next.js!</h1>
     

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
