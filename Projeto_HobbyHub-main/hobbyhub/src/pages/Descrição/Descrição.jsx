import React, { useState } from 'react';
import './Descrição.css'; 
import logoprojeto from '../../assets/logoprojeto.png';

const Crie = () => {
  return (
    <div className='descricao_main'>
      <div className='tittle_page_descricao'>
        <h1>Descrição</h1>
      </div>
      <div className='content_descricao'>
        <div className='left_content_descricao'>
            <div id='hobby_inf'>
                <p>Nome: </p>
                <p>Local: </p>
                <p>Data: </p>
                <p>Hora: </p>
            </div>
        </div>
        <div className='right_content_descricao'>
            <div className='descricao'>
                <h3>Descriçao do hobby...</h3>
            </div>
            <div className='btn_descricao'>
                <button id='confirm'>Confirmar presença</button>
                <button id='comments'>Comentários</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Crie;
