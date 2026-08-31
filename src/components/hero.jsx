

export function Hero(){


    return(
        <div data-aos="fade-up" className="w-full md:h-120 min-h-125 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat ">
            <div className="bg-[#00000071] flex flex-col justify-center px-6 md:px-0 md:h-120 min-h-125 w-full">
                <div className="max-w-6xl w-full mx-auto md:pl-20 lg:p-40 flex flex-col gap-6">
                    <h1 className="font-bebas md:text-7xl text-5xl italic text-[#F5E8D0] leading-none">
                    LE GOÛT DE <br/>
                    L'AMÉRIQUE,<br/>
                    JUSTE À CÔTÉ. <br/>
                    </h1>
                    <h2 className="lowercase top-95 text-2xl font-barlow text-[#F5E8D0] leading-noneF">Burgers authentiques, shakes, et ambiance vintage.</h2>
                    <div className="  w-full md:w-auto flex sm:flex-row flex-col gap-8 left-85">
                        <button className='text-[#F5E8D0] bg-[#C9362B]  h-12 rounded-md px-4 font-bold uppercase font-barlow text-xl cursor-pointer hover:scale-105 transition duration-500'>VOIR LE MENU</button>
                        <button className='text-[#C9362B] bg-[#F5E8D0]  h-12 rounded-md px-4 font-bold uppercase font-barlow text-xl cursor-pointer hover:scale-105 transition duration-500'>TROUVER LE RESTO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}