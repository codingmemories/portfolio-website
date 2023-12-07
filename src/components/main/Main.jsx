

import './Main.scss';

export default function Main () {

    return (
        <>
            <div className='wrapper'>
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
                <div className='about-title__block'>
                <h2 className='about-title'>About Me</h2>
                <p className='about-description'>My name is Vasylyna Lykhogodenko, and I'm a certified SMM specialist. 
                  I graduated from the International Technical University, majoring in "Philology", 
                  and foreign languages.
                  I currently work as a self-employed social media marketing specialist, offering 
                  online marketing management to companies. My goal is to assist clients in achieving 
                  their corporate objectives while also having a significant impact on various facets 
                  of digital marketing.
                </p>
                </div>

                <div className='about-title__image'>
                  <img src='' alt='vasylyna lykhogodenko' />
                  <h3>social media marketing</h3>
                </div>
              </section>

            </main>
            </div>
        </>
    );
};