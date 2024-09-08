import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = false; // Simulate authentication

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/profile/*" 
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={Profile} />} 
        />
        <Route path="/posts/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
