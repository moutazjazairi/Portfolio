import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import React1 from "../asstes/React1.jpg"
import React2 from "../asstes/React2.jpg"



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>My name is Moutaz
                <br/>I'm a Software engineer / Front-end Developer / React framwork<br/> 
                <br/> Contact me for any inquires </p>
            <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>
        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img"alt="react image1 "/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent