import React, { useState } from 'react';
import './Crie.css'; 

const Crie = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div className='create_main'>
      <div className='tittle_page_create'>
        <h1>Crie</h1>
      </div>
      <div className='content_create'>
        <div className='left_content_create'>
        {selectedImage && (
            <div className='selected-image-preview'>
                <img src={selectedImage} alt="Imagem Selecionada" />
            </div>
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} id="imageUpload" />
            <label htmlFor="imageUpload" className="upload_button_create">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path d="M40.4488 8.91171L33.3133 1.75045C32.382 0.872533 31.1617 0.368796 29.8845 0.335063C28.6072 0.301329 27.3622 0.739954 26.3862 1.5675L2.94839 25.0899C2.10663 25.9418 1.5825 27.0585 1.464 28.2523L0.344197 39.1511C0.309116 39.5339 0.35861 39.9197 0.48915 40.2811C0.61969 40.6425 0.828062 40.9706 1.09941 41.2419C1.34275 41.4842 1.63134 41.6758 1.94863 41.8059C2.26591 41.9359 2.60566 42.0019 2.94839 41.9999H3.18277L14.0423 41.0067C15.2319 40.8878 16.3445 40.3618 17.1933 39.517L40.6311 15.9946C41.5408 15.0301 42.0324 13.743 41.9983 12.4153C41.9641 11.0877 41.4069 9.8278 40.4488 8.91171ZM13.5735 35.7795L5.76092 36.5113L6.46406 28.6705L21.1778 14.0866L28.2091 21.1434L13.5735 35.7795ZM31.5945 17.6411L24.6153 10.6367L29.6935 5.40949L36.8029 12.5446L31.5945 17.6411Z" fill="white"/>
                                </svg>
            Selecione a imagem 
            </label>
            <div className='hobby_inf'>
                <p>Nome: <input id='ipt' placeholder='Nome do Hobby' type="text" /> </p>
                <p>Local: <input id='ipt' placeholder='Digite o local' type="text" /> </p>
                <p>Data: <input id='ipt' type="date" /> </p>
                <p>Hora: <input id='ipt' type='time' /> </p>
            </div>
        </div>
        <div className='right_content_create'>
            <label className='textarea'>
              <textarea name="textarea" id="textarea" cols="50" rows="20"></textarea>
            </label>
            <button>Crie</button>
        </div>
      </div>
    </div>
  );
};

export default Crie;
