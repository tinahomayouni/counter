import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../../container/header";
import { useSelector ,useDispatch} from 'react-redux';
import { fetchData } from '../../reducers/async/action';


function AsyncAction() {
    const stateF = useSelector((state) => state.asyncReducer.loading)
    const stateData = useSelector((state) => state.asyncReducer.data)
    const dispatch = useDispatch()

    return (
        <>
        <Header>
            <nav className="header-about">
                <Link to="/">Home</Link>
            </nav>
        </Header>
        <div>
            <h1 className="center">AsyncAction</h1>
            {stateData.map((data,i)=>{
                return <h2>{data.name}</h2>
            })}
            <button onClick={()=> dispatch(fetchData)}></button>
        </div>
        </>
    )
}

export default AsyncAction
