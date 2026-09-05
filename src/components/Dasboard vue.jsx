import React from "react";
import { FaRegUserCircle } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi2';
import { LuPencil, LuTrash2 } from "react-icons/lu"; // Icônes modernes et légères
import { useState, useEffect } from "react";
import AjouterPro from "../components/Ajouter produit";
import axios from 'axios';

function DashVue() {

    const [donnee, setDonnee] = useState([]);
    useEffect(() => {
        async function fetcher() {
            const data = await axios.get('http://localhost:3000/api/produits')
            setDonnee(data.data)
        }
        fetcher()
    }, []);
    return (
        <div className="bg-white min-h-screen">
            {/* <AjouterPro/> */}
            <nav className="flex p-8 min-w-full items-center justify-between bg-[#FFF8EA] ">
                <h1 className=" font-bebas font-semibold text-3xl" >ADMIN DASHBOARD</h1>
                <div>
                    <button className="flex items-center gap-1.5 rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                        <FaRegUserCircle className="w-6 h-6 text-gray-600" />
                        <span className="text-sm font-medium text-gray-800">Admin</span>
                        <HiChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                </div>
            </nav>

            <div className="flex justify-between m-8">
                <div>
                    <h1 className="font-bebas text-2xl">GESTION DES PRODUITS</h1>
                    <div className="bg-[#C9362B] w-14 p-0.5 rounded-md"></div>
                </div>
                <button className=" cursor-pointer p-3 bg-[#C9362B] rounded-md hover:scale-105  duration-500 text-white font-bebas text-xl"> <span className="text-2xl">+</span> AJOUTER UN PRODUIT</button>
            </div>
            <div className="w-full max-w-5xl mx-auto my-16 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <table className="w-full border-collapse text-left" >
                    <thead className="bg-[#FFF8EA]">
                        <tr>
                            <th className="p-4 font-bebas text-xl font-medium tracking-wider text-black">NOM</th>
                            <th className="p-4 font-bebas text-xl font-medium tracking-wider text-black">CATÉGORIE</th>
                            <th className="p-4 font-bebas text-xl font-medium tracking-wider text-black">PRIX</th>
                            <th className="p-4 font-bebas text-xl font-medium tracking-wider text-black text-right pr-12">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {donnee.map(produit => (
                            <tr key={produit.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-semibold text-gray-900">{produit.name}</td>
                                <td className="p-4 text-gray-600">{produit.category}</td>

                                <td className="p-4 font-bold text-gray-900">{produit.price} $</td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end gap-3 pr-4">
                                        <button className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition-colors shadow-sm">
                                            <LuPencil className="w-4 h-4 text-gray-500" />
                                            Edit
                                        </button>
                                        <button className="flex items-center gap-1.5 rounded-lg border border-red-200 px-4 py-1.5 text-sm font-medium cursor-pointer text-red-600 bg-white hover:bg-red-100 transition-colors shadow-sm">
                                            <LuTrash2 className="w-4 h-4 text-red-500" />
                                            Del
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashVue