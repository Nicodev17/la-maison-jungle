import CareScale from './CareScale';
import logoCart from '../assets/logo_cart2.png';
import '../styles/Modal.css';

const typeLabel = {
    'extérieur': 'd\'intérieur',
    'intérieur': 'd\'extérieur',
    'plante grasse': 'grasse'
};

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
};

function Modal({addToCart, name, cover, id, light, water, price, category}) {
    return (
        <div  key={id} className='lmj-plant-modal-content'>
            <img id="lmj-modal-cover" src={cover} alt={`${name} cover`}/>
            <div id='lmj-modal-right-content'>
                <h4>{name}</h4>
                <div id="lmj-modal-care-price-zone">
                    <div id="lmj-modal-care-zone"> 
                        <CareScale careType='water' scaleValue={water} />
                        <CareScale careType='light' scaleValue={light} />
                        <span>{category}</span>
                    </div>
                    <span id="modal-item-price">{price}€</span>
                </div>
                <div id="modal-tips-zone">
                    <p> Cette plante {typeLabel[category]} vous confèrera une décoration comme nulle autre ! ✨ 
                    <br></br> <br></br> Pour sa bonne santé, assurez-vous de lui donner {quantityLabel[light]} de lumière et {quantityLabel[water]} d'eau.</p>
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


