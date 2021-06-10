import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';
import '../styles/PlantItem.css';

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
};


// Props passés en paramètres de la fonction (destructuration)
function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];
    
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun icon' />
    ) : (
        <img src={Water} alt='water icon' />
    )

    return (
        <div>
            <span className='lmj-care-scale-info' aria-label={`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`}>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}
            </span>
        </div>
    )
}

export default CareScale;