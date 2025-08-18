import { useState } from 'react';

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
        <li><a href='#home'><p onClick={()=>handleMenuClick('home')}>Home</p></a></li>
        <li><a href="#about"><p onClick={()=>handleMenuClick('about')}>About</p></a></li>
        <li><a href='#services'><p onClick={()=>handleMenuClick('services')}>Services</p></a></li>
        <li><a href="#mywork"><p onClick={()=>handleMenuClick('mywork')}>Portfolio</p></a></li>
        <li><a href="#contact"><p onClick={()=>handleMenuClick('contact')}>Contact</p></a></li>
      </ul>
    </div>
  )
}

export default NavBar;