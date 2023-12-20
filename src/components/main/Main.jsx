

import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './Main.scss';

export default function Main () {

    return (
        <>
            <main className="main">
              <Projects />
              <Contact />
              <About />
            </main>
        </>
    );
};