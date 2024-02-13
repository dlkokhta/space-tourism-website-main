import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface DestinationTypes {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
  id: string;
}
const Destination = () => {
  const { name } = useParams();

  const [fetchedDest, setFetchedDest] = useState<DestinationTypes | null>(null);

  const [destMenu, setDestMenu] = useState<string>("Moon");
  console.log("destMenu", destMenu);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/destinations/${name}`
        );
        setFetchedDest(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDestination();
  }, [name]);
  const navigate = useNavigate();

  const handleClick = (planetName: string) => {
    navigate(`/destination/${planetName}`);
    setDestMenu(planetName);
  };
  console.log(destMenu);

  const [moonHovered, setMoonHover] = useState(false);
  const [marsHovered, setMarsHover] = useState(false);
  const [europeHovered, setEuropeHover] = useState(false);
  const [titanHovered, setTitanHover] = useState(false);

  return (
    <div className="bg-[url('../assets/destination/background-destination-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('../assets/destination/background-destination-tablet.jpg')] md:bg-cover">
      {/* <div className="bg-destinationMobile bg-no-repeat bg-cover md:bg-destinationTablet"> */}
      <div className="pt-[88px] px-6 flex flex-col text-center pb-[58px] md:items-start md:pt-[136px] md:pb-[33px]">
        <div>
          <h1 className="text-white font-barlowCondensed font-normal md:text-xl text-base flex justify-center gap-2 leading-5 tracking-[2.7px]">
            <span className="text-gray-700 font-bold">01</span>PICK YOUR
            DESTINATION
          </h1>
        </div>
        <div className="mt-8 md:mt-14 flex flex-col items-center">
          <img
            src={fetchedDest?.images.png}
            className="text-white w-[170px] md:w-[300px]"
          />

          <div className="mt-5 md:mt-10">
            <div className="flex gap-9 justify-center px-[70px] font-barlowCondensed leading-4 tracking-[2.36px] md:text-base">
              <div
                className="flex flex-col gap-2 md:gap-3 cursor-pointer"
                onMouseEnter={() => setMoonHover(true)}
                onMouseLeave={() => setMoonHover(false)}
              >
                <h1 className="text-white" onClick={() => handleClick("Moon")}>
                  MOON
                </h1>
                {destMenu === "Moon" ? (
                  <div className="h-[3px] bg-white"></div>
                ) : (
                  <div
                    className={`h-[3px] ${
                      moonHovered ? "bg-white opacity-50" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div
                className="flex flex-col gap-2 cursor-pointer"
                onMouseEnter={() => setMarsHover(true)}
                onMouseLeave={() => setMarsHover(false)}
              >
                <h1 className="text-white" onClick={() => handleClick("Mars")}>
                  MARS
                </h1>
                {destMenu === "Mars" ? (
                  <div className="h-[3px] bg-white "></div>
                ) : (
                  <div
                    className={`h-[3px] ${
                      marsHovered ? "bg-white opacity-50" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div
                className="flex flex-col gap-2 cursor-pointer"
                onMouseEnter={() => setEuropeHover(true)}
                onMouseLeave={() => setEuropeHover(false)}
              >
                <h1
                  className="text-white"
                  onClick={() => handleClick("Europa")}
                >
                  EUROPA
                </h1>
                {destMenu === "Europa" ? (
                  <div className="h-[3px] bg-white"></div>
                ) : (
                  <div
                    className={`h-[3px] ${
                      europeHovered ? "bg-white opacity-50" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div
                className="flex flex-col gap-2 cursor-pointer"
                onMouseEnter={() => setTitanHover(true)}
                onMouseLeave={() => setTitanHover(false)}
              >
                <h1 className="text-white" onClick={() => handleClick("Titan")}>
                  TITAN
                </h1>
                {destMenu === "Titan" ? (
                  <div className="h-[3px] bg-white "></div>
                ) : (
                  <div
                    className={`h-[3px] ${
                      titanHovered ? "bg-white opacity-50" : ""
                    }`}
                  ></div>
                )}
              </div>
            </div>

            <div className="text-white font-bellefair uppercase text-[48px] mt-5 md:mt-4 md:text-[80px] md:mb-4">
              {fetchedDest?.name}
            </div>
            <div className="px-6 md:px-[95px]">
              <p className="text-white font-barlow font-normal font-base leading-6 mb-8 md:mb-10 md:text-base">
                {fetchedDest?.description}
              </p>
              <div className="h-[1px] w-full bg-[#383B4B]"></div>
              <div className="mt-8 md:flex md:justify-center md:gap-10">
                <div className="flex flex-col gap-2 mb-8">
                  <h2 className="text-white font-barlowCondensed font-normal text-sm tracking-[2.36px]">
                    AVG. DISTANCE
                  </h2>
                  <div className="text-white font-bellefair font-normal text-3xl uppercase ">
                    {fetchedDest?.distance}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-white font-barlowCondensed font-normal text-sm tracking-[2.36px]">
                    EST. TRAVEL TIME
                  </h2>
                  <div className="text-white font-bellefair font-normal text-3xl uppercase">
                    {fetchedDest?.travel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
