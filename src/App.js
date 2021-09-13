import React, { useState } from 'react'
import './CustomBootstrap.scss'
import './App.scss'
import About from './components/About'
import Display from './components/Display'
import NavBar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'

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
          || (currentPage.name === 'Resume' &&
            (<Resume></Resume>))
        }
      </main>
      <footer className="d-flex flex-wrap justify-content-center pb-2 pt-3 section-backdrop">
        <h2 className="text-primary fst-italic fw-bolder no-select">
          Jake Pedigo <span className="fst-normal fw-lighter fs-5 no-select">&copy; 2021</span>
        </h2>
        <span className="fs-3 fw-bolder mx-3 no-select">|</span>
        <div>
          <a href="https://github.com/jbped" target="_blank" rel="noreferrer"><i className="bi-github iconography footer-icon mx-3"></i></a>
          <a href="https://www.linkedin.com/in/jacob-pedigo/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin iconography footer-icon mx-3"></i></a>
          <a href="https://stackoverflow.com/users/15526819/jbped" target="_blank" rel="noreferrer"><i className="fab fa-stack-overflow iconography footer-icon mx-3"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
