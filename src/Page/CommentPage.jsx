import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../components/Posts/Api/post';
import CommentList from '../components/Comments/CommentList';
import CommentInput from '../components/Comments/CommentInput';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';






const CommentPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [commentAdded, setCommentAdded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id);
        setPost(response.data.resultado);
      } catch (error) {
        console.error('Error al obtener el post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtiene el post
  }

  return (
    <Container className="mt-3">
      <button onClick={() => navigate(-1)} className="btn btn-warning mx-4">
        <FaArrowLeft /> Regresar
      </button>
      <Card className='m-4'>
        <Row>
          <Col md={3}>
            <Card.Img variant="top" src={post.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Col>
          <Col md={9}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.content}
              </Card.Text>
              <Card.Text>
                Publicado por: {post.usuario.nombres}
              </Card.Text>
              <Card.Text>
                Fecha de publicación: {new Date(post.createOn).toLocaleDateString()}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="m-4 align-items-center ">
          <CommentInput postId={post.id} onCommentAdded={() => setCommentAdded(!commentAdded)} />
        </Row>
        <hr />
        <Row className="m-4 align-items-center ">
          <CommentList postId={post.id} commentAdded={commentAdded} />
        </Row>
      </Card>
    </Container>
  );
};

export default CommentPage;
