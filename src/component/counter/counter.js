import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const stateAsCounter = useSelector((state) => state.counter); //CB function that return state.counter [state from redux]

  const dispatch = useDispatch();

  return (
    <>
      <h1>I'm A Cool Counter {stateAsCounter /*from redux state*/}</h1>
      <button onClick={(() => dispatch({ type: "INCREMENT" }))}>INCREMENT</button>
      <button onClick={(() => dispatch({ type: "DECREMENT" }))}>DECREMENT</button>
    </>
  )
}
