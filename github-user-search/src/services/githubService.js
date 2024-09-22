// src/services/githubService.js
import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  const BASE_URL = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
