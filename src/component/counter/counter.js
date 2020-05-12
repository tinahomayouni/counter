import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const stateAsCounter = useSelector((state) => state.counter); //CB function that return state.counter [state from redux]

  const dispatch = useDispatch();

  return (
    <>
      <h1>I'm A Cool Counter : {stateAsCounter /*from redux state*/}</h1>
      <div className="btnWrp">
        <button className="inc" onClick={(() => dispatch({ type: "INCREMENT" }))}>INCREMENT</button>
        <button className="dec" onClick={(() => dispatch({ type: "DECREMENT" }))}>DECREMENT</button>
      </div>
    </>
  )
}
