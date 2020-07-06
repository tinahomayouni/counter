import React, { useState } from 'react';
import Header from '../../../container/header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, loginSuccess } from '../../../reducers/login/action';
import Axios from 'axios';

import "./loginForm.scss"


function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");//handle by components
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e && e.preventDefault();
    dispatch(loginSuccess({
      name: name,
      password: password
    }
    ));
    const header = {
      headers: { "token": "QpwL5tke4Pnpja7X4" }
    }
    Axios({
      header,
      url: "https://reqres.in/api/login",
      type: "POST",
      data: loginSuccess({
        name: name,
        password: password
      }),
      success: function (response) {
        console.log(response);
      }
    });
  }

  return (
    <>
      <Header>
        <nav className="header-about">
          <Link to="/">Home</Link>
        </nav>
      </Header>
      <form onSubmit={e => onSubmit(e)}>
        <input name="email" value={name} onChange={(e) => setName(e.target.value)} width="50%" type="text"></input>
        <input name="password" value={password} onChange={(e) => setPass(e.target.value)} width="50%" type="password"></input>
        <button type="submit" name="submit" >submit</button>
      </form>
    </>
  )
}

export default LoginForm
