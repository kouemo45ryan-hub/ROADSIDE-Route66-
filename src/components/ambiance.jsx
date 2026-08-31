import Ambiance1 from '../../public/images/hero.png'
import Ambiance2 from '../../public/images/ambiance2.jpg'
import Ambiance3 from '../../public/images/ambiance3.jpg'
export function Ambiance() {
    return (
        <section data-aos="fade-up" id="ambiance" className="bg-[#121010] py-16 px-4 md:px-8 text-white">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <p className="text-[#C9362B] font-bebas tracking-widest text-lg">
                        ★ GOOD VIBES ONLY ★
                    </p>
                    <h2 className="font-bebas font-bold text-4xl md:text-5xl text-[#F5E8D0] mt-2 uppercase tracking-wide">
                        L'Ambiance Vintage
                    </h2>
                    <div className="w-24 h-1 bg-[#C9362B] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-62.5">

                    <div data-aos="zoom-in"  className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl shadow-lg border border-[#2A2626]">
                        <img
                            src={Ambiance1}
                            alt="Voiture américaine rétro devant le restaurant"
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <p className="font-bebas text-2xl text-[#F5E8D0] tracking-wide">Esprit Route 66 & Voitures de Légende</p>
                        </div>
                    </div>

                    <div data-aos="zoom-in"  className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#2A2626]">
                        <img
                            src={Ambiance2}
                            alt="Intérieur du restaurant style Diner américain"
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-4">
                            <p className="font-bebas text-lg text-[#F5E8D0] tracking-wide">Banquettes Néons & Rock'n'Roll</p>
                        </div>
                    </div>

                    <div data-aos="zoom-in"  className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#2A2626]">
                        <img
                            src={Ambiance3}
                            alt="Détails de la décoration vintage"
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-4">
                            <p className="font-bebas text-lg text-[#F5E8D0] tracking-wide">Ambiance Authentique US</p>
                        </div>
                    </div>

                </div>

                <p className="text-center font-barlow text-sm text-[#737373] mt-8 italic">
                    Venez vivre l'expérience d'un authentique voyage dans le temps, le temps d'un repas.
                </p>

            </div>
        </section>
    );
}
