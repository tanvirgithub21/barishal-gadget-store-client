import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Footer />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
