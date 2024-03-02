import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
        <div class="wrapper">
  <div class="title">
    <h1>CONTACTEZ-NOUS</h1>
  </div>
  <div class="contact-form">
    <div class="input-fields">
      <input type="text" class="input" placeholder="Name"></input>
      <input type="text" class="input" placeholder="Email Address"></input>
      <input type="text" class="input" placeholder="Phone"></input>
      <input type="text" class="input" placeholder="Subject"></input>
    </div>
    <div class="msg">
      <textarea className='textar' placeholder="Message"></textarea>
      <Link to="/PostContact"  class="btn">Envoyer </Link>    </div>
  </div>
</div>
    </div>
  )
}

export default Contact