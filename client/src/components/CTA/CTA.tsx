import React from 'react';

interface CTAProps {
    onClick: Function;
}

const CTA = (props: CTAProps) => {
  return (
    <button onClick={() => props.onClick()}>Get nearest sensor</button>
  );
};

export default CTA;