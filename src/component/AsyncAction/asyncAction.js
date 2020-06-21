import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../../container/header";
function AsyncAction() {
    return (
        <>
        <Header>
            <nav className="header-about">
            <Link to="/">Home</Link>
            </nav>
        </Header>
        <div>
            AsyncAction
        </div>
        </>
    )
}

export default AsyncAction
