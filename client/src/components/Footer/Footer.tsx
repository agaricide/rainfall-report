import React from 'react';
import './Footer.css';
import gps from '../../icons/gps/gps-2.svg';

interface FooterProps {
  coords: Coordinates;
}

const Footer = React.memo((props: FooterProps) => {
  return (
    <footer>
      {/* <img src={gps} /> */}
      <span className='coordinate latitude'>
        {props.coords.latitude || '0.00'}
      </span>
      <span className='coordinate latitude'>
        {props.coords.longitude || '0.00'}
      </span>
    </footer>
  );
});

export default Footer;