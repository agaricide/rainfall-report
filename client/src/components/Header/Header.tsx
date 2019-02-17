import React from 'react';
import './Header.css';

interface HeaderProps {
  goTo: (view: string) => any;
}

const Header = React.memo((props: HeaderProps) => {
  return (
    <header>
      <a className='logo' onClick={() => props.goTo('CTA')}>Dallas Rain Report</a>
      <nav>
        <ul className='views'>
          <li>
            <a onClick={() => props.goTo('CTA')}>
              Report
            </a>
          </li>
          <li>
            <a onClick={() => props.goTo('About')}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;