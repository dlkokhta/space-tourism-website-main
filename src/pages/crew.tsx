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
      <div className="pt-[88px] px-6 flex flex-col text-center md:items-start md:pt-[136px] md:px-0">
        <div>
          <h1 className="text-white font-barlowCondensed font-normal text-base md:text-xl flex justify-center gap-2 leading-5 tracking-[2.7px] md:pl-10">
            <span className="text-gray-700 font-bold">02</span>MEET YOUR CREW
          </h1>
        </div>
        <div className="mt-8 flex flex-col items-center ">
          <img className=" h-[222px] md:hidden" src={fetchedCrew?.images.png} />
          <div className="h-[1px] w-full bg-[#383B4B] md:hidden" />

          <div className=" mt-5 hidden md:block">
            <div className="text-white opacity-50 font-bellefair uppercase text-2xl font-normal">
              {fetchedCrew?.role}
            </div>
            <div className="text-white font-bellefair uppercase font-normal text-[40px] ">
              {fetchedCrew?.name}
            </div>
            <p className="text-white mt-4 font-normal text-base font-barlow px-[140px]">
              {fetchedCrew?.bio}
            </p>
          </div>

          <div className="mt-5">
            <div className="flex gap-4 justify-center px-[70px] font-barlowCondensed leading-4 tracking-[2.36px] ">
              <div>
                <div
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50
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
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50
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
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50
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
                  className={`bg-white w-[10px] h-[10px] rounded-full cursor-pointer hover:opacity-50
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
            className=" h-[572px] hidden md:block mt-[25px]"
            src={fetchedCrew?.images.png}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
