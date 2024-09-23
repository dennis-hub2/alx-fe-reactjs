// src/services/githubService.js
import axios from 'axios';

// Base URL for GitHub user search
const BASE_URL = 'https://api.github.com/search/users';

// Function to search GitHub users with filters for username, location, and minimum repositories
export const searchGitHubUsers = async (username, location = '', minRepos = 0) => {
  try {
    // Construct the query string based on input criteria
    let query = `${username}`;

    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Make the API request to GitHub's search users endpoint
    const response = await axios.get(`${BASE_URL}?q=${query}`);

    // Return the user data from the API response
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
