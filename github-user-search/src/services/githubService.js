// src/services/githubService.js
import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/users';

// Function to search for a GitHub user by username
export const searchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error; // Throw error to handle it in the component
  }
};
