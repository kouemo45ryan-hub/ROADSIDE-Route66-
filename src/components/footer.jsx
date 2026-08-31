import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import logo from '/images/Logo Route66.png'

export function Footer() {
    return (
        <footer data-aos="fade-up" className="bg-[#121010] text-[#A3A3A3] pt-12 pb-6 px-4 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#2A2626] pb-8">

                <div className="flex flex-col items-center md:items-start space-y-4">
                    <img
                        src={logo}
                        alt="Route 66 Roadside Logo"
                        className="h-16 w-auto object-contain"
                    />
                    <p className="text-sm text-center md:text-left max-w-xs text-[#737373]">
                        Bonne bouffe. Meilleure route. Un vrai repas américain, préparé frais chaque jour.
                    </p>
                    <div className="flex space-x-3 mt-2">
                        <a href="#" className="p-2 bg-[#1A1818] rounded-full text-white hover:text-[#C9362B] transition-colors">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="#" className="p-2 bg-[#1A1818] rounded-full text-white hover:text-[#C9362B] transition-colors">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" className="p-2 bg-[#1A1818] rounded-full text-white hover:text-[#C9362B] transition-colors">
                            <FaXTwitter size={16} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-white font-bebas uppercase tracking-wider text-lg mb-4 font-bold">Liens Rapides</h4>
                    <ul className="space-y-2 text-sm text-center md:text-left">
                        <li><a href="#home" className="hover:text-white transition-colors">Accueil</a></li>
                        <li><a href="#menu" className="hover:text-white transition-colors">La Carte</a></li>
                        <li><a href="#ambiance" className="hover:text-white transition-colors">L'Ambiance</a></li>
                        <li><a href="#reserver" className="hover:text-white transition-colors">Réserver</a></li>
                        <li><a href="#nos-adresse" className="hover:text-white transition-colors">Nos Adresses</a></li>
                    </ul>
                </div>

                {/* Colonne 3 : Menu & Horaires en français */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-bebas uppercase tracking-wider text-lg mb-4 font-bold">Notre Carte</h4>
                        <ul className="space-y-2 text-sm text-center md:text-left">
                            <li><a href="#menu" className="hover:text-white transition-colors">Burgers</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Poulet / Wings</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Frites</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Milkshakes</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Boissons</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-bebas uppercase tracking-wider text-lg mb-4 font-bold">Horaires</h4>
                        <ul className="space-y-2 text-sm text-center md:text-left text-[#737373]">
                            <li><span className="text-[#A3A3A3]">Lun - Jeu :</span> 11h - 22h</li>
                            <li><span className="text-[#A3A3A3]">Ven - Sam :</span> 11h - 23h</li>
                            <li><span className="text-[#A3A3A3]">Dimanche :</span> 11h - 21h</li>
                        </ul>
                    </div>
                </div>

                {/* Colonne 4 : Newsletter traduite */}
                <div className="flex flex-col items-center md:items-start w-full">
                    <h4 className="text-white font-bebas uppercase tracking-wider text-lg mb-4 font-bold">Newsletter</h4>
                    <p className="text-sm text-center md:text-left mb-4 text-[#737373]">
                        Recevez nos offres spéciales et actualités directement dans votre boîte mail.
                    </p>
                    <div className="flex w-full max-w-xs bg-[#1A1818] border border-[#2A2626] rounded overflow-hidden">
                        <input
                            type="email"
                            placeholder="Votre adresse e-mail"
                            className="bg-transparent px-3 py-2 text-sm text-white focus:outline-none w-full placeholder-[#525252]"
                        />
                        <button className="bg-[#C9362B] text-white px-4 hover:bg-[#A82820] transition-colors flex items-center justify-center">
                            ➔
                        </button>
                    </div>
                </div>

            </div>

            <div className="max-w-6xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#525252] space-y-4 md:space-y-0">
                <div>
                    © {new Date().getFullYear()} Roadside American Eats. Tous droits réservés.
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-[#A3A3A3] transition-colors">Politique de Confidentialité</a>
                    <a href="#" className="hover:text-[#A3A3A3] transition-colors">Conditions Générales</a>
                </div>
            </div>
        </footer>
    );
}
