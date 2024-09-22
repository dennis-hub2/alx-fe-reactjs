// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError["Looks like we cant find the user."];
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search GitHub Users</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering for loading, error, and result states */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
