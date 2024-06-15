import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import PostsPage from './Page/PostPage';
import CommentPage from './Page/CommentPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <Routes>
          <Route path="/post/:id" element={<CommentPage />} />
          <Route path="/" element={<PostsPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
