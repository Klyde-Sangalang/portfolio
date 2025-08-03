import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
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
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>handleMenuClick('home')}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>handleMenuClick('about')}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>handleMenuClick('services')}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={()=>handleMenuClick('mywork')}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>handleMenuClick('contact')}>Contact</p></AnchorLink></li>
      </ul>
    </div>
  )
}

export default NavBar;