import { useState } from 'react';
import axios from 'axios';

function ResinFacts() {
  const [numberOfFacts, setNumberOfFacts] = useState('');
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [warning, setWarning] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
  setNumberOfFacts(e.target.value);
  
  };

  const handleLoadFacts = async () => {
    setLoading(true);
    setError(null);
 
    let requestedNumber = Number(numberOfFacts);
        if (requestedNumber > 20) {
      requestedNumber = 20;
      setWarning('Maximum of 20 facts at a time. Showing 20 facts.');

      
      setTimeout(() => {
        setWarning(null);
      }, 5000);
    }


    try {
      const response = await axios.get(
        'https://api.github.com/repos/Thecanadianchris/Week9reactapp-/contents/src/resinfacts/facts.json?ref=main'
      );

     



      const decoded = atob(response.data.content);
      const allFacts = JSON.parse(decoded);
      const shuffledFacts = allFacts.sort(() => Math.random() - 0.5);
      

      setFacts(allFacts.slice(0, requestedNumber));
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
      <h1>300 Random Resin Facts</h1>

      <input
        type="number"
        placeholder="How many facts?"
        value={numberOfFacts}
        onChange={handleChange}
        style={{ padding: '8px', width: '100%' }}
      />

      <button onClick={handleLoadFacts} disabled={loading} style={{ marginTop: '10px' }}>
        {loading ? 'Loading...' : 'Load Facts'}
      </button>

      {warning && <p style={{ color: 'orange' }}>{warning}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {facts.length > 0 && (
        <ul style={{ marginTop: '20px' }}>
          {facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>



  );
}

export default ResinFacts;