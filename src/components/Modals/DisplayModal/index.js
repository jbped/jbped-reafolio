import React from 'react';
import '../modal.scss';
import './displayModal.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DisplayModal({ selectedProject, onClose }) {
    const { name, folder, description, technology, deployedUrl, repo } = selectedProject;

    // function importImages(r) {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    //   }
    // const images = importImages(require.context(`../../assets/images/${folder}`, false, /.(png|jpe?g|svg)$/));

    // console.log(images)

    var settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };

    return (
        <div className="modalBackdrop">
            <div className="modalContainer p-4">
                <div className="modalHeader transparent">
                    <div className="transparent d-flex flex-wrap">
                        <h2 className="modalTitle primary-title me-3 mb-0 text-uppercase">{name}</h2>
                        <div className="link-icons transparent ">
                            <a href={repo} target="_blank" rel="noreferrer" className="me-3"><i className="bi-github iconography github-ico me-2"></i><span>Repository</span></a>
                            <a href={deployedUrl} target="_blank" rel="noreferrer" className="me-3"><i className="bi bi-link-45deg iconography link-ico me-1"></i><span>Deployed Url</span></a>
                        </div>
                    </div>
                    <button type="button" className="close-btn transparent" onClick={onClose}><i className="bi bi-x close-btn-ico transparent"></i></button>
                </div>
                <div className="p-4 transparent">
                    <Slider {...settings}>
                        <div>
                            <img src={require(`../../../assets/images/${folder}/1.png`).default} alt={`${name}-1`} className="w-100" />
                        </div>
                        <div>
                            <img src={require(`../../../assets/images/${folder}/2.png`).default} alt={`${name}-2`} className="w-100" />
                        </div>
                        <div>
                            <img src={require(`../../../assets/images/${folder}/3.png`).default} alt={`${name}-3`} className="w-100" />
                        </div>
                    </Slider>
                </div>

                {/* <img src={require(`../../assets/small/${category}/${index}.jpg`).default} alt={category} /> */}
                <h4 className="modalTitle transparent text-uppercase">Description</h4>
                <p>{description}</p>

                <h4 className="modalTitle transparent text-uppercase">Tech Used</h4>
                <div className="tech-list transparent">
                    {technology.map(tech => (
                        <span key={`${tech}`} className="transparent">| {tech}</span>
                    ))}
                </div>
            </div>
        </div>

    );
};