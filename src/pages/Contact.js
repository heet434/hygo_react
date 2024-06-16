import React from 'react'
import './Contact.css';

import hyacinth2 from '../assets/hyacinth2.jpg';

function Contact() {
  return (
    <div className="page" id= "contact">
        <div className="contact-image">
            <img src={hyacinth2} alt="hyacinth2" />
        </div>
        <div className="contact-content" id="contact-content">
            <div><h1>CONTACT US</h1></div>
            <div>
                <p> Phone: 9825773190</p>
                <p> Email: hiheet04@gmail.com </p>
            </div>
        </div>
        {/* <div className="contact-image">
            <img src={hyacinth2} alt="hyacinth2" />
        </div> */}
    </div>
  )
}

export default Contact
