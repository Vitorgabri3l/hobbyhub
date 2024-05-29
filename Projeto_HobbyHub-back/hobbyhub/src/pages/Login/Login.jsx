import React, { useState } from 'react';
import './Login.css'; 
import logoprojeto from '../../assets/logoprojeto.png'; 
import {Link} from "react-router-dom";
import {BsFilePerson} from "react-icons/bs";
import {RiLockPasswordLine} from "react-icons/ri";
import Inputs from "../../Components/Inputs/Inputs";

const Login = () => {
  const [username, setUsername] = useState(''); // Estado para o nome de usuário
  const [password, setPassword] = useState(''); // Estado para a senha

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='main_login'> 
      <div className='left_login'> 
        <div className='card_left'>
          <h2>Bem-vindo!</h2> 
          <img src={logoprojeto} alt="Logo" /> 
        </div>
      </div>
      <div className='right_login'> 
        <div className='card_right'>
          <h1>Login</h1> 
         <div className="Ipts_Container">
          <div className="CIpts">
            <Inputs pHolderI="E-Mail ou CPF" TypesI="text" LabelI={"USUÁRIO"} NamesI="username" />
            <div className="IconC">
              <BsFilePerson className="icn-ipts"/>
            </div>
          </div>
          <div className="CIpts">
            <Inputs pHolderI="Senha" TypesI="password" LabelI={"SENHA"} NamesI="password" />
            <div className="IconC">
              <RiLockPasswordLine className="icn-ipts"/>
            </div>
          </div>
        </div>
          <Link className='Link_alterarsenha' to="/alterarsenha">
            <a id='Esqueceu' href="" >Esqueceu a senha?</a> 
          </Link>
          <br></br>
          <br></br>
          <div className="ContainerBTNlogin">
            <Link className='LinksLogin' to="/home">
              <button className='btn'>Login</button> 
               </Link>
               <div id="ln-btns"></div>
            <Link to="/cadastro" className='LinksLogin'>
                <button className='btn'>Criar nova conta</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 