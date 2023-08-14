import React from 'react'
import './header.css'
import Subheading from '../../component/Subheading/Subheading'
import images from '../../constants/images'
const Header = () => {
  return (
    <div className='app__header section__padding app__wrapper' id='home'>
      <div className='app__wrapper_info'>
    <Subheading title="Chase the new flavor"/>
    <h1>The key to Fine Dine</h1>
    <p className='p__opensans' style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates modi sapiente velit tenetur esse exercitationem voluptatem nulla autem aliquid! Autem sequi velit, commodi iure ducimus quo saepe totam reprehenderit.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcomeimage'/>
      </div>
    </div>
  )
}

export default Header