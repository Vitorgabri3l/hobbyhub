import React from 'react'
import './Alterarsenha.css'; 

const Alterarsenha = () => {
  return (
    <div className='alterarsenha'>

        <h1>Alterar senha</h1>

      <label>
            <input type="cpf" className='input_cad' placeholder='Digite seu CPF' />
          </label>
      <label>
            <input type="cpf" className='input_cad' placeholder='Criar a nova senha' />
          </label>
      <label>
            <input type="cpf" className='input_cad' placeholder='Digite novamente a senha' />
          </label>
      <button className='btn_cad'>Alterar</button>
</div>

    
  )
}

export default Alterarsenha