import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Home from "./Component/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/Login/Login";
import NavBar from "./Component/NavBar/NavBar";
import NotFound from "./Component/NotFound/NotFound";
import SingIn from "./Component/SingIn/SingIn";
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
        <Route path="/singIn" element={<SingIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer className="tostContainer" />
    </div>
  );
}

export default App;
