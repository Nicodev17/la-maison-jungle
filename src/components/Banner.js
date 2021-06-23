import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    const title = 'Jungle House';
    return (
        <div className='lmj-banner'>
            <div className="lmj-title">
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default Banner;