import React from 'react'
import {NavLink} from "react-router-dom";
import './Nav.scss'

const Nav = (props) => {
    return (
        <div className="nav-bar">
            <ul className="nav-bar__list">
                <li className="nav-bar__item">
                    <NavLink className="nav-bar__link"  to="/a" >Головна</NavLink>
                </li>
                <li className="nav-bar__item">
                    <NavLink className="nav-bar__link"  to="/a" >e</NavLink>
                </li>
                <li className="nav-bar__item">
                    <NavLink className="nav-bar__link"  to="/a" >dfsd</NavLink>
                </li>
                <li className="nav-bar__item">
                    <NavLink className="nav-bar__link"  to="/a" >Голdddовна</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Nav