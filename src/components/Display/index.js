import React, { useState, useEffect } from 'react';
import DisplayModal from '../Modals/DisplayModal';
import Project from '../Project';
import './display.scss';

function Display() {
    const [projectDetails] = useState([
        {
            name: "CooKit",
            folder: "cookit",
            description: "This app will change the way you see recipes! You can easily add your own recipes and save them for later or see what the newest recipes are from others around the world. Saving recipes from others is easy and if you like something in their recipes you can easily edit it and take it out!",
            technology: ["React", "Material UI", "Node.js", "Mongoose", "React Beautiful DnD"],
            deployedUrl: "https://cookit-book.herokuapp.com/",
            repo: "https://github.com/jbped/cookit",
            highlight: true//boolean
        },
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
        {
            name: "Weatherly",
            folder: "weatherly",
            description: "Weatherly is a simple weather app. Upon load user is asked to allow location services. This will allow the application to get the current weather for their location. The user can then search for a specific location, the locations weather will be displayed and the the location will be saved to the previous locations array allowing for quick access to previous searches.",
            technology: ["HTML", "CSS - Bootstrap", "Javascript/JQuery", "API - OpenWeather One Call & OpenWeather Geolocation"],
            deployedUrl: "https://jbped.github.io/weatherly/",
            repo: "https://github.com/jbped/weatherly",
            highlight: false//boolean
        },
        {
            name: "Scratch Note",
            folder: "scratch-note",
            description: "Scratch Note is an Node.js/Express.js notebook. Users are able to add, delete, and review notes that they have written. It provides an simple experience, that makes it quick and easy to scratch down thoughts and ideas.",
            technology: ["HTML", "CSS", "Javascript", "Node.js", "Express.js"],
            deployedUrl: "https://scratch-note.herokuapp.com/",
            repo: "https://github.com/jbped/scratch-note",
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
            {isModalOpen && (<DisplayModal selectedProject={selectedProject} onClose={toggleModal} />)}
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