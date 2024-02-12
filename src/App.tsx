import Home from "./pages/home";
import Destination from "./pages/destination.js";
import NavBar from "./components/Navbar.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Crew from "./pages/crew.js";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:name" element={<Destination />} />
        <Route path="/crew/:name" element={<Crew />} />
      </Routes>
    </div>
  );
}

export default App;
