import React from 'react';
import './Header.css';

interface HeaderProps {
    views: { [key: string]: JSX.Element };
    goTo: (view: string) => any;
}

const Header = (props: HeaderProps) => {
    return (
        <div className='header'>
            <div className='logo'>DFW Rain Report</div>
            <ul className='views'>
              <li onClick={() => props.goTo('CTA')}>
                Sensor
              </li>
              <li onClick={() => props.goTo('About')}>
                About
              </li>
            </ul>
        </div>
    );
};

export default Header;