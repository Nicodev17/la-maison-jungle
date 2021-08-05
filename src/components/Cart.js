import React, { useState, useEffect} from 'react';
import '../styles/Cart.css';
import logoCart from '../assets/logo_cart.png';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);
    const totalPrice = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    const totalItems = cart.reduce(
        (acc, plantType) => acc + plantType.amount,
        0
    );

    function removeToCart(amount, name, price) {
        const currentPlantToRemove = cart.find((plant) => plant.name === name);
        
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name !== name
        );

        if(amount === 1) {
            updateCart([
                ...cartFilteredCurrentPlant
            ]);
        } else {
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantToRemove.amount - 1 }
            ]);
        }
    }
    
    useEffect(() => {
        document.title = `JH: ${totalPrice}€ d'achat`;
    }, [totalPrice]);

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
                            <div key={`${name}-${index}`} className="lmj-item-cart">
                                • {name} {price}€ × {amount} 
                                <button className='lmj-remove-item-cart' title='Retirer un article' onClick={() => removeToCart(amount, name, price)}> ✖ </button>
                            </div>
                        ))}
                    </ul>


                    <h3>Total : {totalPrice}€</h3>
                    {totalItems >= 2 ? <p className='lmj-cart-total-items'>({totalItems} articles)</p> : <p className='lmj-cart-total-items'>({totalItems} article)</p>}
                    <div className='lmj-cart-buttons-box'>
                        <button className='lmj-button-pay-cart'>Commander</button>
                        <button className='lmj-button-clean-cart' onClick={() => updateCart([])}>Vider le panier</button>
                    </div>
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
            {totalItems >= 1 ?
                <div> 
                    <span>{totalItems}</span>
                    <div className='lmj-cart-add-pop-box'> 
                        <div className='lmj-cart-add-pop'></div>
                        <div className='lmj-cart-add-pop'></div>
                        <div className='lmj-cart-add-pop'></div>
                    </div>
                   
                </div> 
            : null}
        </div>
    )
}

export default Cart;
