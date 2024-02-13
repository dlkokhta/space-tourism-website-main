import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import bgImage from "../assets/technology/background-technology-mobile.jpg";

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
          `http://localhost:3000/api/technologies/${name}`
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
      className="w-screen min-h-screen "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-[88px] px-6 flex flex-col text-center">
        <div>
          <h1 className="text-white font-barlowCondensed font-normal text-base flex justify-center gap-2 leading-5 tracking-[2.7px]">
            <span className="text-gray-700 font-bold">03</span>SPACE LUNCH 101
          </h1>
        </div>
        <div className="mt-8 flex flex-col items-center ">
          <img className=" " src={fetchedTechnology?.images.landscape} />

          <div className="mt-7">
            <div className="flex gap-4 justify-center px-[70px] font-barlowCondensed leading-4 tracking-[2.36px] ">
              <div>
                <div
                  className={`bg-white flex items-center justify-center w-[40px] h-[40px] rounded-full cursor-pointer border border-white border-opacity-25 hover:border-white
                     ${
                       technologyMenu === "Launch vehicle"
                         ? "bg-white"
                         : "bg-black"
                     } `}
                  onClick={() => handleClick("Launch vehicle")}
                >
                  <span
                    className={`${
                      technologyMenu === "Launch vehicle"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    1
                  </span>
                </div>
              </div>

              <div>
                <div
                  className={`bg-white flex items-center justify-center w-[40px] h-[40px] rounded-full cursor-pointer border border-white border-opacity-25 hover:border-white
                      ${
                        technologyMenu === "Spaceport" ? "bg-white" : "bg-black"
                      } `}
                  onClick={() => handleClick("Spaceport")}
                >
                  <span
                    className={`${
                      technologyMenu === "Spaceport"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    2
                  </span>
                </div>
              </div>

              <div>
                <div
                  className={`bg-white flex items-center justify-center w-[40px] h-[40px] rounded-full cursor-pointer border border-white border-opacity-25 hover:border-white
                    ${
                      technologyMenu === "Space capsule"
                        ? "bg-white"
                        : "bg-black"
                    } `}
                  onClick={() => handleClick("Space capsule")}
                >
                  <span
                    className={`${
                      technologyMenu === "Space capsule"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    3
                  </span>
                </div>
              </div>
            </div>
            <div className=" mt-5">
              <div className="text-[#D0D6F9] font-barlowCondensed text-sm tracking-[2.36px]">
                THE TERMINOLOGY...
              </div>
              <div className="text-white font-bellefair uppercase font-normal text-2xl mt-2">
                {fetchedTechnology?.name}
              </div>
              <p className="text-white mt-4 font-normal text-[15px] font-barlow">
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
