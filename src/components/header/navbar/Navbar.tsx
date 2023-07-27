import Image from 'next/image';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

export interface NavbarProps {
  title: string;
}

const Navbar = (props: NavbarProps) => {
  const asd = 123;

  return (
    <div className="hus-navbar">
      <Image
        src="../../assets/husonia.svg"
        alt="Logo"
        width={40}
        height={40}
      />
      <FontAwesomeIcon className="hus-navbar-menu-icon" icon={faBars} />
      <nav className="navbar">
        <a href='/' className='hus-navbar-item active'>
          Home
        </a>
        <a href='/' className='hus-navbar-item'>
          Blog
        </a>
        <a href='/utilities' className='hus-navbar-item'>
          Utilities
        </a>
        <a href='/' className='hus-navbar-item'>
          About Me
        </a>
        <a href='/' className='hus-navbar-item'>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
