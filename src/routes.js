import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './container/home';
import Contact from './component/contact/contact';
import About from './component/about/about';
import Posts from './component/posts/posts';

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  )
}
export default Routes
