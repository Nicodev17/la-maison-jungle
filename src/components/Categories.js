import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='lmj-categories'>
            <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''> Filtrer les plantes à afficher </option>
                {categories.map((categories) => (
                    <option key={categories} value={categories}>
                        { categories }
                    </option>
                ))}
            </select>

            <button className='lmj-reset-categories' onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
}

export default Categories