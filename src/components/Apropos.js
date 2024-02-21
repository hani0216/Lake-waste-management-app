import React from 'react'
import AboutCard from './AboutCards/AboutCard.js'
import AboutTopPage from './AboutTopPage.js'
import './Apropos.css'

function Apropos() {
  return (
    <div>
      <div className='top'> 
      <AboutTopPage  />
      </div>
      <div class='cardsposition'>
      <AboutCard />
      </div>
      
      
        
    </div>
  )
}

export default Apropos