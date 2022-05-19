import { Route, Routes, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import ManageItem from "./Component/ManageItem/ManageItem";
import Footer from "./Component/Footer/Footer";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Home from "./Component/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/Login/Login";
import NavBar from "./Component/NavBar/NavBar";
import NotFound from "./Component/NotFound/NotFound";
import SingIn from "./Component/SingIn/SingIn";
import UpdateItem from "./Component/UpdateItem/UpdateItem";
import AddItem from "./Component/AddItem/AddItem";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import MyItem from "./Component/MyItem/MyItem";
import Blog from "./Component/Blog/Blog";

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={
          navigate("/home")
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/inventory/:_id"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        />
        <Route path="/item" element={<Inventory />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/manageItem" element={<ManageItem />} />
        <Route path="/myItem" element={<MyItem />} />
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
