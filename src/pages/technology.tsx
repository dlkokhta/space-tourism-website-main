import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface technologyTypes {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
  id: string;
}

const Technology = () => {
  const { name } = useParams();

  const [fetchedTechnology, setFetchedTechnology] =
    useState<technologyTypes | null>(null);

  const [technologyMenu, setTechnologyMenu] =
    useState<string>("Launch vehicle");

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        const response = await axios.get(
          `https://space-tourism-website-api.dimitrikokhtashvili.site/api/technologies/${name}`
        );
        setFetchedTechnology(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCrew();
  }, [name]);

  const navigate = useNavigate();

  const handleClick = (technologyName: string) => {
    navigate(`/technology/${technologyName}`);
    setTechnologyMenu(technologyName);
  };

  return (
    <div
      className="w-screen min-h-screen bg-[url('../assets/technology/background-technology-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('../assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../assets/technology/background-technology-mobile.jpg')]
    
  "
    >
      <div className="pt-[88px] px-6 flex flex-col text-center md:items-start md:pt-[136px] md:px-0">
        <div>
          <h1 className="text-white font-barlowCondensed font-normal text-base md:pl-10 md:text-xl flex justify-center gap-2 leading-5 tracking-[2.7px] lg:pt-[76px] lg:pl-[167px] lg:text-[28px]">
            <span className="text-gray-700 font-bold">03</span>SPACE LUNCH 101
          </h1>
        </div>
        <div className="mt-8 md:mt-14 flex flex-col items-center lg:flex lg:flex-row-reverse lg:mt-[26px] lg:pl-[167px]">
          <img
            src={
              window.innerWidth >= 1024
                ? fetchedTechnology?.images.portrait
                : fetchedTechnology?.images.landscape
            }
          />

          <div className="mt-7 md:mt-14 lg:flex lg:flex-row">
            <div className="flex gap-4 justify-center px-[70px] font-barlowCondensed leading-4 tracking-[2.36px] lg:flex lg:flex-col lg:gap-8 lg:pl-0">
              <div>
                <div
                  className={` flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full cursor-pointer border border-white border-opacity-25 hover:border-white
                     ${
                       technologyMenu === "Launch vehicle"
                         ? "bg-white md:text-2xl"
                         : "bg-black md:text-2xl"
                     } `}
                  onClick={() => handleClick("Launch vehicle")}
                >
                  <span
                    className={`${
                      technologyMenu === "Launch vehicle"
                        ? "text-black md:text-2xl lg:text-[32px]"
                        : "text-white md:text-2xl lg:text-[32px]"
                    }`}
                  >
                    1
                  </span>
                </div>
              </div>

              <div>
                <div
                  className={` flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full cursor-pointer border border-white border-opacity-25 hover:border-white
                      ${
                        technologyMenu === "Spaceport" ? "bg-white" : "bg-black"
                      } `}
                  onClick={() => handleClick("Spaceport")}
                >
                  <span
                    className={`${
                      technologyMenu === "Spaceport"
                        ? "text-black md:text-2xl lg:text-[32px]"
                        : "text-white md:text-2xl lg:text-[32px]"
                    }`}
                  >
                    2
                  </span>
                </div>
              </div>

              <div>
                <div
                  className={` flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full cursor-pointer border border-white border-opacity-25 hover:border-white
                    ${
                      technologyMenu === "Space capsule"
                        ? "bg-white md:text-2xl"
                        : "bg-black md:text-2xl"
                    } `}
                  onClick={() => handleClick("Space capsule")}
                >
                  <span
                    className={`${
                      technologyMenu === "Space capsule"
                        ? "text-black md:text-2xl lg:text-[32px]"
                        : "text-white md:text-2xl lg:text-[32px]"
                    }`}
                  >
                    3
                  </span>
                </div>
              </div>
            </div>
            <div className=" mt-5 md:mt-12 lg:mt-0">
              <div className="text-[#D0D6F9] font-barlowCondensed text-sm tracking-[2.36px] md:text-base lg:text-left">
                THE TERMINOLOGY...
              </div>
              <div className="text-white font-bellefair uppercase font-normal text-2xl mt-2 md:text-[40px] md:mt-8 lg:text-[56px]  lg:text-left">
                {fetchedTechnology?.name}
              </div>
              <p className="text-white mt-4 font-normal text-[15px] font-barlow md:px-[155px] md:text-base md:mt-8 lg:text-left lg:pl-0 lg:leading-8 lg:text-lg lg:tracking-[0.1px]">
                {fetchedTechnology?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
