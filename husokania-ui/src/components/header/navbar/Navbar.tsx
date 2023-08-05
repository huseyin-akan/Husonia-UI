import "./Navbar.css";
import reactLogo from '../../../assets/react.svg';
import { useState } from "react";
import { NavLink } from "react-router-dom";

export interface NavbarItem{
  displayName :string;
  routeUrl :string;
}

const Navbar :React.FC = () => {

  const navbarItems : NavbarItem[] = [
    {displayName: 'Home', routeUrl: '/'},
    {displayName: 'Blog', routeUrl: '/blog'},
    {displayName: 'Utilities', routeUrl: '/utilities'},
    {displayName: 'About Me', routeUrl: '/about-me'},
    {displayName: 'Contact', routeUrl: '/contact-me'},
  ]

  const [activeItem, setActiveItem] = useState<NavbarItem>(navbarItems[0]);

  const handleItemClick = (item: NavbarItem) => {
    setActiveItem(item);
  };

  return (
    <div className="hus-navbar">
      <div className="hus-navbar-left">
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <span className="hus-neon">Husoka</span>
      </div>
      <div className="hus-navbar-menu-icon">
        <i className="fa-solid fa-bars"></i>
      </div>

      <nav className="navbar">
        {navbarItems.map((item : NavbarItem, index : number)  => 
          <NavLink key={index} to={item.routeUrl} className={activeItem.routeUrl === item.routeUrl ? 'hus-navbar-item active' : 'hus-navbar-item'} 
          onClick={() => handleItemClick(item)}>
          {item.displayName} 
          </NavLink>
        )}
        
      </nav>
    </div>
  );
};

export default Navbar;
