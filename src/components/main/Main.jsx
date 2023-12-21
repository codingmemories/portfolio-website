

import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './Main.scss';

export default function Main () {

    return (
        <>
            <main className="main">
              <Projects />
              <Services />
              <Contact />
              <About />
            </main>
        </>
    );
};
