import React, { useState } from 'react';
import './Header.css';
import { NavLinks, NavButton } from './Header-Style';

function Header() {
  let [Active, setActive] = useState(false);
  return (
    <header>
      <nav className='Nav'>
        <div className='Logo'></div>
        <NavLinks linkslide={Active ? "translateX(0%)" : "translateX(100%)"}>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Industries</a></li>
          <li><a href='#'>Cases</a></li>
          <li><a href='#'>Contact</a></li>
        </NavLinks>
        <NavButton buttonslide={Active ? "translateX(0%)" : "translateX(100%)"}>Let's Talk</NavButton>
      </nav>
      <button className="burgermenu" onClick={() => {setActive(!Active)}}>Menu</button>
      <div className='Banner'>
        <div className='bannerElements'>
          <h1>Live with Confidence</h1>
          <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
          <button>View project</button>
        </div>
      </div>
    </header>
  )
}

export default Header