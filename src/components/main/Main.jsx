
import Header from '../header/Header';
import Footer from '../footer/Footer';

import circle from '../../assets/svg/circle.svg';
import avatar from '../../assets/image/avatar.png';
import './Main.scss';

export default function Main () {

    return (
        <>
            <div className='wrapper'>
            <Header />

            <main className="main">
              
              <section id='services'>
                <h2>Services</h2>
                <p>this services is ....</p>
              </section>

              <section id='projects'>
                <h2>Projects</h2>
                <p>this projects is ....</p>
              </section>

              <section id='contacts'>
                <h2>Contacts</h2>
                <p>this contacts is ....</p>
              </section>

              <section id='about'>
                <div className='about__text-section'>
                <h2 className='about__title'>About Me</h2>
                <p className='about__description'>My name is Vasylyna Lykhogodenko, and I'm a certified SMM specialist. 
                  I graduated from the International Technical University, majoring in "Philology", 
                  and foreign languages.
                </p>
                <p className='about__description'>
                  I currently work as a self-employed social media marketing specialist, offering 
                  online marketing management to companies.
                </p>
                <p className='about__description'>
                  My goal is to assist clients in achieving 
                  their corporate objectives while also having a significant impact on various facets 
                  of digital marketing.
                </p>
                </div>

                <div className='about__image-section'>
                  <img className='about__image' src={avatar} alt='vasylyna lykhogodenko' width={200} />
                  <img className='about__svg-circle' src={circle} alt='circle' width={900} />
                  <h3 className='about__profession'>social media marketing</h3>
                </div>
              </section>

            </main>

            <Footer />
            </div>
        </>
    );
};