export function Reserver() {
    return (
        <section data-aos="fade-up" id="reserver" className="bg-[#FAF6F0] p-8 max-w-4xl mx-auto rounded-lg">
            <h1 className="font-bebas text-3xl font-bold text-center mb-6 text-[#1A1A1A] tracking-wide">RESERVATIONS</h1>
            <div className="w-24 h-1 bg-[#C9362B] mx-auto mt-4 rounded-full"></div> <br />
            <div className=" flex flex-col md:flex-row items-end justify-between gap-4 bg-white p-12 rounded-md shadow-sm border border-gray-100">
                {/* Date */}
                <div className="w-full md:w-1/4">
                    <label htmlFor="date" className="block text-xs font-semibold text-gray-500 mb-1">Pick up date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        defaultValue="2022-02-23"
                        className="w-full p-2 text-sm bg-[#FAF6F0] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#C9362B]"
                    />
                </div>

                {/* Heure */}
                <div className="w-full md:w-1/4">
                    <label htmlFor="heure" className="block text-xs font-semibold text-gray-500 mb-1">Heure</label>
                    <input
                        type="time"
                        name="heure"
                        id="heure"
                        defaultValue="18:00"
                        className="w-full p-2 text-sm bg-[#FAF6F0] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#C9362B]"
                    />
                </div>

                {/* Personnes */}
                <div className="w-full md:w-1/4">
                    <label htmlFor="personnes" className="block text-xs font-semibold text-gray-500 mb-1">Nombre de personnes</label>
                    <select
                        name="personnes"
                        id="personnes"
                        defaultValue="6"
                        className="w-full p-2 text-sm bg-[#FAF6F0] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#C9362B] appearance-none"
                    >
                        <option value="">--choisir--</option>
                        <option value="1">1 person</option>
                        <option value="2">2 personnes</option>
                        <option value="3">3 personnes</option>
                        <option value="4">4 personnes</option>
                        <option value="5">5 personnes</option>
                        <option value="6">6 personnes</option>
                        <option value="7">7 personnes</option>
                        <option value="8">8 personnes</option>
                    </select>
                </div>

                {/* Bouton de soumission */}
                <button className="w-full md:w-auto px-6 py-2 text-xs font-bold text-white bg-[#C9362B] rounded uppercase tracking-wider cursor-pointer hover:bg-[#b02f25] transition duration-300 whitespace-nowrap h-9.5">
                    Réserver maintenant
                </button>
            </div>
        </section>
    )
}
