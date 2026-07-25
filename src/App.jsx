import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ResinFacts from './pages/ResinFacts';
import Challenges from './pages/Challenges';



function App() {
  const [page, setPage] = useState('home');
  
  return (
     <div>
      <NavBar page={page} onSetPage={setPage} />

      {page === 'home' && <Home />}
      {page === 'gallery' && <Gallery />}
      {page === 'facts' && <ResinFacts />}
      {page === 'projects' && <Challenges />}
    </div>
  );
}

export default App;


