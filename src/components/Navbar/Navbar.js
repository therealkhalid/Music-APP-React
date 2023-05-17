import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4 p-3">
        <Link className="navbar-brand" to={'/'}>Music App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className='nav-link' aria-current="page" to={'/'}>Acceuil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  aria-current="page"to={'/favo'}>Favories</Link>
                </li>
            </ul>
            
        </div>
    </nav>
  )
}

export default Navbar
