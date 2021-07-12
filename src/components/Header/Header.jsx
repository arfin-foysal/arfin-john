import React from 'react'
import logo from "../../images/logo.png"
import './Header.css'

export default function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="" />
         <nav className="navbar">
             <a href="/shop">Shop</a>
             <a href="/order">Order Review</a>
             <a href="/manage">Manage inventory Here</a>
             </nav>
        </div>
    )
}
