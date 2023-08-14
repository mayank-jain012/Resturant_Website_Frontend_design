import React from 'react';
import './cheif.css';
import { Subheading } from '../../component'
import { images } from '../../constants'
const Cheif = () => {
  return (
    <div className='app__bg section__padding app__wrapper'>
      <div className=' app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef' />
      </div>
      <div className='app__wrapper_info'>
        <Subheading title="Chef's World" />
        <h1 className='headtext__cormorant'>What We Beleive In</h1>
        <div className='app__cheif-content'>
          <div className='app__chef-quotes'>
            <img src={images.quote} />
            <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto illo aliquid labore aperiam minus magnam? Deserunt quae, veniam modi, magni explicabo neque temporibus ullam in alias rerum, eius exercitationem nulla! </p>
          </div>
         

        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign' />
          
        </div>


      </div>
    </div>
  )
}

export default Cheif