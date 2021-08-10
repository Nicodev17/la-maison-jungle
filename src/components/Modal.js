import logoCart from '../assets/logo_cart2.png';
import '../styles/Modal.css';

function Modal({addToCart, name, cover, id, light, water, price, category}) {
    return (
        <div  key={id} className='lmj-plant-modal-content'>
            <img id="lmj-modal-cover" src={cover} alt={`${name} cover`}/>
            <div id='lmj-modal-right-content'>
                <h4>{name}</h4>
                <div id="lmj-modal-care-price-zone">
                    <div id="lmj-modal-care-zone"> 
                        <span>{light} en lumière</span>
                        <span>{water} en eau</span>
                        <span>Plante d'{category}</span>
                    </div>
                    <span id="modal-item-price">{price}€</span>
                </div>
                <div id="modal-tips-zone">
                    <p> Cette plante d'une grande beauté vous confèrera une décoration comme nulle autre ! ✨</p>
                </div>
                <button id="modal-add-to-cart" onClick={() => addToCart(name, price)}>
                Ajouter au panier 
                <img src={logoCart} alt='logo panier' id="modal-logo-cart"/>
                </button>
            </div>
        </div>
    )
}
export default Modal


