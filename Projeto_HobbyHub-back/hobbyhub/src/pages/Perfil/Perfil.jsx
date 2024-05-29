import React, { useState } from 'react';
import './Perfil.css';
import logoprojeto from '../../assets/logoprojeto.png';

const Perfil = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Você pode fazer algo com o arquivo selecionado aqui, como enviá-lo para o servidor ou exibir uma prévia.
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className='profile_main'>
      <div className='content_profile'>
        <div className='tittle_page'>
          <h1>Perfil do usuário</h1>
        </div>
        <div className='upload_img'>
         {selectedImage && (
          <img src={selectedImage} alt="Logo" />
          )}
        </div>
        <div className='upload_img_btn'>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="upload_button_profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <path d="M35.4584 7.82081L29.1792 1.54165C28.3597 0.771866 27.2858 0.330177 26.1619 0.300599C25.0379 0.271021 23.9423 0.655618 23.0834 1.38123L2.4584 22.0062C1.71766 22.7532 1.25643 23.7323 1.15215 24.7791L0.166736 34.3354C0.135865 34.6711 0.179419 35.0094 0.294293 35.3263C0.409167 35.6432 0.592533 35.9308 0.83132 36.1687C1.04545 36.3811 1.29941 36.5492 1.57862 36.6632C1.85783 36.7773 2.1568 36.8351 2.4584 36.8333H2.66465L12.2209 35.9625C13.2677 35.8582 14.2468 35.397 14.9938 34.6562L35.6188 14.0312C36.4193 13.1855 36.852 12.057 36.8219 10.8929C36.7918 9.72877 36.3015 8.62406 35.4584 7.82081ZM11.8084 31.3791L4.9334 32.0208L5.55215 25.1458L18.5001 12.3583L24.6876 18.5458L11.8084 31.3791ZM27.6667 15.475L21.5251 9.33331L25.9938 4.74998L32.2501 11.0062L27.6667 15.475Z" fill="white"/>
            </svg> <p>Alterar foto</p>
          </label>
        </div>
        <p className='name'>Bruno Santos</p>
        <p className='user_name'>Nome de usuário:</p>
        <p className='email'>Email:</p>
        <div className='btn_perfil'>
          <button className='psswd'>
            Alterar senha
          </button>
          <button className='clear'>
            Excluir conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
