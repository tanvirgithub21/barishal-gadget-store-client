import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Component/AddItem/AddItem";
import AllInventoryItem from "./Component/AllInventoryItem/AllInventoryItem";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import NavBar from "./Component/NavBar/NavBar";
import UpdateItem from "./Component/TrendingSinglePd/UpdateItem/UpdateItem";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/items" element={<Inventory />} />
        <Route path="/services" element={<UpdateItem />} />
        <Route path="/login" element={<AllInventoryItem />} />
        <Route path="/singin" element={<AddItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
