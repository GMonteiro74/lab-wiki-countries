import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
        
          <NavLink exact to='/' className="navbar-brand">WikiCountries
          </NavLink>
   
      </nav>
    )
}
