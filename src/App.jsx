import { useState } from 'react';
import Gallery from './Gallery';
import ResinFacts from './ResinFacts';



function App() {
  const [page, setPage] = useState('gallery');
  
  return (
     <div>
      <nav>
        <button onClick={() => setPage('gallery')}>Gallery</button>
        <button onClick={() => setPage('facts')}>Resin Facts</button>
      </nav>

      {page === 'gallery' && <Gallery />}
      {page === 'facts' && <ResinFacts />}
    </div>
  );
}

export default App;
 

