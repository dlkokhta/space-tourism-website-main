import Home from "./pages/home";
import Destination from "./pages/destination.js";
import NavBar from "./components/Navbar.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Crew from "./pages/crew.js";
import Technology from "./pages/technology.js";

function App() {
  return (
    <div>
      {/* <div className="md:hidden"> */}
      <NavBar />
      {/* </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:name" element={<Destination />} />
        <Route path="/crew/:name" element={<Crew />} />
        <Route path="/technology/:name" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
