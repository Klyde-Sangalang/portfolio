import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import './NavBar.css';

const NavBar = () => {
  const [menu, setMenu] = useState('home');
  const [open, setOpen] = useState(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    setOpen(false); // close menu on link click
  };

  return (
    <div className='navbar'>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "bar open" : "bar"}></div>
        <div className={open ? "bar open" : "bar"}></div>
        <div className={open ? "bar open" : "bar"}></div>
      </div>

      <ul className={`nav-menu${open ? " open" : ""}`}>
        <li>
          <HashLink smooth to="#home" className='anchor-link'>
            <p onClick={() => handleMenuClick('home')}>Home</p>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className='anchor-link'>
            <p onClick={() => handleMenuClick('about')}>About</p>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#services" className='anchor-link'>
            <p onClick={() => handleMenuClick('services')}>Services</p>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#mywork" className='anchor-link'>
            <p onClick={() => handleMenuClick('mywork')}>Portfolio</p>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className='anchor-link'>
            <p onClick={() => handleMenuClick('contact')}>Contact</p>
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
