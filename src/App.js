import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="App bg-cyan-50">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
