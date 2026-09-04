import { Card } from "../components/cart"
import {Button} from '../components/button'
import {useState, useEffect} from 'react'

export function SmallMenu({onPanierAdd}){

const [MENU, setMENU] = useState([]);

useEffect(() => {
    async function fetchProduct(){
        const response = await fetch('http://localhost:3000/api/produits')
        const data = await response.json()

        const parseNumber = data.map(produit =>({
            ...produit,
            price : parseFloat(produit.price),
        }))

        setMENU(parseNumber)
        console.log('Produits avec prix convertis:', parseNumber)
        console.log(MENU)
    }
    fetchProduct()
}, []);

    return(
        <section data-aos="fade-up">
            <p className="text-center text-[#C9362B] font-bebas py-4">
            ★NOS FAVORIS★
            </p>
            <p className="text-center text-[#121010] font-bebas font-bold text-5xl">
            MADE TO SATISFY
            </p>
            <div className="w-24 h-1 bg-[#C9362B] mx-auto mt-4 rounded-full"></div> <br />
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-items-center mt-4">
                {MENU.map((menu, id) => (
                <Card
                data-aos="fade-up"
                data-aos-delay={id * 150}
                key={id}
                image = {null}
                nom = {menu.name}
                description = {menu.description}
                prix = {menu.price}
                badge = {menu.badge}
                onClick = {() => onPanierAdd(menu)} />))}
            </section>
            <Button text='VOIR LE MENU COMPLET ➔' />
        </section>
    )
}