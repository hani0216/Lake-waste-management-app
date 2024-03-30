import React from 'react'
import AboutCardHani from './AboutCardHani'
import AboutCardMaram from './AboutCardMaram';
import AboutCardMeriem from './AboutCardMeriem'
import './About.css' ;



function AboutCard() {
  return (
    <div className='contenaire'>
    <AboutCardHani  className='elt' />
    <AboutCardMaram  className='elt'  />
    <AboutCardMeriem  className='elt'  />
    </div>
  )
}

export default AboutCard