import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Component/AddItem/AddItem";
import Footer from "./Component/Footer/Footer";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Home from "./Component/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/Login/Login";
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
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgot" element={<ForgotPassword />} />
        <Route path="/singIn" element={<AddItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
