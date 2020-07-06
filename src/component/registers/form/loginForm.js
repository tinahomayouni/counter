import React, { useState } from 'react';
import Header from '../../../container/header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerLoading } from '../../../reducers/register/action';
import "./loginForm.scss"



function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  // const nameState = useSelector(state => state.registerReducer.name)
  // const passwordState = useSelector(state => state.registerReducer.password)
  // const { name, password } = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e && e.preventDefault();
    dispatch(registerLoading({
      name: name,
      password: password
    }));
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
