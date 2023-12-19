import React from "react";
import '../Footerfolder/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () =>{
    return(
        <>
         <div className="footer">
            <p>GorkCoder - All Rights Reserved.</p>


            <div className="icons">
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
             
            </div>
           
         </div>
        </>
    )
}

export default Footer;