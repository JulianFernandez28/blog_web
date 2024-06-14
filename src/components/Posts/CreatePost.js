import React from 'react';
import { useState } from 'react';
import CreatePostModal from './CreatePostModal';


const CreatePost = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    return (
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="card-text">Bienvenido, julian!</p>
          </div>
          <button type="button" className="btn btn-primary ml-3" onClick={openModal}>Publicar</button>
        </div>
        <CreatePostModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      </div>
    );
}

export default CreatePost
