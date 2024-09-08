import { useState } from 'react';

function useAuth() {
  // Simulate an authentication state (change this logic as needed)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}

export default useAuth;
