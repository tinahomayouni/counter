import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../../container/header";
import { useSelector ,useDispatch} from 'react-redux';
import { fetchData } from '../../reducers/async/action';


function AsyncAction() {
    const stateF = useSelector((state) => state.asyncReducer.loading)
    const dispatch = useDispatch()

    return (
        <>
        <Header>
            <nav className="header-about">
                
            <Link to="/">Home</Link>
            </nav>
        </Header>
        <div>
        {console.log(stateF)}
            AsyncAction
        <button onClick={(()=>dispatch(fetchData))}>{stateF}</button>
        </div>
        </>
    )
}

export default AsyncAction
