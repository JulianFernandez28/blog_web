import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import PostsPage from './Page/PostPage';
import HomePage from './Page/HomePage';
import CommentPage from './Page/CommentPage';
import Footer from './components/Footer';
import UserPage from './Page/UserPage';
import RegisterPage from './Page/RegisterPage';
import ProtectedRoute from './utilities/ProtectedLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <Routes>
          <Route path="/login" element={<HomePage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="post/:id" element={<CommentPage />} />
            <Route path="postPage" element={<PostsPage />} />
            <Route path="perfil" element={<UserPage />} />
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
