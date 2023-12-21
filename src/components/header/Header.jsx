
import Brief from '../Brief/Brief';

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
                {<button onClick={() => Brief.openForm()}>Services</button> ? <Brief /> : false}
              </li>
              <li className='header-list-item'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='header-list-item'>
                <a href='#contact'>Contact with me</a>
              </li>
              <li className='header-list-item'>
                <a href='#about'>About</a>
              </li>
            </ul>
            </div>

            <div className='header__logo-info'>
              <h1 className='header__title'><span className='header__title-name'>vl</span> marketing</h1>
              <h2 className='header__description'>creator | social media marketing | frontend developer</h2>
              <button className='header__button'>
              <a href='#services'>work with me</a>
                {/* <a href='mailto:vlykhogodenko.pr@gmail.com' target='_blank' rel='noreferrer'>work with me</a> */}
              </button>
            </div>
          </header>
        </>
    );
};
