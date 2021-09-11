import React from 'react'
import './about.scss'

export default function About() {
    return (
        <article className="container mb-5 transparent">
            <h1 className="no-select text-uppercase text-primary">About Me</h1>
            <div className="row">
                <div className="col-lg-3 col-sm-12 mb-3">
                    <img src={require("../../assets/images/portfolio-picture.jpg").default} alt="Jake Pedigo Profile" className="w-100"/>
                </div>
                <div className="col-lg-9 col-sm-12">
                    <p className="fs-5"> Heyo! It seems that you have found your way to my page! Well to kick things off, my name is Jake Pedigo! I'm a twenty-something year old that is an aspiring front-end developer. Prior to my enrollment in the University of Utah Full-Stack Bootcamp I was predominantly self-taught in most of my knowledge. I have always been intrigued in technology and it has always been really easy for me to get lost in learning and testing out different  ideas. If you don't catch me at work or cranking out lines of code, you can find me spending time with friends and family!</p>
                </div>
            </div>
        </article>
    )
}