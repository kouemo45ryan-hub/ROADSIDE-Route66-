import React from 'react'
import logo from '../images/Logo Route66.png'
import {Link} from 'react-router-dom'



export function Navbar(){



    return(
        <div>
            <img src={logo} alt="RoadSide" />
            <ul className=''>
                <li><a href="#home">HOME</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#reserver">RESERVER</a></li>
                <li><a href="#nos adresse">NOS ADRESSE</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <Link to = "" classname = "">Commandez Maintenant</Link>
        </div>
    )
}