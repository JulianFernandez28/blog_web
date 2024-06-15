import React, { useState, useEffect } from 'react';
import { getPosts } from '../components/Posts/Api/post';
import { formatDate } from '../utilities/formatDate';
import CreatePost from '../components/Posts/CreatePost';
import { Link } from 'react-router-dom';



const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data.resultado);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-3">
      <CreatePost/>
      <div className='p-2'>
        <h1 className='display-6 text-left text-danger mb-4'>Publicaciones</h1>
        <hr />
        {posts.map(post => (
          <div key={post.id} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src={post.image} alt={post.title} className="card-img p-1" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                </div>
                <div className="card-footer text-muted d-flex justify-content-between align-items-center">
                  Publicado por {post.usuario.nombres} el {formatDate(post.createOn)}
                  <Link to={`/post/${post.id}`} className="btn btn-primary btn-sm">Comentarios</Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );

};

export default PostsPage;
