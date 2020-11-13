import React from 'react'
import { NavLink } from "react-router-dom"

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-secondary">
        <ul className="navbar-nav">
            <li className="nav-item">
                <h5><NavLink className="nav-link title" to="/" exact>Todo List</NavLink></h5>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link title" to="/create" exact>Create New Note</NavLink>
            </li>
        </ul>
    </nav>
)