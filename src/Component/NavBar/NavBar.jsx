import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { BsJustifyRight, BsXSquare } from "react-icons/bs";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='navBar bg-[#ebebeb] shadow-lg'>
            <div className='max-w-[1024px] h-[5rem] mx-auto flex justify-between items-center px-[.6rem]'>
                <div className='logoAndLink bg-[#ebebeb] h-[5rem] flex justify-between items-center w-[29rem]'>
                    <h1 className="logo text-[2rem] font-semibold text-[#000000] ">Barishal Gadget Store<span className='text-[#ffb701]'>|</span></h1>
                </div>

                <div className="navLink justify-between w-full md:flex" id={open? "openNavLink" : "closeNavLink"}>

                    <ul>
                        <li className=''><Link to="/services">Services</Link></li>
                        <li className=''><Link to="/items">Items</Link></li>
                        <li className=''><Link to="/home">Link</Link></li>
                    </ul>
                    <ul>
                        <li className=''><Link to="/login">Login</Link></li>
                        <li className=''><Link to="/singin">Sing In</Link></li>
                    </ul>
                </div>

                {/* responsive menu button  */}
                <button onClick={()=> setOpen(!open)} className="menuBtn text-[2.7rem] bg-[#ebebeb] h-[5rem] z-10">
                    {
                        open? <BsXSquare/> : <BsJustifyRight/>
                    }
                </button>

            </div>
        </nav>
    );
};

export default NavBar;