import logo from "../assets/shared/logo.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] =
    useState<boolean>(false);
  const hamburderClickhandler = () => {
    setHamburgerMenuIsOpen(true);
  };
  const closeIconClickhandler = () => {
    setHamburgerMenuIsOpen(false);
  };
  const destinationClickeHandler = () => {
    navigate(`/destination/Moon`);
    setHamburgerMenuIsOpen(false);
  };
  const crewClickeHandler = () => {
    navigate(`/crew/Douglas Hurley`);
    setHamburgerMenuIsOpen(false);
  };
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute w-full flex justify-between items-center pt-6 px-6">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <img
          onClick={hamburderClickhandler}
          className="w-6 h-5"
          src={HamburgerIcon}
          alt="HamburgerIcon"
        />
      </div>
      {hamburgerMenuIsOpen && (
        <div className="w-full flex justify-end ">
          <div
            className="absolute  pt-8 pr-7 pb-[377px] pl-8 text-white  w-[70%] 
            bg-black/ backdrop-blur-xl h-screen text-base"
          >
            <img
              onClick={closeIconClickhandler}
              className="ml-auto"
              src={closeIcon}
              alt="closeIcon"
            />
            <div className="font-barlowCondensed tracking-[2.7px] flex flex-col gap-7">
              <ul className="flex gap-2 mt-16">
                <span className="font-bold">00</span> HOME
              </ul>
              <ul className="flex gap-2" onClick={destinationClickeHandler}>
                <span className="font-bold">01</span> DESTINATION
              </ul>
              <ul className="flex gap-2 " onClick={crewClickeHandler}>
                <span className="font-bold">02</span> CREW
              </ul>
              <ul className="flex gap-2">
                <span className="font-bold">03</span> TECHNOLOGY
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
