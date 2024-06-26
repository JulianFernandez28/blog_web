
import React, { useState, useEffect, useCallback } from 'react';
import { getPosts } from '../components/Posts/Api/post';
import { formatDate } from '../utilities/formatDate';
import CreatePost from '../components/Posts/CreatePost';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaComments } from 'react-icons/fa';
import EditPostModal from '../components/Posts/EditPostModal';
import DeletePostModal from '../components/Posts/DeletePostModal';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  var userId = localStorage.getItem('userId');

  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  };

  const fetchPosts = useCallback(async () => {
    try {
      const response = await getPosts();
      setPosts(response.data.resultado);
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleClose = () => {
    setShow(false);
    fetchPosts();
  };
  const handleDelete = (post) => {
    setCurrentPost(post);
    setShowDeleteConfirm(true);
  };


  return (
    <div className="container mt-3 p-3">
      <CreatePost />
      <div className='mx-2'>
        {posts.map(post => (
          <div key={post.id} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src={post.image} alt={post.title} className="card-img p-1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div className="col-md-8 d-flex flex-column">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                </div>
                <div className="card-footer text-muted d-flex justify-content-between align-items-center">
                  Publicado por {post.usuario.nombres} el {formatDate(post.createOn)}
                  <div className="d-flex">
                    <Link to={`/post/${post.id}`} className="btn btn-primary btn-sm m-2"><FaComments /></Link>
                    {post.usuario.id === userId && (
                      <div className="d-none d-md-block">
                        <button onClick={() => handleShow(post)} className="btn btn-warning btn-sm m-2"><FaEdit /></button>
                        <button onClick={() => handleDelete(post)} className="btn btn-danger btn-sm m-2"><FaTrashAlt /></button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <EditPostModal show={show} handleClose={handleClose} post={currentPost} fetchPosts={fetchPosts} />      </div>
        <DeletePostModal show={showDeleteConfirm} handleClose={() => setShowDeleteConfirm(false)} post={currentPost} fetchPosts={fetchPosts} />
    </div>
  );
};

export default PostsPage;
