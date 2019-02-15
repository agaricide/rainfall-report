import React from 'react';
import './Header.css';

interface HeaderProps {
  goTo: (view: string) => any;
}

const Header = React.memo((props: HeaderProps) => {
  return (
    <div className='header'>
      <div className='logo' onClick={() => props.goTo('CTA')} >Dallas Rain Report</div>
      <ul className='views'>
        <li onClick={() => props.goTo('CTA')}>
          Report
        </li>
        <li onClick={() => props.goTo('About')}>
          About
        </li>
      </ul>
    </div>
  );
});

export default Header;