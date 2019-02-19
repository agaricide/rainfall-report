import React, { useState } from 'react';
import './CTA.css';
import gps from '../../icons/gps/gps-1.svg';
import gpsClicked from '../../icons/gps/gps-3.svg';

interface CTAProps {
    onClick: Function;
}

type ButtonStates = 'untouched' | 'active' | 'loading';

const CTA = React.memo((props: CTAProps) => {
  const [buttonState, setButtonState] = useState<ButtonStates>('untouched');

  const handleMouseUp = () => {
    setButtonState('loading');
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    setButtonState('active');
    document.addEventListener('mouseup', handleMouseUp);
    props.onClick();
  };

  const content: { [key: string]: JSX.Element } = {
    untouched: <span><img src={gps} /> find sensor</span>,
    active: <span><img src={gpsClicked} /> find sensor</span>,
    loading: <span><img className='loading' src={gps} /> find sensor</span>
  };

  return (
    <section className='cta'>
      <h1>
        Use <b>gps</b> to find nearest <b>rainfall sensor</b>
      </h1>
      <button onMouseDown={handleMouseDown}>
        {content[buttonState]}
      </button>
    </section>
  );
});

export default CTA;