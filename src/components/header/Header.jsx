
import logo from '../../assets/logo/logo.png';
import './Header.scss';

export default function Header () {
    return (
        <>
          <header className='header'>
            
            <div>
            <ul className='header-list'>
              <li className='header-list-item'>
                <a href='#home'>Home</a>
              </li>
              <li className='header-list-item'>
                <a href='#services'>Services</a>
              </li>
              <li className='header-list-item'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='header-list-item'>
                <a href='#contacts'>Contacts</a>
              </li>
              <li className='header-list-item'>
                <a href='#about'>About</a>
              </li>
            </ul>
            </div>

            <div>
              <img src={logo} alt='logo' width={500} />
            </div>
          </header>
        </>
    );
};
