import React from 'react';
import './CTA.css';

interface CTAProps {
    onClick: Function;
}

const CTA = (props: CTAProps) => {
  return (
    <div className='cta'>
      <p>
        Use <span>gps</span> to find nearest <span>rainfall sensor</span>
      </p>
      <button onClick={() => props.onClick()}>find sensor</button>
    </div>
  );
};

export default CTA;