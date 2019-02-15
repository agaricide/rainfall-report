import React from 'react';
import './About.css';

const About = React.memo(() => {
  return (
    <div className='about'>
      <p>
        Made with <span>love</span> by <span>agar</span> using the free <span>OpenData Rainfall Report</span>.
      </p>
      <p>
        <span>Dallas</span> places sensors throughout <span>the City</span> to measure rainfall.   This data provides readings in a variety of increments to inform <span>the citizenry</span> of rainfall rates/amounts, by location, within an elapsed time span.
      </p>
      <p>
        This information is provided with the understanding that it is <span>not guaranteed</span> to be <span>correct or complete</span>.
      </p>
    </div>
  );
});

export default About;