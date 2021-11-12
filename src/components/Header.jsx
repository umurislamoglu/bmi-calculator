import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <header className="d-flex justify-content-center py-3 bg-dark text-white">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link text-white">Calculator</Link></li>
        <li className="nav-item"><Link to="/profile"  className="nav-link text-white">Profile</Link></li>
      </ul>
    </header>
    )
}

export default Header
