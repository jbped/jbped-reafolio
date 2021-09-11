import React from 'react';
import './project.scss';

export default function Project({ project, i, toggleModal }) {
    return (
        <>
            <img src={require(`../../assets/images/${project.folder}/primary.png`).default} alt={project.name}></img>
            <div className="overlay">
                <div className="overlay-details">
                    <h3 className="overlay-text text-uppercase" onClick={() => toggleModal(project, i)}>{project.name}</h3> {/* Project Name */}
                    <div className="d-flex justify-content-center transparent overlay-icons">
                        <a href={project.repo} target="_blank" rel="noreferrer"><i className="bi-github iconography github-ico mx-2"></i></a>
                        <a href={project.deployedUrl} target="_blank" rel="noreferrer"><i className="bi bi-link-45deg iconography link-ico mx-2"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
};