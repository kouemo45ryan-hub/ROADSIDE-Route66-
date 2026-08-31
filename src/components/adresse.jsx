import carte from '../../public/images/carte.png'

export function NosAdresses() {

    const etablissements = [
        {
            ville: "Paris Centre",
            adresse: "66 Rue du Faubourg Saint-Antoine, 75012 Paris",
            telephone: "01 43 44 55 66",
            horaires: "11h00 - 23h00"
        },
        {
            ville: "Lyon Old School",
            adresse: "12 Avenue Rockefeller, 69008 Lyon",
            telephone: "04 72 33 44 55",
            horaires: "11h00 - 22h30"
        }
    ];

    return (
        <section data-aos="fade-up" id="nos-adresse" className="bg-[#FAF6F0] py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <p className="text-[#C9362B] font-bebas tracking-widest text-lg">
                        ★ SUR LA ROUTE ★
                    </p>
                    <h2 className="font-bebas font-bold text-4xl md:text-5xl text-[#121010] mt-2 uppercase">
                        Nos Restaurants
                    </h2>
                    <div className="w-24 h-1 bg-[#C9362B] mx-auto mt-4 rounded-full"></div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
                        {etablissements.map((resto, index) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="font-bebas text-2xl text-[#C9362B] tracking-wide mb-3">
                                    {resto.ville}
                                </h3>
                                <div className="font-barlow text-gray-700 space-y-2 text-base">
                                    <p className="flex items-start gap-2">
                                        <span className="font-bold text-[#121010]">📍 Adresse :</span>
                                        <span>{resto.adresse}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-[#121010]">📞 Téléphone :</span>
                                        <a href={`tel:${resto.telephone.replace(/\s/g, '')}`} className="hover:text-[#C9362B] transition-colors">
                                            {resto.telephone}
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-[#121010]">🕒 Horaires :</span>
                                        <span className="text-gray-500">{resto.horaires}</span>
                                    </p>
                                </div>
                                <button className="mt-4 text-xs font-bold text-[#C9362B] border border-[#C9362B] px-4 py-2 rounded-md hover:bg-[#C9362B] hover:text-white transition-colors duration-300 uppercase tracking-wider">
                                    S'y rendre ➔
                                </button>
                            </div>
                        ))}
                    </div>

                    <div data-aos="fade-right" className="lg:col-span-7 min-h-85.5 bg-white p-2 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                        <img src={carte} alt="nos etablissement" className='w-full h-auto' />
                    </div>


                </div>
            </div>
        </section>
    )
}
