import React, { useState, useEffect } from 'react';
import Modal from '../DisplayModal';
import Project from '../Project';
import './display.scss';

function Display() {
    const [projectDetails] = useState([
        {
            name: "Goal Getter",
            folder: "goal-getter",
            description: "Goal Getter is an app that helps you ACHIEVE your goals! Anything is possible when you make a plan with milestones and a date in mind! Simply create an account and get started on adding new goals!",
            technology: ["HTML", "CSS - Bootstrap", "Javascript - JQuery", "Node.js", "Sequelize"],
            deployedUrl: "https://goal-getters-app.herokuapp.com/",
            repo: "https://github.com/jbped/Goal-Getter",
            highlight: true//boolean
        },
        {
            name: "Cinamac!",
            folder: "cinamac",
            description: "Mobile responsive Movie app that uses API's to allow the user to get information on movies playing in theater, theaters nearby, daily/weekly trending movies/tv-show. User can also search for movies/tv-shows/actors to look up, which will provide a description, and a few facts about searched movie/tv-show, or bio on actor.",
            technology: ["HTML", "CSS - Bootstrap", "Javascript - JQuery", "API - The Movie Database (TMDB)"],
            deployedUrl: "https://jbped.github.io/Cinamac/",
            repo: "https://github.com/jbped/Cinamac",
            highlight: true//boolean
        },
        {
            name: "README.gen",
            folder: "readme-gen",
            description: "README.gen is a command line argument README.md file generator. It's purpose is to assist in the making of quality/professional READMEs with ease through guided command line questions. An example of a generated README file can be found within the ./dist folder of this repository.",
            technology: ["Javascript", "Node.js", "inquirer"],
            deployedUrl: "https://github.com/jbped/README.gen",
            repo: "https://github.com/jbped/README.gen",
            highlight: false//boolean
        },
        {
            name: "BrainPicker",
            folder: "brain-picker",
            description: "Take a shot at the BrainPicker challenge! The quiz is timed, 15 seconds per question. For each correct answer 5 seconds are added to the timer. Opposed to 10 seconds being removed for incorrect answers. The question and answers are dynamic.",
            technology: ["Javascript", "Node.js", "inquirer"],
            deployedUrl: "https://jbped.github.io/brain-picker/",
            repo: "https://github.com/jbped/brain-picker",
            highlight: false//boolean
        },
    ]);
    const highlightedProjects = [];
    const secondaryProjects = [];

    const highlightProjects = () => {
        projectDetails.filter(project => project.highlight === true ? highlightedProjects.push(project) : secondaryProjects.push(project))
    }

    const [selectedProject, setSelectedProject] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = (project, i) => {
        setSelectedProject({ ...project, index: i });
        setIsModalOpen(!isModalOpen);
    }

    highlightProjects()

    useEffect(() => {
        isModalOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [isModalOpen])

    // useEffect(() => {
    //     highlightProjects()
    // }, [])
    
    return (
        <div className="container">
            {isModalOpen && (<Modal selectedProject={selectedProject} onClose={toggleModal} />)}
            <h1 className="no-select text-uppercase text-primary">Portfolio</h1>
            <section className="row g-5 px-3 grid-gap">
                {highlightedProjects.map((project, i) => (
                    <div className="tile col-12 p-0" key={project.folder}>
                        <Project 
                            project={project}
                            i={i}
                            toggleModal={toggleModal}
                        />
                    </div>
                    ))}
                {secondaryProjects.map((project, i) => (
                    <div className="tile col-lg-6 col-sm-12 p-0" key={project.folder}>
                        <Project 
                            project={project}
                            i={i}
                            toggleModal={toggleModal}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Display;