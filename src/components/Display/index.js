import React, { useState } from 'react';
import './display.scss';

function Display() {
    const [projectDetails] = useState([
        {
            name: "Goal Getter",
            folder: "goal-getter",
            description:"Goal Getter is an app that helps you ACHIEVE your goals! Anything is possible when you make a plan with milestones and a date in mind! Simply create an account and get started on adding new goals!",
            technology: ["Node.js", "Sequelize"],
            deployedUrl: "https://goal-getters-app.herokuapp.com/",
            repo:"https://github.com/jbped/Goal-Getter",
            highlight: true//boolean
        },
        {
            name: "Cinamac!",
            folder: "cinamac",
            description:"Mobile responsive Movie app that uses API's to allow the user to get information on movies playing in theater, theaters nearby, daily/weekly trending movies/tv-show. User can also search for movies/tv-shows/actors to look up, which will provide a description, and a few facts about searched movie/tv-show, or bio on actor.",
            technology: ["HTML", "CSS - Bootstrap", "Javascript - JQuery", "API - The Movie Database (TMDB)"],
            deployedUrl: "https://jbped.github.io/Cinamac/",
            repo:"https://github.com/jbped/Cinamac",
            highlight: true//boolean
        },
        {
            name: "README.gen",
            folder: "readme-gen",
            description:"README.gen is a command line argument README.md file generator. It's purpose is to assist in the making of quality/professional READMEs with ease through guided command line questions. An example of a generated README file can be found within the ./dist folder of this repository.",
            technology: ["Javascript", "Node.js", "inquirer"],
            deployedUrl: "",
            repo:"https://github.com/jbped/README.gen",
            highlight: false//boolean
        },
        {
            name: "BrainPicker",
            folder: "brain-picker",
            description:"Take a shot at the BrainPicker challenge! The quiz is timed, 15 seconds per question. For each correct answer 5 seconds are added to the timer. Opposed to 10 seconds being removed for incorrect answers. The question and answers are dynamic.",
            technology: ["Javascript", "Node.js", "inquirer"],
            deployedUrl: "https://jbped.github.io/brain-picker/",
            repo:"https://github.com/jbped/brain-picker",
            highlight: false//boolean
        },
    ]);
    const highlightedProjects = [];
    const secondaryProjects = [];

    const highlightProjects = () => {
        projectDetails.filter(project => project.highlight === true ? highlightedProjects.push(project) : secondaryProjects.push(project))
    }

    highlightProjects()
    console.log("highlightedProjects", highlightedProjects, "secondaryProjects", secondaryProjects)

    return (
        <div className="container">
            <h1 className=""><span>Portfolio</span></h1>
            <section className="row">
                {highlightedProjects.map((project) => (
                    <div className="tile col-12 my-3 p-0">
                        <img src={require(`../../assets/images/${project.folder}/primary.png`).default} alt={project.name}></img>
                        <div className="overlay">
                            <h3 className="overlay-text mt-5 ml-5">{project.name}</h3> {/* Project Name */}
                            <p className="mx-5">{project.description}</p>{/* Project Description */}
                        </div>
                    </div>
                ))}
                {secondaryProjects.map((project) => (
                    <div className="tile col-6 my-3 p-0">
                        <img src={require(`../../assets/images/${project.folder}/primary.png`).default} alt={project.name}></img>
                        <div className="overlay">
                            <h3 className="overlay-text mt-3 ml-3">{project.name}</h3> {/* Project Name */}
                            <p className="mx-3">{project.description}</p>{/* Project Description */}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Display;