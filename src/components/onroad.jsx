import Road from '../../public/images/Road.png'

export function OnRoad() {
    return (
        <section data-aos="fade-up" className='flex bg-[#000000] text-white items-center gap-4 p-2 mt-8'>
            <div>
                <img data-aos="fade-right" src={Road} alt="Notre Histoire" className='md:max-w-150 md:m-8'/>
            </div>
            <div data-aos="fade-left" className='flex flex-col justify-between items-baseline gap-4'>
                <p className=" text-[#C9362B] font-bebas py-4">
                    ★ NOTRE HISTOIRE
                </p>
                <h1 className='font-bebas font-bold text-3xl sm:text-4xl md:text-5xl text-[#f6eee0] uppercase tracking-wide'>
                    Bâti sur la route. <br />
                    Cuisiné pour vous.
                </h1>
                <p className="font-barlow text-gray-300 leading-relaxed">
                    Roadside American Eats est né de l'amour de la bonne cuisine, <br />
                    des longs road trips et des souvenirs inoubliables. <br />
                    Nous apportons l'esprit de la mythique Route 66 directement dans votre assiette <br />
                    avec des ingrédients frais et des saveurs audacieuses.
                </p>
                <button className='p-2 border-2 border-[#C9362B] rounded-md md:p-2 sm:p-2 cursor-pointer hover:scale-95 transition duration-500 font-barlow font-semibold text-sm uppercase tracking-wider text-[#f6eee0]'>
                    En savoir plus sur nous ➔
                </button>
            </div>
        </section>
    )
}
