import React from 'react'
import AboutCard from './AboutCards/AboutCard.js'
import AboutTopPage from './AboutTopPage.js'
import './Apropos.css'
import Footer from './Footer.js'

function Apropos() {
  return (
    <div>
      <div className='top'> 
      <AboutTopPage  />
      </div>
      <div class='cardsposition'>
      <AboutCard />
      <Footer />
      </div>
      
      
        
    </div>
  )
}

export default Apropos