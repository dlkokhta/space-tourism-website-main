import logo from "../assets/shared/logo.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const desktopNavbar = () => {
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
      <div className="absolute flex flex-row justify-between w-screen pl-14 mt-10">
        <img className="w-12 h-12 md:mt-6" src={logo} alt="logo" />

        <div
          className="font-barlowCondensed tracking-[2.7px] flex pl-[123px] lg:pr-[165px] gap-12
          bg-white bg-opacity-5 backdrop-blur-2xl text-base items-center
          h-[96px] relative"
        >
          <div className="absolute w-[473px]  bg-white h-[1px] right-[800px]"></div>
          <div
            className="flex flex-col cursor-pointer h-full"
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
          >
            <h1
              className="text-white text-base mt-9 flex gap-3"
              onClick={homeClickeHandler}
            >
              <span className="font-bold">00</span>
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
              className="text-white text-base mt-9 flex gap-3"
              onClick={destinationClickeHandler}
            >
              <span className="font-bold">01</span>
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
            <h1
              className="text-white text-base mt-9 flex gap-3"
              onClick={crewClickeHandler}
            >
              {" "}
              <span className="font-bold">02</span>
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
              className="text-white text-base mt-9 flex gap-3"
              onClick={technologyClickeHandler}
            >
              {" "}
              <span className="font-bold">00</span>
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

export default desktopNavbar;
