import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { login, loginFail, loginSuccess } from '../redux/login/action';
import { useHistory, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './header';

import 'react-toastify/dist/ReactToastify.css';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, err } = useSelector(state => state.loginReducer);
  console.log('err', err)

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));

    doLoginRequest();


  };

  const doLoginRequest = async () => {
    try {
      const data = await axios({
        url: 'https://reqres.in/api/login',
        method: 'post',
        data: { email, password }
      });

      console.log(data, 'data');
      dispatch(loginSuccess(data.data));
      window.localStorage.setItem('login token', data.data.token);
      setTimeout(function () { history.push('/dashboard') }, 3000);
    } catch (e) {
      console.log(e.response.data.error, 'error in login');
      dispatch(loginFail(e.response.data.error));
      toast.error(e.response.data.error)
    }
  };

  return (
    <>
      <Header>
        <p>if you dont have account , now join us!!</p>
        <nav className="header-about">
          <Link to="/register">register</Link>
        </nav>
      </Header>
      <ToastContainer />
      <p>{err}</p>
      <form onSubmit={onSubmit} id="login">
        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <p>
          "email": "eve.holt@reqres.in",
    "password": "cityslicka"</p>
        <button>{loading ? 'Loading' : 'Submit'}</button>
      </form>
    </>
  );
}
export default LoginForm;