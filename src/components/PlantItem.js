import CareScale from './CareScale';
import '../styles/PlantItem.css';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix ! 🌱✨`);
}

function PlantItem({ name, cover, light, water, price}) {

    return (
        <li className='lmj-plant-item' onClick={() => handleClick}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
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