import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../../container/header";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/async/action';


function AsyncAction() {
    const stateData = useSelector((state) => state.asyncReducer.data)
    const dispatch = useDispatch()

    return (
        <>
            <Header>
                <nav className="header-about">
                    <Link to="/home">Home</Link>
                </nav>
            </Header>
            <div>
                <h1 className="center">AsyncAction</h1>
                {stateData.map((data, i) => {
                    return <h2>{data.name}</h2>
                })}
                <button onClick={() => dispatch(fetchData)}></button>
            </div>
        </>
    )
}

export default AsyncAction
