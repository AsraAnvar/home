import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Registration" />
      <h1 className="headtext__cormorant">Get In Touch With Us</h1>
      <p className="p__opensans">And never miss new experience!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Register</button>
    </div>
  </div>
);

export default Newsletter;
