import logo from "../assets/shared/logo.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";

const NavBar = () => {


  
  return (
    <div className="absolute w-full flex justify-between items-center pt-6 px-6">
      <img className="w-10 h-10" src={logo} alt="logo" />
      <img className="w-6 h-5" src={HamburgerIcon} alt="HamburgerIcon" />
    </div>
  );
};

export default NavBar;
