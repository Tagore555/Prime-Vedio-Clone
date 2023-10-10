/*import React from 'react';
import './css/navBar.css';
import primelogo from './css/prime8.png';
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-black p-0 pt-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={primelogo} alt="prime logo" className='prime-logo' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon hamburger-button"></span>
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
*/





import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/navBar.css';
import primelogo from './css/prime8.png';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-black p-0 pt-0">
      <Container fluid>
      <a className="navbar-brand" href="/"><img src={primelogo} alt="prime logo" className='prime-logo' /></a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 bg-black"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-white">Trending</Nav.Link>
            <Nav.Link href="#action2" className="text-white">Comedy</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown"  className='h'>
              <div className="nav-text">
              <div className='nav-inner'>
              <NavDropdown.Item href="#action3" className="text-white" id='con'>Continue Watching</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-white" id='tel'>Telugu</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-white" id='hin'>Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-white" id='eng'>English</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-white" id='com'>Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-white" id='sci'>Sci-fi</NavDropdown.Item>
              </div>
              </div>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;