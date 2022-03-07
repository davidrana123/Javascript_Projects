import React from "react"
import {Link} from "react-router-dom"

let Nav = () => {
    return (
        <div>
            <h1>21_Nav</h1>
            <Link to="/">Home Page</Link>
            <Link to="/about">About Page</Link>
        </div>
    )
}

export default Nav;