import React from 'react';
import './css/navBar.css';
import primelogo from './css/prime3.png';
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-black p-2 pt-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={primelogo} alt="prime logo" className='prime-logo' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse att-class " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active navbar-ele text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navbar-ele text-white" aria-current="page" href="/">Trending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navbar-ele text-white" aria-current="page" href="/">Comedy</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active navbar-ele dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white hoverEle" href="#continueWatching">Continue Watching</a></li>
                  <li><a className="dropdown-item text-white hoverEle" href="/">Telugu</a></li>
                  <li><a className="dropdown-item text-white hoverEle" href="/">Hindi</a></li>
                  <li><a className="dropdown-item text-white hoverEle" href="/">English</a></li>
                  <li><a className="dropdown-item text-white hoverEle" href="/">Comedy</a></li>
                  <li><a className="dropdown-item text-white hoverEle" href="/">Thriller</a></li>
                  <li><a className="dropdown-item text-white hoverEle" href="/">Sci-fi</a></li>
                  <li><hr className="dropdown-divider" /></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active navbar-ele text-white" aria-current="page" href="/">Subscription</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
