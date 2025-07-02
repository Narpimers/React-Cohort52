import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
        <Link to="/" className="nav">Products</Link>
        <Link to="/favorites" className="nav">Favorites</Link>
    </div>
  )
}

export default NavBar
