import React, { useState } from 'react';
import './navbar.scss'

function NavBar(props) {
  const {
    currentPage,
    setCurrentPage,
    pages = []
  } = props

  return (
    <nav class="navbar sticky-nav sticky-top navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={() => { setCurrentPage("About") }}>Jake Pedigo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {pages.map((page) => (
              <li class="nav-item">
                <a class={`nav-link ${page === currentPage && 'active'}`} onClick={() => { setCurrentPage(page) }}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;