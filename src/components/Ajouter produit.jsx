import React from "react";
import { useState } from "react";

function AjouterPro(){
    const [message, setMsg] = useState(false);
    const [produit, setProduit] = useState({
    name: '',
    description: '',
    badge: '',
    price: '',
    category: ''
});
// const [image, setImage] = useState();

function handlechange(e) {
    const { name, value } = e.target
    setProduit(prev => ({
        ...prev,
        [name]: value,
    }))
}

async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/api/produits', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(produit)
        })

        const data = await response.json()
        if (data.success) {
            console.log('Produit créé:', data.produit);
            setMsg(true),
                setProduit({ name: '', description: '', price: '', category: '', badge: '' })
        } else {
            console.log('erreur de reseaux', data.error)
        }
    } catch (erreur) {
        console.error('erreur de serveur', erreur)
    }
}
return (
    <div>
        <h1 className="font-bebas font-bold text-4xl md:text-5xl text-center mt-8">Ajouter Un Plat Au Menu</h1>
        <div className="flex justify-center items-center mt-10">
            <form action="" method="post" className="flex flex-col gap-6 max-w-xl w-full shadow-lg p-6 rounded-md bg-[#000000ad] ">
                <label htmlFor="name" className="text-white">Nom du delice</label>
                <input
                    className="w-full rounded-sm bg-white px-4 py-2  "
                    type="text"
                    name="name"
                    id="name"
                    value={produit.name}
                    onChange={handlechange}
                />
                <label className=" text-white" htmlFor="description">Description</label>
                <input
                    className="w-full rounded-sm bg-white px-4 py-2 "
                    type="text"
                    name="description"
                    id="description"
                    value={produit.description}
                    onChange={handlechange}
                />
                <label className="text-white" htmlFor="badge">Badge</label>
                <input
                    className=" w-full rounded-sm bg-white px-4 py-2"
                    type="text"
                    name="badge"
                    id="badge"
                    value={produit.badge}
                    onChange={handlechange}
                />
                <label className="text-white" htmlFor="price">Prix</label>
                <input
                    className="w-full rounded-sm bg-white px-4 py-2"
                    type="number"
                    name="price"
                    id="price"
                    value={produit.price}
                    onChange={handlechange}
                />
                <label className="text-white" htmlFor="image">Image </label>
                {/* <input
                    className="rounded-sm border px-4 py-2 border-white text-white cursor-pointer"
                    type="file"
                    name="image"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                /> */}
                <label className="text-white" htmlFor="category">Category</label>
                <select className="w-full rounded-sm bg-white text-gray-900 px-4 py-2" name="category" id="category" value={produit.category} onChange={handlechange}>
                    <option value="/">--choisir--</option>
                    <option value="Boisson">Boisson</option>
                    <option value="Food">Food</option>
                </select>
                <button onClick={handleSubmit} className=" cursor-pointer p-3 bg-[#C9362B] rounded-md hover:scale-105  duration-500 text-white">Ajouter au Menu</button>
            </form>
        </div>
        {message &&
            <div className="p-10 text-center space-y-4 flex-1 flex flex-col justify-center items-center">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold animate-bounce">✓</div>
                <h4 className="font-bebas text-3xl text-green-700">Plat créé avec success</h4>
            </div>
        }
    </div>
)
}

export default AjouterPro