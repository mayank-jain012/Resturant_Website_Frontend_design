import React from 'react'
import './gallery.css'

import { Carousel } from 'react-responsive-carousel';
import "react-multi-carousel/lib/styles.css"

import { images } from '../../constants';
import { Subheading } from '../../component'
const Gallery = () => {
  return (
    <div className='app__gallery section__padding'>
      <div className='app__gallery-content'>
        <Subheading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='app__gallery-content_p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, iure quisquam iusto eaque porro doloribus quod dolorem nemo nisi asperiores, sequi quos fuga reiciendis voluptatem repellendus ipsam. Omnis, voluptates consequuntur.</p>
        <button className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-image'>
        <img src={images.gallery01} alt='gallery'/>
      </div>
    </div>

  )
}

export default Gallery