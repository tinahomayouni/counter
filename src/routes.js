import React from 'react'
import { Switch, Route } from "react-router-dom";
import Contact from './component/contact/contact';
import About from './component/about/about';
import Posts from './component/posts/posts';
import AsyncAction from './component/AsyncAction/asyncAction';
import LoginForm from './container/loginForm';
import Home from './container/home';
import RegisterForm from './container/registerForm';

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/counter" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/asyncAction" component={AsyncAction} />
      </Switch>
    </>
  )
}
export default Routes
