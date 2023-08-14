import React from 'react'
import './footer.css'
import { Footers } from '../../component'
import { Newsletter } from '../../component'
const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-newsletter'>
        <Newsletter />
      </div>
      <div className='app__footer-footer'>
        <Footers />
      </div>

    </div>
  )
}

export default Footer