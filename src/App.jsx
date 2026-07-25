import { useState } from 'react';
import logo from './assets/images/eonlogo.png';
import Home from './Home';
import Gallery from './Gallery';
import ResinFacts from './ResinFacts';



function App() {
  const [page, setPage] = useState('home');
  
  return (
     <div>
      <nav>
        <img src={logo} alt="logo" style={{ height: '50px' }} />
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('gallery')}>Gallery</button>
        <button onClick={() => setPage('facts')}>Resin Facts</button>
      </nav>
      {page === 'home' && <Home />}
      {page === 'gallery' && <Gallery />}
      {page === 'facts' && <ResinFacts />}
      
    </div>
  );
}

export default App;
 

