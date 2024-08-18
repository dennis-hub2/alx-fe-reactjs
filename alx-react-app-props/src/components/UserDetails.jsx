import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Use the useContext hook to get the context value
  const userData = useContext(UserContext);

  // Check if userData is available
  if (!userData) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
