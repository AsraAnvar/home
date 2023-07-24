import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Event.css';

const Event = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.event} alt="event_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Coordinator's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__event-content">
        <div className="app__event-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">To achieve great things, two things are needed: a plan and not quite enough time.</p>
        </div>
        <p className="p__opensans"> SeaBreeze is one of the best Wedding and Event management in mananr. which offers wedding decorations, party planning, photographs and catering services. </p>
      </div>
      <div className="app__event-sign">
        <p>Mrs.Fernando</p>
        <p className="p__opensans">Event Coordinator</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Event;
