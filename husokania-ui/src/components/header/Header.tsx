import { useEffect } from "react";
import Navbar from "./navbar/Navbar";

const Header : React.FC = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector(".hus-navbar") as HTMLElement;
    navbar.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <header>
      <Navbar />
    </header>
  );
};
 
export default Header;
