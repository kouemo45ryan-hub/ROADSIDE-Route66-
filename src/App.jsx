import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { SmallMenu } from './components/smallmenu'
import { OnRoad } from './components/onroad'
import { Reserver } from './components/reserver'
import { Footer } from './components/footer'
import { NosAdresses } from './components/adresse'
import { Ambiance } from './components/ambiance'
import { PanierView } from './components/panierview'
import { CheckoutModal } from './components/checkout'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {


    const [panier, setpanier] = useState(() => {
        const panierSauvegarde = localStorage.getItem('roadside_panier');
        return panierSauvegarde ? JSON.parse(panierSauvegarde) : [];
    });
    const [isPanierOuvert, setIsPanierOuvert] = useState(false);

    useEffect(() => {
        localStorage.setItem('roadside_panier', JSON.stringify(panier));
    }, [panier]);

    const ajouterAuPanier = (produit) => {
        setpanier((prevpanier) => {
            const articleExiste = prevpanier.find(item => item.name === produit.name)

            if (articleExiste) {
                return prevpanier.map(item =>
                    item.name === produit.name ? { ...item, quantite: item.quantite + 1 } : item
                );
            }
            return [...prevpanier, { ...produit, quantite: 1 }]
        })
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out",
        });
    }, []);

    const modifierQuantite = (nomProduit, changement) => {
        setpanier((prevPanier) =>
            prevPanier.map(item => {
                if (item.name === nomProduit) {
                    const nouvelleQuantite = item.quantite + changement;
                    return { ...item, quantite: nouvelleQuantite < 1 ? 0 : nouvelleQuantite };
                }
                return item;
            })
        );
    };

    const supprimerDuPanier = (nomProduit) => {
        setpanier((prevPanier) => prevPanier.filter(item => item.name !== nomProduit));
    };

    const [isCheckoutOuvert, setIsCheckoutOuvert] = useState(false);

    const viderLePanier = () => {
        setpanier([]);
    };

    return (
        <div className='bg-[#FFF8EA] min-h-screen w-full overflow-x-hidden relative m-0 p-0'>
            <Navbar panier={panier} onOuvrirPanier={setIsPanierOuvert} />
            <Hero />
            <SmallMenu onPanierAdd={ajouterAuPanier} onOuvrirPanier={() => setIsPanierOuvert(true)} />
            <OnRoad />
            <Ambiance />
            <Reserver />
            <NosAdresses />
            <Footer />

            <PanierView
                isOpen={isPanierOuvert}
                onClose={() => setIsPanierOuvert(false)}
                panier={panier}
                onModifierQuantite={modifierQuantite}
                onSupprimer={supprimerDuPanier}
                onOuvrirCheckout={() => {
                    setIsPanierOuvert(false);
                    setIsCheckoutOuvert(true);
                }}
            />
            <CheckoutModal
                isOpen={isCheckoutOuvert}
                onClose={() => setIsCheckoutOuvert(false)}
                panier={panier}
                onViderPanier={viderLePanier}
            />
        </div>
    )
}

export default App
