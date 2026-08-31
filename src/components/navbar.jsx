import React from 'react'
import logo from '/images/Logo Route66.png'
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa'




export function Navbar({ panier, onOuvrirPanier }) {
    const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);

    return (

        <div className='relative z-50  bg-[#F5E8D0] flex flex-col  gap-4 md:flex-row items-center justify-around py-2 px-1.5 md:px-1 md:py-2'>
            <img src={logo} alt="RoadSide" className='w-39 hover:rotate-5 transition duration-300' />
            <ul className='font-barlow flex flex-col items-center md:flex-row gap-8 md:text-xl text-[18px] font-bold text-black '>
                <li><a href="#home" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">HOME</a></li>
                <li><a href="#menu" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">MENU</a></li>
                <li><a href="#ambiance" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">AMBIANCE</a></li>
                <li><a href="#reserver" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">RESERVER</a></li>
                <li><a href="#nos-adresse" className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#C9362B] after:transition-transform after:duration-300 hover:after:scale-x-100">NOS ADRESSE</a></li>
            </ul>

            <button
                onClick={onOuvrirPanier}
                className="relative p-2 text-black hover:text-[#C9362B] transition duration-300 cursor-pointer">
                <FaShoppingBag size={24} />
                {totalArticles > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#C9362B] text-[#F5E8D0] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                        {totalArticles}
                    </span>
                )}
            </button>
            <button className='text-[#F5E8D0] bg-[#C9362B]  h-12 rounded-md md:px-4 px-1 font-bold uppercase font-barlow md:text-xl text-[15px] cursor-pointer hover:scale-105 transition duration-500'>Commandez Maintenant</button>
        </div>
    )
}