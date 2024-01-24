import "./FooterStyles.css"
import React from 'react'
import {FaHome } from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaMailBulk , FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRigh:"2rem" }}/>
                    <div >
                        <p>Al Barsha 1<br/>United Arab Emirates,Dubai</p>
                        
                        
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                    +971566399817</h4>
                    
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}} /> Moutazjazairi77@gmail.com</h4>
                </div>
            </div>

            <div className="right">
            
            <Link to="/contact" className="btn btn-light">Contact</Link>
                <p>Follow to see more</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff" ,marginRight:"1rem" }}/>
                <FaTwitter size={20} style={{color:"#fff" ,marginRight:"1rem" }}/>
                <FaLinkedin size={20} style={{color:"#fff" ,marginRight:"1rem" }}/>
            </div>
                
            </div>
        </div>
    </div>
  )
  
}

export default Footer