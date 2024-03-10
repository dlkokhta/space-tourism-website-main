import Main from "../components/Main";
const Home = () => {
  return (
    <div
      className="bg-[url('../assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover 
        min-h-screen md:bg-[url('../assets/home/background-home-tablet.jpg')]
                     lg:bg-[url('../assets/home/background-home-desktop.jpg')] "
    >
      <Main />
    </div>
  );
};
export default Home;
