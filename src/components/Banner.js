import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    const title = 'Jungle House';
    return (
        <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;