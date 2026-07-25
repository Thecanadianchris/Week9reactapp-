import { useState } from 'react';
import axios from 'axios';

function ResinFacts() {
  const [facts, setFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);





  const handleLoadFacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        'https://api.github.com/repos/Thecanadianchris/Week9reactapp-/contents/src/resinfacts/facts.json?ref=main'
      );

     



      const decoded = atob(response.data.content);
      const factsArray = JSON.parse(decoded);

      

      setFacts(factsArray);
      setCurrentIndex(0);
    } catch (err) {
      setError('Could not load resin facts. Please try again.');
    } finally {
      setLoading(false);
    }
  };







  const handleNextFact = () => {
    setCurrentIndex((currentIndex + 1) % facts.length);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Resin Facts</h1>

      <button onClick={handleLoadFacts} disabled={loading}>
        {loading ? 'Loading...' : 'Load Resin Facts'}
      </button>

      {error && <p>{error}</p>}

      {facts.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <p>{facts[currentIndex]}</p>
          <button onClick={handleNextFact}>Next Fact</button>
        </div>
      )}
    </div>
  );
}

export default ResinFacts;