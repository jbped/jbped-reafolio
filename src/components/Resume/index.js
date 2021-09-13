import React, { useState, useEffect } from 'react';
import ResumeModal from '../Modals/ResumeModal';
import './resume.scss';

export default function Resume() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  
  useEffect(() => {
      isModalOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
  }, [isModalOpen]);

  return (
    <article className="container mb-5 transparent">
      {isModalOpen && (<ResumeModal onClose={toggleModal} />)}


      {/* RESUME SECTION */}
      <h1 className="no-select text-uppercase text-primary mb-4">Resume</h1>
      <section className="section-backdrop section-backdrop-borders p-4 d-flex flex-wrap justify-content-around">
        <div className="transparent resume-interactions no-select" onClick={toggleModal}>
          <i className="far fa-file iconography res-icon"></i>
          <span className="fw-italic fs-4">&nbsp;View Resume</span>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=0B906ldvtk24MU2p3TElGRGk3MUk" className="resume-interactions no-decoration no-select">
          <i className="bi bi-download iconography res-icon"></i>
          <span className="fw-italic fs-4">&nbsp;Download</span>
        </a>
      </section>

      {/* Proficiencies Section */}
      <h1 className="no-select text-uppercase text-primary my-4">Proficiencies</h1>
      <section className="section-backdrop section-backdrop-borders p-4">

        {/* HTML/CSS */}
        <div className="row mb-3">
          <div className="col-lg-2 col-sm-12 my-auto">
            <p className="fs-4 my-auto">HTML/CSS:</p>
          </div>
          <div className="progress col-lg-10 col-sm-12 my-auto px-0 bg-light" style={{ height: "2rem", borderRadius: "0" }}>
            <div className="progress-bar text-dark fs-5" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">6</div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="row mb-3">
          <div className="col-lg-2 col-sm-12 my-auto">
            <p className="fs-4 my-auto">JavaScript:</p>
          </div>
          <div className="progress col-lg-10 col-sm-12 my-auto px-0 bg-light" style={{ height: "2rem", borderRadius: "0" }}>
            <div className="progress-bar text-dark fs-5" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">6</div>
          </div>
        </div>

        {/* RESTful APIs*/}
        <div className="row mb-3">
          <div className="col-lg-2 col-sm-12 my-auto">
            <p className="fs-4 my-auto">RESTful APIs:</p>
          </div>
          <div className="progress col-lg-10 col-sm-12 my-auto px-0 bg-light" style={{ height: "2rem", borderRadius: "0" }}>
            <div className="progress-bar text-dark fs-5" role="progressbar" style={{ width: "70%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">7</div>
          </div>
        </div>

        {/* REACT */}
        <div className="row mb-3">
          <div className="col-lg-2 col-sm-12 my-auto">
            <p className="fs-4 my-auto">React:</p>
          </div>
          <div className="progress col-lg-10 col-sm-12 my-auto px-0 bg-light" style={{ height: "2rem", borderRadius: "0" }}>
            <div className="progress-bar text-dark fs-5" role="progressbar" style={{ width: "30%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">3</div>
          </div>
        </div>

        {/* Communication Skills */}
        <div className="row mb-3">
          <div className="col-lg-2 col-sm-12 my-auto">
            <p className="fs-4 my-auto">Communication:</p>
          </div>
          <div className="progress col-lg-10 col-sm-12 my-auto px-0 bg-light" style={{ height: "2rem", borderRadius: "0" }}>
            <div className="progress-bar text-dark fs-5" role="progressbar" style={{ width: "90%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">9</div>
          </div>
        </div>

        {/* Ultimate Googling Powers */}
        <div className="row mb-3">
          <div className="col-lg-2 col-sm-12 my-auto">
            <p className="fs-4 my-auto">Google-fu:</p>
          </div>
          <div className="progress col-lg-10 col-sm-12 my-auto px-0 bg-light" style={{ height: "2rem", borderRadius: "0" }}>
            <div className="progress-bar text-dark fs-1" role="progressbar" style={{ width: "100%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">&infin;</div>
          </div>
        </div>
      </section>
    </article>
  )
}