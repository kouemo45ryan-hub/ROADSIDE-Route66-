import { Card } from "../components/cart"
import Burger from '../../public/images/Roadside Burger.jpg'
import nugg from '../../public/images/nugg.jpg'
import Chiken from '../../public/images/Chiken.jpg'
import Milks from '../../public/images/Milkshake.jpg'
import {Button} from '../components/button'

const MENU =[
    {image:Burger , nom: 'RoadSide Burger', description:"Smash beef,cheddar,bacon,picles,onions, our special sauce", prix:'12.99', badge:'nouveau'},
    {image:nugg, nom:'RoadSide Nuggest', description:'Smash beef,cheddar,bacon,picles,onions, our special sauce', prix:'9.49', badge: 'fondant'},
    {image:Chiken , nom: 'RoadSide Chiken', description:"Smash beef,cheddar,bacon,picles,onions, our special sauce", prix:'14.99', badge:'PEAKLE'},
    {image:Milks, nom:'RoadSide MilkShaKe', description:'Smash beef,cheddar,bacon,picles,onions, our special sauce', prix:'11.30', badge: 'HIGHT TASTE'}
]
export function SmallMenu({onPanierAdd}){
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
                image = {menu.image}
                nom = {menu.nom}
                description = {menu.description}
                prix = {menu.prix}
                badge = {menu.badge}
                onClick = {() => onPanierAdd(menu)} />))}
            </section>
            <Button text='VOIR LE MENU COMPLET ➔' />
        </section>
    )
}