export function Card({image, nom, description, prix, badge,onClick,onPanierAdd}){
    return(
        <article id="menu" className="rounded-2xl w-64 bg-white shadow-lg flex flex-col justify-between hover:scale-105 transition duration-500" >
            <div className="relative">
            <img src= {image} alt={nom} className="w-full h-44 object-cover rounded-t-2xl " />
            {badge && (
            <div className="absolute top-3 right-0 bg-[#D99A35] text-white text-xs font-bold px-3 py-1 rounded-l-md uppercase tracking-wider shadow-sm ">{badge}</div>)}
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <h3 className="font-bebas text-gray-800 text-center text-2xl tracking-wide uppercase">{nom}</h3>
                <p className="text-gray-500 text-center text-sm leading-relaxed line-clamp-3 px-1">{description}</p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-xl font-bold text-gray-900">$ {prix}</span>
                    <button onClick={onClick}
                    className=" text-[#F5E8D0] bg-[#C9362B] hover:scale-105 transition duration-500 font-medium text-sm px-4 py-2 rounded-md shadow-sm active:scale-95 cursor-pointer" >Commander</button>
                </div>
            </div>
        </article>
    )
}