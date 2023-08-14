import React from 'react'
import './aboutus.css';
import images from '../../constants/images';
const Aboutus = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='aboutus' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'> About Us </h1>
          <img src={images.spoon} alt='spoon' className='spoon__image' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, id maiores. Natus iusto voluptatem ratione unde similique reiciendis libero architecto, accusantium molestiae neque, voluptate beatae, vero a quos dolorem laudantium!</p>
          <button type='button' className='custom__button'> know more</button>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='knife' />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'> Our history </h1>
          <img src={images.spoon} alt='spoon' className='spoon__image' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, id maiores. Natus iusto voluptatem ratione unde similique reiciendis libero architecto, accusantium molestiae neque, voluptate beatae, vero a quos dolorem laudantium!</p>
          <button type='button' className='custom__button'> know more</button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus