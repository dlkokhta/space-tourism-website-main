const Main = () => {
  return (
    <div className="flex flex-col items-center gap-20 pt-28 px-6 pb-[48px] ">
      <div className="text-white flex flex-col items-center ">
        <h2 className="font-barlowCondensed font-normal text-base tracking-[2.7px]">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-bellefair font-normal text-[80px] pb-3">SPACE</h1>
        <p className="font-barlow text-base font-normal leading-6 text-center ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center">
        <h1 className="font-bellefair">EXPLORE</h1>
      </div>
    </div>
  );
};

export default Main;
