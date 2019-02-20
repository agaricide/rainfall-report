import React from 'react';
import './Footer.css';
import gps from '../../icons/gps/gps-2.svg';

interface FooterProps {
  coords: Coordinates;
}

const Footer = React.memo((props: FooterProps) => {
  return (
    <footer>
      <span className='coordinate latitude'>
        {props.coords.latitude.toFixed(10)}
      </span>
      <span className='coordinate latitude'>
        {props.coords.longitude.toFixed(10)}
      </span>
    </footer>
  );
});

export default Footer;