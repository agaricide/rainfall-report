import React, { FunctionComponent } from 'react';

interface Props {
    onClick: Function;
}

const CTA: FunctionComponent<Props> = (props: Props) => {

  const handleClick = () => {
    console.log('CTA click!');
  };

  return (
    <button onClick={() => props.onClick()}>Get nearest sensor</button>
  );
};

export default CTA;