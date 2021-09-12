import React, { useState } from 'react'
import './CustomBootstrap.scss'
import './App.scss'
import About from './components/About'
import Display from './components/Display'
import NavBar from './components/Navbar'
import ContactForm from './components/ContactForm'

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
    <div className="parent-div ">
      <header className="">
        <NavBar
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></NavBar>
      </header>
      <main className="mb-5">
        {
          (currentPage.name === 'About' &&
            (<About></About>))
          || (currentPage.name === 'Portfolio' &&
            (<Display></Display>))
          || (currentPage.name === 'Contact Me' &&
            (<ContactForm></ContactForm>))
        }
      </main>
      <footer className="d-flex justify-content-center py-2">
        <h2 className="text-primary fst-italic fw-bolder">
          Jake Pedigo <span className="fst-normal fw-lighter fs-5">&copy; 2021</span>
        </h2>
        <span className="fs-3 fw-bolder mx-3">|</span>
        <a href="https://github.com/jbped" target="_blank" rel="noreferrer"><i className="bi-github iconography footer-icon mx-3"></i></a>
        <a href="https://www.linkedin.com/in/jacob-pedigo/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin iconography footer-icon mx-3"></i></a>
        <a href="https://stackoverflow.com/users/15526819/jbped" target="_blank" rel="noreferrer"><i class="fab fa-stack-overflow iconography footer-icon mx-3"></i></a>
      </footer>
    </div>
  );
}

export default App;
