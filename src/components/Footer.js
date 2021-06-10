import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('');
	
	function handleInput(e) {
		setInputValue(e.target.value);
	}
	
	function handleBlur() {
		if(!inputValue.includes('@')) {
			alert("❗ Il n'y a pas de @, ceci n'est pas une adresse mail valide");
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionnés de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre @mail :
				<input 
					className='lmj-footer-field'
					placeholder='Entrez votre mail'
					onChange={handleInput}
					value={inputValue} 
					onBlur={handleBlur}
				/>
				<button onClick={() => 
					alert("Merci, nous vous enverrons bientôt des nouvelles sur votre adresse mail : " + inputValue)}> 
					Valider 
				</button>
			</div>
		</footer>
	)
}

export default Footer