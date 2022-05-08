import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { BsJustifyRight, BsXSquare } from "react-icons/bs";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='navBar bg-[#ebebeb] shadow-lg'>
            <div className='max-w-[1024px] h-[5rem] mx-auto flex justify-between items-center px-[.6rem]'>
                <div className='logoAndLink w-full md:w-[29rem] bg-[#ebebeb] h-[5rem] flex justify-between items-center z-20'>
                    <h1 className="logo text-[2rem] font-semibold text-[#000000] ">Barishal Gadget Store<span className='text-[#ffb701]'>|</span></h1>
                </div>

                <div className="navLink justify-between w-full md:flex z-10" id={open? "openNavLink" : "closeNavLink"}>

                    <ul>
                        <li className=''><NavLink to="/home" className={({ isActive }) =>  isActive? "active" : "deActive"} >Home</NavLink></li>
                        <li className=''><NavLink to="/services" className={({ isActive }) =>  isActive? "active" : "deActive"} >Services</NavLink></li>
                        <li className=''><NavLink to="/items" className={({ isActive }) =>  isActive? "active" : "deActive"} >Items</NavLink></li>
                    </ul>
                    <ul>
                        <li className=''><NavLink to="/login" className={({ isActive }) =>  isActive? "active" : "deActive"} >Login</NavLink></li>
                        <li className=''><NavLink to="/singin" className={({ isActive }) =>  isActive? "active" : "deActive"} >Sing In</NavLink></li>
                    </ul>
                </div>

                {/* responsive menu button  */}
                <button onClick={()=> setOpen(!open)} className="menuBtn text-[2.7rem] bg-[#ebebeb] h-[5rem] z-20">
                    {
                        open? <BsXSquare/> : <BsJustifyRight/>
                    }
                </button>

            </div>
        </nav>
    );
};

export default NavBar;