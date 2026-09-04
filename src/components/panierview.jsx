import React from 'react';
import { FaTimes, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

export function PanierView({ isOpen, onClose, panier, onModifierQuantite, onSupprimer,onOuvrirCheckout }) {

    const totalPrix = panier.reduce((total, item) => total + (item.price * item.quantite), 0);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-500"
                    onClick={onClose}
                />
            )}

            <div className={`fixed top-0 right-0 h-full w-full sm:w-112.5 bg-[#FFF8EA] shadow-2xl z-50 flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}>

                <div className="p-5 bg-[#F5E8D0] border-b border-gray-200 flex items-center justify-between">
                    <h2 className="font-bebas text-3xl text-[#121010] tracking-wide">Mon Panier 🛒</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-[#C9362B] transition-colors p-2 cursor-pointer"
                    >
                        <FaTimes size={22} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {panier.length === 0 ? (
                        <div className="text-center py-12 text-gray-500 font-barlow">
                            <p className="text-lg font-medium">Votre panier est vide.</p>
                            <p className="text-sm mt-1">Laissez-vous tenter par nos délicieux burgers !</p>
                        </div>
                    ) : (
                        panier.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />

                                <div className="flex-1">
                                    <h4 className="font-barlow font-bold text-[#121010] text-sm uppercase">{item.name}</h4>
                                    <p className="text-[#C9362B] font-bold text-sm mt-0.5">$ {(item.price * item.quantite).toFixed(2)}</p>

                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => onModifierQuantite(item.name, -1)}
                                            className="w-6 h-6 bg-gray-100 text-gray-600 rounded flex items-center justify-center hover:bg-[#C9362B] hover:text-white transition-colors cursor-pointer text-xs"
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="font-barlow font-bold text-sm w-4 text-center">{item.quantite}</span>
                                        <button
                                            onClick={() => onModifierQuantite(item.name, 1)}
                                            className="w-6 h-6 bg-gray-100 text-gray-600 rounded flex items-center justify-center hover:bg-[#C9362B] hover:text-white transition-colors cursor-pointer text-xs"
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onSupprimer(item.name)}
                                    className="text-gray-400 hover:text-red-600 p-2 transition-colors cursor-pointer"
                                >
                                    <FaTrash size={16} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {panier.length > 0 && (
                    <div className="p-5 bg-white border-t border-gray-100 space-y-4 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center justify-between font-barlow text-lg font-bold text-[#121010]">
                            <span>TOTAL :</span>
                            <span className="text-xl text-[#C9362B]">$ {totalPrix.toFixed(2)}</span>
                        </div>
                        <button
                        onClick={onOuvrirCheckout}
                        className="w-full bg-[#C9362B] text-[#F5E8D0] font-barlow font-bold uppercase py-3 rounded-lg text-center tracking-wider hover:scale-[1.02] active:scale-[0.98] transition duration-300 cursor-pointer shadow-md">
                            Valider la commande ➔
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
