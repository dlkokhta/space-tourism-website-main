import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface crewTypes {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
  id: string;
}

const Crew = () => {
  const { name } = useParams();

  const [fetchedCrew, setFetchedCrew] = useState<crewTypes | null>(null);

  const [crewMenu, setCrewMenu] = useState<string>("Douglas Hurley");

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/crews/${name}`
        );
        setFetchedCrew(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCrew();
  }, [name]);

  const navigate = useNavigate();

  const handleClick = (crewName: string) => {
    navigate(`/crew/${crewName}`);
    setCrewMenu(crewName);
  };

  return (
    <div
      className="w-screen min-h-screen bg-[url('../assets/crew/background-crew-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('../assets/crew/background-crew-tablet.jpg')] md:bg-cover
    "
    >
      <div className="pt-[88px] px-6 flex flex-col text-center md:items-start md:pt-[136px] md:px-0 lg:pt-[212px]">
        <div>
          <h1 className="text-white font-barlowCondensed font-normal text-base md:text-xl flex justify-center gap-2 leading-5 tracking-[2.7px] md:pl-10 lg:pl-[167px] lg:text-[28px]">
            <span className="text-gray-700 font-bold">02</span>MEET YOUR CREW
          </h1>
        </div>
        <div className="mt-8 flex flex-col items-center lg:flex-row lg:pl-[166px] lg:pr-[137px]">
          <img className=" h-[222px] md:hidden" src={fetchedCrew?.images.png} />
          <div className="h-[1px] w-full bg-[#383B4B] md:hidden" />

          <div className="mt-5">
            <div className=" mt-5 hidden md:block">
              <div className="text-white opacity-50 font-bellefair uppercase text-2xl font-normal lg:text-[32px] lg:text-left">
                {fetchedCrew?.role}
              </div>
              <div className="text-white font-bellefair uppercase font-normal text-[40px] lg:text-[56px] lg:text-left">
                {fetchedCrew?.name}
              </div>
              <p className="text-white mt-4 font-normal text-base font-barlow px-[160px] lg:text-lg lg:text-left lg:pl-0 lg:leading-8">
                {fetchedCrew?.bio}
              </p>
            </div>
            <div className="flex gap-4 justify-center px-[70px] font-barlowCondensed leading-4 tracking-[2.36px] md:mt-5 lg:justify-start lg:px-0 lg:mt-[150px]">
              <div>
                <div
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50 lg:w-[15px] lg:h-[15px]
                     ${
                       crewMenu === "Douglas Hurley"
                         ? "bg-white"
                         : "bg-white opacity-15"
                     } `}
                  onClick={() => handleClick("Douglas Hurley")}
                ></div>
              </div>

              <div>
                <div
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50 lg:w-[15px] lg:h-[15px]
                      ${
                        crewMenu === "Mark Shuttleworth"
                          ? "bg-white"
                          : "bg-white opacity-15"
                      } `}
                  onClick={() => handleClick("Mark Shuttleworth")}
                ></div>
              </div>

              <div>
                <h1
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50 lg:w-[15px] lg:h-[15px]
                    ${
                      crewMenu === "Victor Glover"
                        ? "bg-white"
                        : "bg-white opacity-15"
                    } `}
                  onClick={() => handleClick("Victor Glover")}
                ></h1>
              </div>
              <div>
                <h1
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50 lg:w-[15px] lg:h-[15px]
                    ${
                      crewMenu === "Anousheh Ansari"
                        ? "bg-white"
                        : "bg-white opacity-15"
                    } `}
                  onClick={() => handleClick("Anousheh Ansari")}
                ></h1>
              </div>
            </div>

            <div className=" mt-5 md:hidden">
              <div className="text-white opacity-50 font-bellefair uppercase text-base font-normal">
                {fetchedCrew?.role}
              </div>
              <div className="text-white font-bellefair uppercase font-normal text-2xl mt-2">
                {fetchedCrew?.name}
              </div>
              <p className="text-white mt-4 font-normal text-base font-barlow">
                {fetchedCrew?.bio}
              </p>
            </div>
          </div>

          <img
            className=" h-[572px] hidden md:block mt-[25px] lg:h-[712px] lg:mt-[-80px]"
            src={fetchedCrew?.images.png}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
