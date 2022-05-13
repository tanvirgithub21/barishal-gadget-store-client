import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { BsJustifyRight, BsXSquare } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const NavBar = () => {
  const [loginUser] = useAuthState(auth);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate()
  const handelSingOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // no work hear
      })
      .catch((error) => {
        error && toast.error("Logout Failed");
      });
      navigate("/home")
  };

  return (
    <nav className="navBar bg-[#ebebeb] shadow-lg">
      <div className="max-w-[1024px] h-[5rem] mx-auto flex justify-between items-center px-[.6rem]">
        <div className="logoAndLink w-full md:w-[29rem] bg-[#ebebeb] h-[5rem] flex justify-between items-center z-20">
          <h1 className="logo text-[2rem] font-semibold text-[#000000] ">
            Barishal Gadget Store<span className="text-[#ffb701]">|</span>
          </h1>
        </div>

        <div
          className="navLink justify-between w-full md:flex z-10"
          id={open ? "openNavLink" : "closeNavLink"}
        >
          <ul>
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

          {loginUser?.email ? (
            <ul>
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
            <ul>
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
          className="menuBtn text-[2.7rem] bg-[#ebebeb] h-[5rem] z-20"
        >
          {open ? <BsXSquare /> : <BsJustifyRight />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
