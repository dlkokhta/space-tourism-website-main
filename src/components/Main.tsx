const Main = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-28 px-6  md:pt-[202px] min-h-screen md:gap-20 lg:flex-row lg:pt-[300px] lg:px-0 lg:pr-20">
      <div className="text-white flex flex-col items-center lg:pl-[165px]">
        <h2 className="font-barlowCondensed font-normal text-base tracking-[2.7px] md:text-xl lg:text-3xl lg:items-left lg:mr-auto">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-bellefair font-nowhitermal text-[80px] md:text-[150px] pb-3 md:pb-0 lg:mr-auto">
          SPACE
        </h1>
        <p className="font-barlow text-base font-normal leading-6 text-center md:px-[160px] lg:text-lg lg:px-0 lg:pr-[200px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <div className="w-[240px] h-[240px] flex justify-center items-center bg-white rounded-full bg-opacity-0  hover:bg-opacity-10 md:w-[340px] md:h-[340px] lg:w-[440px] lg:h-[440px] ]">
          <div className="w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px]">
            <h1 className="font-bellefair text-xl md:text-[32px]">EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
