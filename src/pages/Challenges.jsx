import { useState } from 'react';
import axios from 'axios';

function Challenges() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  



  const handleLoadRepos = async () => {
    setLoading(true);
    setError(null);




    try {
      const response = await axios.get(
        'https://api.github.com/users/Thecanadianchris/repos?sort=updated&per_page=8'
      );
      setRepos(response.data);
    } catch (err) {
      setError('Could not load repos. Please try again.');
    } finally {
      setLoading(false);
    }
  };







  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>My Projects</h1>

      <button onClick={handleLoadRepos} disabled={loading}>
        {loading ? 'Loading...' : 'Load My GitHub Repos'}
      </button>

      {error && <p>{error}</p>}







      {repos.length > 0 && (
        <ul style={{ marginTop: '20px' }}>
          {repos.map((repo) => (
            <li key={repo.id} style={{ marginBottom: '15px' }}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
              <p>{repo.description || 'No description provided.'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Challenges;