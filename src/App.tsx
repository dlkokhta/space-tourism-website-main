import Home from "./pages/home";
import Destination from "./pages/destination.js";
import NavBar from "./components/Navbar.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Crew from "./pages/crew.js";
import Technology from "./pages/technology.js";
import TabletNavbar from "./components/tabletNavbar.js";
import DesktopNavbar from "./components/desktopNavbar.js";

function App() {
  return (
    <div>
      <div className="md:hidden">
        <NavBar />
      </div>
      <div className="hidden lg:hidden md:block">
        <TabletNavbar />
      </div>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>

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
