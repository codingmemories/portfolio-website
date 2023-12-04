
import logo from '../../assets/logo/logo.png';
import './Header.scss';

export default function Header () {
    return (
        <>
          <header className='header'>
            
            <div>
            <ul className='header-list'>
              <li className='header-list-item'>
                <a href='#home' target='_blank'>Home</a>
              </li>
              <li className='header-list-item'>
                <a href='#services' target='_blank'>Services</a>
              </li>
              <li className='header-list-item'>
                <a href='#projects' target='_blank'>Projects</a>
              </li>
              <li className='header-list-item'>
                <a href='#contacts' target='_blank'>Contacts</a>
              </li>
              <li className='header-list-item'>
                <a href='#about' target='_blank'>About</a>
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
