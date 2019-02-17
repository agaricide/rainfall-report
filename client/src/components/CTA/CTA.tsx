import React from 'react';
import './CTA.css';

interface CTAProps {
    onClick: Function;
}

const CTA = React.memo((props: CTAProps) => {
  return (
    <section className='cta'>
      <p>
        Use <b>gps</b> to find nearest <b>rainfall sensor</b>
      </p>
      <button onClick={() => props.onClick()}>find sensor</button>
    </section>
  );
});

export default CTA;