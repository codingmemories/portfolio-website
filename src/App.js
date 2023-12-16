
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.scss';

export default function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
