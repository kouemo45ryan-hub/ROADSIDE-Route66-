import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export function CheckoutModal({ isOpen, onClose, panier, onViderPanier }) {
    // Calculs financiers
    const sousTotal = panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
    const taxes = sousTotal * 0.05;
    const totalGeneral = sousTotal + taxes;

    const [formData, setFormData] = useState({ nom: '', telephone: '', adresse: '', note: '' });
    const [commandeValidee, setCommandeValidee] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Commande envoyée :", { client: formData, articles: panier, total: totalGeneral });
        setCommandeValidee(true);
        setTimeout(() => {
            onViderPanier();
            setCommandeValidee(false);
            onClose();
        }, 3500);
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-[#FFF8EA] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">

                <div className="p-5 bg-[#F5E8D0] border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bebas text-2xl text-[#121010] tracking-wide">Finaliser ma commande 🍔</h3>
                    <button onClick={onClose} className="text-gray-600 hover:text-[#C9362B] transition-colors cursor-pointer">
                        <FaTimes size={20} />
                    </button>
                </div>

                {commandeValidee ? (
                    <div className="p-10 text-center space-y-4 flex-1 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold animate-bounce">✓</div>
                        <h4 className="font-bebas text-3xl text-green-700">Commande reçue !</h4>
                        <p className="font-barlow text-gray-700">Merci <span className="font-bold">{formData.nom}</span>, vos burgers entrent en cuisine. Préparez-vous à vous régaler !</p>
                    </div>
                ) : (
                    /* Écran de formulaire */
                    <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-2 font-barlow text-sm shadow-xs">
                            <h4 className="font-bold text-gray-800 uppercase mb-2">Résumé de la facture</h4>
                            <div className="flex justify-between text-gray-600">
                                <span>Sous-total ({panier.reduce((sum, item) => sum + item.quantite, 0)} articles) :</span>
                                <span>$ {sousTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Frais de service & Taxes (5%) :</span>
                                <span>$ {taxes.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-base text-[#121010] pt-2 border-t border-gray-100">
                                <span>TOTAL GÉNÉRAL :</span>
                                <span className="text-[#C9362B]">$ {totalGeneral.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="space-y-4 font-barlow">
                            <h4 className="font-bold text-gray-800 uppercase text-sm">Informations de livraison / Retrait</h4>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Nom complet</label>
                                <input required type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C9362B] text-sm" placeholder="John Doe" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Numéro de téléphone</label>
                                <input required type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C9362B] text-sm" placeholder="06 12 34 56 78" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Adresse de livraison (laisser vide si sur place)</label>
                                <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C9362B] text-sm" placeholder="42 Rue de la Route 66" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Note pour le cuisinier (options, allergies...)</label>
                                <textarea name="note" value={formData.note} onChange={handleChange} rows="2" className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C9362B] text-sm" placeholder="Pas de cornichons dans le burger svp..."></textarea>
                            </div>
                        </div>

                        {/* Bouton de soumission */}
                        <button type="submit" className="w-full bg-[#C9362B] text-[#F5E8D0] font-barlow font-bold uppercase py-3 rounded-xl tracking-wider hover:scale-[1.01] active:scale-[0.99] transition duration-300 cursor-pointer shadow-md text-sm">
                            Confirmer et commander ➔
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
