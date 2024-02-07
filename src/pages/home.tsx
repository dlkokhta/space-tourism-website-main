// import NavBar from "../components/NavBar";
import bg from "../assets/home/background-home-mobile.jpg";
import Main from "../components/Main";
const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Main />
    </div>
  );
};
export default Home;
