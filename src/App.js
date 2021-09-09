import React, { useState } from 'react'
import './CustomBootstrap.scss'
import './App.scss'
import About from './components/About'
import Display from './components/Display'
import NavBar from './components/Navbar'

function App() {

  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact Me"
    },
    {
      name: "Resume"
    },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <div>
      <header className="">
        <NavBar 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></NavBar>
      </header>
      <main className="">
        <About></About>
        <Display></Display>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}

export default App;
