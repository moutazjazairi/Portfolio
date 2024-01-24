import "./HeroimgStyles.css";

import React from 'react'

import IntroImg from "../asstes/Intro.jpg";

import {Link} from "react-router-dom";

export const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Moutaz Jazairi</p>
            <h1>Software Engineer</h1>
            <div >
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default Heroimg;