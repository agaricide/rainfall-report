import React from 'react';
import './Header.css';
import gps from '../../icons/gps/gps-1.svg';

interface HeaderProps {
  goTo: (view: string) => any;
}

const Header = React.memo((props: HeaderProps) => {
  return (
    <header>
      <a className='logo' onClick={() => props.goTo('find')}>
        Dallas Rain Report
      </a>
      <nav>
        <ul className='views'>
          <li>
            <a onClick={() => props.goTo('find')}>
              Report
            </a>
          </li>
          <li>
            <a onClick={() => props.goTo('about')}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;