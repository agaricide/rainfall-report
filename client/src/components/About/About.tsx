import React from 'react';
import './About.css';

const About = React.memo(() => {
  return (
    <section className='about'>
      <p>
        Made with <b>love</b> by <b>agar</b> using the free <b>
        OpenData Rainfall Report</b>.
      </p>
      <p>
        <b>Dallas</b> places sensors throughout <b>the City </b> 
        to measure rainfall. This data provides readings in a variety of
        increments to inform <b>the citizenry</b> of rainfall
        rates/amounts, by location, within an elapsed time b.
      </p>
      <p>
        This information is provided with the understanding that it is
        <b> not guaranteed</b> to be<b> correct or complete</b> and
        conclusions drawn from such information are the sole responsibility 
        of <b>the Citizen</b>.
      </p>
    </section>
  );
});

export default About;