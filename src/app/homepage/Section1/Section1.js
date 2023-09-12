import React from 'react';
import './Section1.css';

function Section1() {
  return (
    <section className='Section1'>
      <div className='headingWrapper1'>
        <div className='Rectangle'></div>
        <p>What we do</p>
      </div>
      <h1>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
      <div className='serviceWrapper'>
        <div className='Block'>
          <div className='Icon first'></div>
          <h4>Web development</h4>
          <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
        </div>
        <div className='Block'>
          <div className='Icon second'></div>
          <h4>User experience & design</h4>
          <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
        </div>
        <div className='Block'>
          <div className='Icon third'></div>
          <h4>Mobile app development</h4>
          <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
        </div>
        <div className='Block'>
          <div className='Icon fourth'></div>
          <h4>Blockchain solutions</h4>
          <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
        </div>
      </div>
    </section>
  )
}

export default Section1