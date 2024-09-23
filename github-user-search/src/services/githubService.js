// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

// Function to search GitHub users with advanced filters
export const searchGitHubUsers = async (username, location, minRepos) => {
  try {
    // Construct the query string
    let query = `${username}`;

    // Add optional filters
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Make the API request with the constructed query
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
