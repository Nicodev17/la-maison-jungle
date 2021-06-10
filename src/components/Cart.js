import { useState, useEffect } from 'react';
import '../styles/Cart.css';
import logoCart from '../assets/logo_cart.png';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`;
    }, [total]);

    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}> 
                Fermer
            </button>

            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount} 
                            </div>
                        ))}
                    </ul>

                    <h3>Total : {total}€</h3>
                    <button className='lmj-button-clean-cart' onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>
                    <h2>Panier</h2>
                    Votre panier est vide, ajoutez-y des plantes ! 🌵
                </div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'> 
            <button
                className='lmj-cart-toggle-button'
                onClick={()=> setIsOpen(true)}>
                <img src={logoCart} className='lmj-logo-cart' alt='logo panier'/>
                Panier
            </button>
        </div>
    )
}

export default Cart;
