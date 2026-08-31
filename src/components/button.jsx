export function Button({text, onClick}){


    return(
        <div className="flex justify-center">
            <button
            onClick={onClick}
            className="text-[#F5E8D0] bg-[#C9362B] hover:scale-105 transition duration-500 font-medium text-sm px-4 py-3 cursor-pointer mt-4 rounded-md shadow-sm active:scale-95 ">
                {text}
            </button>
        </div>
    )
}