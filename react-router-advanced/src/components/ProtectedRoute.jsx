import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

function ProtectedRoute({ element: Component, ...rest }) {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
}

export default ProtectedRoute;
