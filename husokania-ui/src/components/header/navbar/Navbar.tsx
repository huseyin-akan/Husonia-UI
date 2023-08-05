import "./Navbar.css";
import reactLogo from '../../../assets/react.svg';
import { useState } from "react";
import { NavLink, useLocation  } from "react-router-dom";

interface NavbarItem{
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

  const location = useLocation();
  const currentRoute = location.pathname; //TODO-HUS burada sallıyorum blog/1/2 gibi bir sayfalama olunca burası nasıl çalışacak. 
  //TODO-HUS yine aynı şekilde /blog/husolasmanin-onemi seklinde olunca ne olacak
  //TODO-HUS yine aynı şekilde navbarda görüntülenmeyen bir route olursa ne olacak? Örnek : /husolaşmak ama navbarda yokken router'da var.
  const theCurrentActiveItem = navbarItems.find(x => x.routeUrl === currentRoute)
  if(theCurrentActiveItem === undefined) throw new Error('Unexpected Route') //TODO-HUS Başka bir şey mi yapsak burada?

  const [activeItem, setActiveItem] = useState<NavbarItem>(theCurrentActiveItem);

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
        {navbarItems.map((item : NavbarItem)  => {
          console.log(item);
          console.log(activeItem);
          console.log(activeItem.routeUrl === item.routeUrl);
          return <NavLink key={item.routeUrl} to={item.routeUrl} className={activeItem.routeUrl === item.routeUrl ? 'hus-navbar-item active' : 'hus-navbar-item'} 
          onClick={() => handleItemClick(item)}>
          {item.displayName} 
          </NavLink>
        }
          
        )}
        
      </nav>
    </div>
  );
};

export default Navbar;
