import React from 'react'
import './footer.css';
import Subheading from '../Subheading/Subheading'

const Footers = () => {
 
  return (
    <div className='app__footers section__padding'>
      <div className='app__footers-contactus'>
        <h4>Contact us</h4>
        <p className='p__opensans' style={{color:"var(--color-golden)"}}>9 W 53rd St,New York, NY 10019, USA</p>
        <p className='p__opensans' style={{color:"var(--color-golden)"}}>+91 7532952686</p>
        <p className='p__opensans' style={{color:"var(--color-golden)"}}>+91 8826250203</p>
      </div>
      <div className='app__footers-gerchit' style={{color:"var(--color-golden)"}}>
        <h1>Gericht</h1>
        <p className='p__opensans' style={{color:"var(--color-golden)"}}>'The best way to find yourself is to lose yourself in the service other</p>
        <Subheading/>
      </div>
      <div className='app__footers-workinghours'>
        <h4>Working Hours</h4>
        <p className='p__opensans' style={{color:"var(--color-golden)"}}>Mon-Fri:10:00am-02:00am</p>
        <p className='p__opensans' style={{color:"var(--color-golden)"}}>Sat-Sun:10:00am-03:00am</p>
      </div>
    </div>
  )
}

export default Footers