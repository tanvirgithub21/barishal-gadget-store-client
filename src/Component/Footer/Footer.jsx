import React from 'react';
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub,  } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='bg-[rgb(2,6,16)]'>

            <div className="contractAndSupport flex items-center flex-col sm:flex-row text-center sm:text-left sm:justify-evenly py-10 text-[#c3c3c3] ">
                
                {/* Contract info  */}
                <div className="contract mb-10 sm:mb-0">
                    <h3 className='text-2xl md:text-4xl text-[#f2f2f2] mb-6'>Warehouse</h3>
                    <ul className='text-[1rem] md:text-[1.3rem] leading-10'>
                        <li>(+880) 1797021366</li>
                        <li>tantar.bd.global@gmail.com</li>
                        <li>Opening Hours: 8:00AM-5:00PM</li>
                        <li>Babugonj Barisal Dhaka,Bangladesh </li>
                    </ul>
                </div>

                {/* Customer Service info */}
                <div className="support">
                    <h3 className='text-2xl md:text-4xl text-[#f2f2f2] mb-6'>Customer Service</h3>
                    <ul className='text-[1rem] md:text-[1.3rem] leading-10'>
                        <li>Contract US</li>
                        <li>Help and Services</li>
                        <li>Shipping and Returns</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

            </div>

            <div className="socialIcon flex justify-center text-[#c3c3c3] border-y border-[#313131]">
                <ul className='flex my-6 text-[1.5rem] md:text-[2.2rem] '>

                    <li className='mr-[4rem] text-[#518bff] hover:text-[#3a7cff] transition-colors'>
                        <a href="https://www.facebook.com/tanviruniquebd/" target="_blank"><BsFacebook/></a>
                    </li>

                    <li className='mr-[4rem] text-[#E1306C] hover:text-[#ff1462] transition-colors'>
                        <a href="https://www.instagram.com/tan_vir_ahmed___/" target="_blank"><BsInstagram/></a>
                    </li>

                    <li className='hover:text-[#f4f4f4] transition-colors'>
                        <a href="https://github.com/tanvirgithub21" target="_blank"><BsGithub/></a>
                    </li>

                </ul>
            </div>

            <div className="copyRightText text-center text-[1.1rem] md:text-[1.5rem] py-6 text-[#f2f2f2]">
                <p className='px-4'>Copyright <span>&copy;</span> {new Date().getFullYear()} Barishal Gadget Store . All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;