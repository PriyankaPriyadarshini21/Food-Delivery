import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="discount-text">
        {/* //helo */}
        <h3>Get Discount Voucher Up To 20%</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <img src="/assets/images/bannerGirl.svg" alt="Promotional banner" className='banner-image' />
      <img src="/assets/images/ellipse.svg" alt="Ellipse" className='ellipse-one' />
      <img src="/assets/images/ellipse1.svg" alt="Ellipse1" className='ellipse-two' />
      <img src="/assets/images/ellipse2.svg" alt="Ellipse2" className='ellipse-three' />
    </div>
  );
};

export default Banner;
