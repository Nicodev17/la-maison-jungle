import { useState } from 'react';
import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import Categories from './Categories';
import '../styles/ShoppingList.css';

function ShoppingList({ cart, updateCart }) {

    const [activeCategory, setActiveCategory] = useState('');
    const categories = plantList.reduce(
        (accumulator, plant) =>
            accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
            []
    );

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1}
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories 
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className='lmj-plant-list'>
                {plantList.map(({name, cover, id, light, water, price, category }) => 
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem 
                                id={id} 
                                cover={cover} 
                                name={name} 
                                water={water} 
                                light={light} 
                                price={price}
                            />
                            <button className='lmj-add-to-cart' onClick={() => addToCart(name, price)}>+ Ajouter</button>
                        </div>                    
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList