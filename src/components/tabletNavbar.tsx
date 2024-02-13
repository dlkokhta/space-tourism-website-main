import logo from "../assets/shared/logo.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabletNavbar = () => {
  const destinationClickeHandler = () => {
    navigate(`/destination/Moon`);
    setDestMenu("DESTINATION");
  };
  const crewClickeHandler = () => {
    navigate(`/crew/Douglas Hurley`);
    setDestMenu("CREW");
  };

  const technologyClickeHandler = () => {
    navigate(`/technology/Launch vehicle`);
    setDestMenu("TECHNOLOGY");
  };

  const homeClickeHandler = () => {
    navigate(`/`);
    setDestMenu("HOME");
  };
  const navigate = useNavigate();
  const [destMenu, setDestMenu] = useState<string>("HOME");

  const [homeHovered, setHomeHover] = useState(false);
  const [destinationHovered, setDestinationHover] = useState(false);
  const [crewHovered, setCrewHover] = useState(false);
  const [technologyHovered, setTechnologyHover] = useState(false);

  return (
    <div className="relative">
      <div className="absolute flex flex-row justify-between w-screen md:pl-10">
        <img className="w-12 h-12 md:mt-6" src={logo} alt="logo" />

        {/* <div className="absolute inset-3 flex  bg-white h-[1px]"></div> */}

        <div
          className="font-barlowCondensed tracking-[2.7px] flex px-12 gap-9
          bg-[#ffffff0d] text-base items-center
          h-[96px] "
        >
          <div
            className="flex flex-col cursor-pointer h-full"
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
          >
            <h1 className="text-white text-sm mt-9" onClick={homeClickeHandler}>
              HOME
            </h1>
            {destMenu === "HOME" ? (
              <div className="h-[3px] bg-white mt-auto"></div>
            ) : (
              <div
                className={`h-[3px] ${
                  homeHovered ? "bg-white opacity-50 mt-auto" : ""
                }`}
              ></div>
            )}
          </div>

          <div
            className="flex flex-col cursor-pointer h-full"
            onMouseEnter={() => setDestinationHover(true)}
            onMouseLeave={() => setDestinationHover(false)}
          >
            <h1
              className="text-white text-sm mt-9"
              onClick={destinationClickeHandler}
            >
              DESTINATION
            </h1>
            {destMenu === "DESTINATION" ? (
              <div className="h-[3px] bg-white mt-auto"></div>
            ) : (
              <div
                className={`h-[3px] ${
                  destinationHovered ? "bg-white opacity-50 mt-auto" : ""
                }`}
              ></div>
            )}
          </div>

          <div
            className=" flex flex-col cursor-pointer h-full"
            onMouseEnter={() => setCrewHover(true)}
            onMouseLeave={() => setCrewHover(false)}
          >
            <h1 className="text-white text-sm mt-9" onClick={crewClickeHandler}>
              CREW
            </h1>
            {destMenu === "CREW" ? (
              <div className="h-[3px] bg-white mt-auto"></div>
            ) : (
              <div
                className={`h-[3px] ${
                  crewHovered ? "bg-white opacity-50 mt-auto" : ""
                }`}
              ></div>
            )}
          </div>

          <div
            className=" flex flex-col cursor-pointer h-full"
            onMouseEnter={() => setTechnologyHover(true)}
            onMouseLeave={() => setTechnologyHover(false)}
          >
            <h1
              className="text-white text-sm mt-9"
              onClick={technologyClickeHandler}
            >
              TECHNOLOGY
            </h1>
            {destMenu === "TECHNOLOGY" ? (
              <div className="h-[3px] bg-white mt-auto"></div>
            ) : (
              <div
                className={`h-[3px] ${
                  technologyHovered ? "bg-white opacity-50 mt-auto" : ""
                }`}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default tabletNavbar;
