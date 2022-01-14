import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand">Fitness Tracker</Link>
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to='/' className="nav-link" >Excercises </Link>
                </li>
                <li className="nav-item">
                    <Link to='/create' className="nav-link">Create Excercise Log</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/user' className="nav-link" >Create User</Link>
                </li>
                </ul>
            </div>
            </nav>
    )
}

export default Navbar
