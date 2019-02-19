import React from 'react';
import './About.css';
import agar from './agar.svg';

const OPEN_DATA = 'https://www.dallasopendata.com/Environment/Rainfall-Report/jus4-wys9';
const GH = 'https://github.com/agaricide';

const About = React.memo(() => {
  return (
    <section className='about'>
      <p>
        Made with <b>love</b> by <b>agar<span className='tm'>&trade;</span></b> using the free <b>
        <a href={OPEN_DATA}>OpenData Rainfall Report.</a></b>
      </p>
      <p>
        <b>Dallas</b> places sensors throughout <b>the City </b>
        to measure rainfall. This data provides readings in a variety of
        increments to inform <b>the citizenry</b> of rainfall
        rates/amounts, by location, within an elapsed time span.
      </p>
      <p>
        This information is provided with the understanding that it is
        <b> not guaranteed</b> to be<b> correct or complete</b> and
        conclusions drawn from such information are the sole responsibility
        of <b>the Citizen</b>.
      </p>
      <a href={GH}>
        <img src={agar} />
      </a>
    </section>
  );
});

export default About;