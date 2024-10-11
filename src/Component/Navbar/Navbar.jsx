import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return <>
   <nav className="navbar navbar-expand-lg shadow fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="home">
        <img src='https://www.breadfast.com/wp-content/themes/breadfast/website/images/breadfast-brand.svg'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item">
          <Link className="nav-link p-3" to="careers">Careers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-3" to="blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-3" to="covid">Covid-19</Link>
        </li>

       </ul>
    </div>
  </div>
</nav>
  
  
  </>
}
