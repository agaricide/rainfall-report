import React from 'react';
import './Footer.css';

interface FooterProps {
  coords: Coordinates
}

const Footer = React.memo((props: FooterProps) => {
  return (
    <footer>
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