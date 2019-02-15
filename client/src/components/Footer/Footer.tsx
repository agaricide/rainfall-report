import React from 'react';
import './Footer.css';

interface FooterProps {
  coords: Coordinates
}

const Footer = React.memo((props: FooterProps) => {
  return (
    <footer className='footer'>
      {props.coords.latitude.toFixed(5)}, {props.coords.longitude.toFixed(5)}
    </footer>
  );
});

export default Footer;