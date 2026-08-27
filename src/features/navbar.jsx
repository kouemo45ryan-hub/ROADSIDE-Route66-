import React from 'react'
import logo from '../assets/images/Logo Route66.png'
import { Link } from 'react-router-dom';



export function Navbar(){



    return(
        <div className='bg-[#F5E8D0] md:flex items-center justify-around px-1.5 md:px-1 md:py-2 '>
            <img src={logo} alt="RoadSide" className='w-39 hover:rotate-5 transition duration-300' />
            <ul className='font-barlow md:flex gap-8 text-xl font-bold text-black '>
                <li className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100"><a href="#home">HOME</a></li>
                <li className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100"><a href="#menu">MENU</a></li>
                <li><a href="#reserver" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">RESERVER</a></li>
                <li><a href="#nos adresse" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">NOS ADRESSE</a></li>
                <li><a href="#contact" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">CONTACT</a></li>
            </ul>
            <button className='text-[#F5E8D0] bg-[#C9362B]  h-12 rounded-md px-4 font-bold uppercase font-barlow text-xl cursor-pointer hover:scale-x-105 transition duration-500'>Commandez Maintenant</button>
        </div>
    )
}