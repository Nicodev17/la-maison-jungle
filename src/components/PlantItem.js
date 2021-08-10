import CareScale from './CareScale';
import '../styles/PlantItem.css';


function PlantItem({ name, cover, light, water, price}) {

    return (
        <li className='lmj-plant-item'>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} title="Voir l'article"/>
            {/* && précise que l'élément ne sera généré que si la condition est respectée (true)*/}
            {/* {isSpecialOffer && <div className='lmj-sales'>Soldes</div>} */}
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;