import React from 'react'
import logoprojeto from '../../assets/logoprojeto.png' 
import './Contatos.css'
import Footer from '../../Components/footer.jsx'
import {AiOutlineMail} from 'react-icons/ai'
import {FaPhoneVolume} from 'react-icons/fa'

const Contatos = () => {
  return (
    <div className='main_contact'>
      <div className='logo_contact'>
        <img src={logoprojeto} alt="Logo" />
      </div>
        <h1>Como prefere entrar em contato com a gente?</h1>
      <section className='contacts'>
        <div id='contact_email'>
          <AiOutlineMail id='icon_email_contact'/>
          <h1>Email</h1>
          <p>Tem alguma dúvida?</p>
          <h3>hobby.hubb1@gmail.com</h3>
        </div>
        <div id='contact_phone'>
          <FaPhoneVolume id='icon_phone_contact'/>
          <h1>Telefone</h1>
          <p>Você pode ligar das 08:00 às 17:00</p>
          <h3>081 98995-0222</h3>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Contatos