import React, { useState } from 'react';
import logoprojeto from '../../assets/logoprojeto.png';
import './Cadastro.css';

const Cadastro = () => {
  
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [nomeDeUsuario, setNomeDeUsuario] = useState('');
  const [dataDeNascimento, setDataDeNascimento] = useState('');
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="main_cadastro">
      <div className="left_cadastro">
        <h1>Bem-vindo!</h1>
        <p>Comece criando um perfil e explore a ampla gama de hobbies e eventos.</p>
        <img src={logoprojeto} alt="Logo" />
      </div>
      <div className="right_cadastro">
        <div className="card_cadastro">
          <h1>Criar conta</h1>
          <p>Registre-se com seu Email</p>

          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="email"
                className="input_cad"
                placeholder="Digite seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                className="input_cad"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                className="input_cad"
                placeholder="Nome de usuário"
                value={nomeDeUsuario}
                onChange={(e) => setNomeDeUsuario(e.target.value)}
              />
            </label>

            <label>
              <input
                type="date"
                className="input_cad"
                placeholder="Selecione a Data de Nascimento"
                value={dataDeNascimento}
                onChange={(e) => setDataDeNascimento(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                className="input_cad"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
              />
            </label>

            <label>
              <input
                type="password"
                className="input_cad"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </label>

            <button className="btn_cad" type="submit">
              Cadastre-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;