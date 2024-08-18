import React, { createContext } from 'react';

// Create the context
const UserContext = React.createContext();

// Export a provider component
export const UserProvider = ({ children, value }) => (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
);

export default UserContext;