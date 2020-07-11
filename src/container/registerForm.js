import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './header'
import { Link, useHistory } from 'react-router-dom'
import { register, registerFail, registerSuccess } from "../redux/register/action"
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./home.scss"


function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, err } = useSelector(state => state.registerReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(history);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(register({ email, password }))

    doRegisterRequest();
  }

  async function doRegisterRequest() {
    try {
      const data = await Axios({
        url: "https://reqres.in/api/register",
        method: 'post',
        data: { email, password }
      })
      dispatch(registerSuccess(data.data))
      console.log(data.request.status)
      toast(data.request.status)

      window.localStorage.setItem('register token', data.data.token)
      setTimeout(function () { history.replace('/dashboard') }, 3000);


    } catch (error) {
      // console.log(error.response.data.error, 'eror') remember response to show your error
      dispatch(registerFail(error.response.data.error))
      toast.error(error.response.data.error)
    }
  }

  return (
    <>
      <Header>
        <nav className="header-about">
          <Link to="/home">home</Link>
        </nav>
      </Header>
      <ToastContainer />
      <p>{err ? err : ''}</p>
      <form onSubmit={onSubmit} id="register">
        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" />
        <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" />
        <p>
          "email": "eve.holt@reqres.in",
          "password": "pistol"
</p>
        <button>{loading ? 'loading' : 'submit'}</button>
      </form>
    </>
  )
}

export default RegisterForm
