

export function Hero(){


    return(
        <div className="w-full h-120 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat ">
            <div className="bg-[#00000071] h-120 w-full">
                <h1 className="font-bebas text-7xl italic absolute left-80 top-40 text-[#F5E8D0]">
                LE GOÛT DE <br/>
                L'AMÉRIQUE,<br/>
                JUSTE À CÔTÉ. <br/>
                </h1>
                <h2 className="lowercase absolute left-80 top-95 text-2xl font-barlow text-[#F5E8D0] ">Burgers authentiques, shakes, et ambiance vintage.</h2>
                <div className="absolute top-110 flex gap-8 left-85">
                    <button className='text-[#F5E8D0] bg-[#C9362B]  h-12 rounded-md px-4 font-bold uppercase font-barlow text-xl cursor-pointer hover:scale-x-105 transition duration-500'>VOIR LE MENU</button>
                    <button className='text-[#C9362B] bg-[#F5E8D0]  h-12 rounded-md px-4 font-bold uppercase font-barlow text-xl cursor-pointer hover:scale-x-105 transition duration-500'>TROUVER LE RESTO</button>
                </div>
            </div>
        </div>
    )
}