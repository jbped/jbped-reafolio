import React, { useState } from 'react';
import './navbar.scss'

function NavBar(props) {
  const {
    currentPage,
    setCurrentPage,
    pages = []
  } = props

  const [collapseNav, setCollapseNav] = useState(true);

  const updateNavStates = page => {
    updatePage(page);
    updateCollapseNav()
  }

  const updateCollapseNav = () => {
    setCollapseNav(!collapseNav);
  }

  const updatePage = page => {
    setCurrentPage(page)
  }
  
  return (
    <nav className="navbar sticky-nav sticky-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#about" onClick={() => { updateNavStates("About") }}>Jake Pedigo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={updateCollapseNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${collapseNav ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            {pages.map((page) => (
              <li className="nav-item" key={page.name}>
                <span className={`nav-link ${page === currentPage && 'active'}`} onClick={() => {updateNavStates(page)}}>{page.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;