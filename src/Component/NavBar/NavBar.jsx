import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { BsJustifyRight, BsXSquare } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const NavBar = () => {
  const [loginUser] = useAuthState(auth);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handelSingOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // no work hear
      })
      .catch((error) => {
        error && toast.error("Logout Failed");
      });
    navigate("/home");
  };

  return (
    <nav className="navBar bg-[#e9fcff] shadow-lg z-50">
      <div className="max-w-[1024px] h-[5rem] mx-auto flex justify-between items-center px-[.6rem]">
        <Link to="/home" className="logoAndLink w-auto mr-8 h-[5rem] flex justify-between items-center z-20">
          <img className="max-w-[14rem]" src="https://barishalgadgetstore.com/wp-content/uploads/2020/11/BLACK.png" alt="img" />
        </Link>

        <div
          className="navLink bg-[#e9fcff] justify-between w-full md:flex z-10"
          id={open ? "openNavLink" : "closeNavLink"}
        >
          <ul className="bg-[#e9fcff]">
            <li className="">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "deActive")}
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/inventory"
                className={({ isActive }) => (isActive ? "active" : "deActive")}
              >
                Inventory
              </NavLink>
            </li>
          </ul>

          {loginUser?.emailVerified ? (
            <ul className="bg-[#e9fcff]">
              <li className="">
                <NavLink
                  to="/manageItem"
                  className={({ isActive }) =>
                    isActive ? "active" : "deActive"
                  }
                >
                  Manage
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/addItem"
                  className={({ isActive }) =>
                    isActive ? "active" : "deActive"
                  }
                >
                  Add
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/myItem"
                  className={({ isActive }) =>
                    isActive ? "active" : "deActive"
                  }
                >
                  My items
                </NavLink>
              </li>
              <li className="">
                <button
                  onClick={handelSingOut}
                  className="px-4 py-2 text-2xl text-white font-[500] rounded-xl bg-[#e63636] hover:bg-[#fe2828] ease-in-out duration-300"
                >
                  LOGOUT
                </button>
              </li>
            </ul>
          ) : (
            <ul className="bg-[#e9fcff]">
              <li className="">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "deActive"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/singin"
                  className={({ isActive }) =>
                    isActive ? "active" : "deActive"
                  }
                >
                  Sing In
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* responsive menu button  */}
        <button
          onClick={() => setOpen(!open)}
          className="menuBtn text-[2.7rem] bg-[#e9fcff] h-[5rem] z-20"
        >
          {open ? <BsXSquare /> : <BsJustifyRight />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
