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
    <nav className="navbar sticky-nav sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand nav-text text-primary fst-italic fw-bolder fs-1 text-uppercase" href="/" onClick={() => { updateNavStates({name: "About"}) }}>Jake Pedigo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={updateCollapseNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${collapseNav ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav transparent">
            {pages.map((page) => (
              <li className="transparent nav-item " key={page.name}>
                <span className={`nav-link nav-text no-select ${page === currentPage && 'active text-uppercase fw-bold'} fs-4`} onClick={() => {updateNavStates(page)}}>{page.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;