import React from 'react'
import './newsletter.css';
import Subheading from '../Subheading/Subheading';
const Newsletter = () => {
  return (
    <div className='app__newsletter section__padding'>
      <div className='app__content'>
        <Subheading title='Newsletter'/>
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest episode</p>
      </div>
      <div className='app__email'>
        <input type='text' placeholder='Email Address' />
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter