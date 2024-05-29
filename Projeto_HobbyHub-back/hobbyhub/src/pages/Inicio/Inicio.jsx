import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import bike1 from '../../assets/bike1.jpg';
import Dançando1 from '../../assets/Dançando1.jpg';
import Música1 from '../../assets/Música1.jpg';
import './Inicio.css';
import Footer from '../../Components/footer';
import { scroller } from 'react-scroll';

const Inicio = () => {
  const [currentSection, setCurrentSection] = useState('section0');

  useEffect(() => {
    const sections = ['section0', 'section1', 'section2', 'section3'];

    const handleScroll = () => {
        for (const section of sections) {
          const element = document.querySelector(`[name=${section}]`);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              setCurrentSection(section);
            }
          }
        }
      };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="main_inicio">
      <section className="section0" name="section0">
      <div className="navigation">
  <h1 onClick={() => scrollToSection('section0')} className={currentSection === 'section0' ? 'selected' : ''}>
    Início
  </h1>
  <h1 onClick={() => scrollToSection('section1')} className={currentSection === 'section1' ? 'selected' : ''}>
    O que é HobbyHub?
  </h1>
  <h1 onClick={() => scrollToSection('section2')} className={currentSection === 'section2' ? 'selected' : ''}>
    O que nos torna especial?
  </h1>
  <h1 onClick={() => scrollToSection('section3')} className={currentSection === 'section3' ? 'selected' : ''}>
    Como Funciona?
  </h1>
</div>

        <div id="btn_login">
          <a href="https://hobbyhubback-production.up.railway.app/login/">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                  d="M25.0001 22.9167C26.6483 22.9167 28.2594 22.4279 29.6298 21.5122C31.0002 20.5966 32.0683 19.2951 32.6991 17.7724C33.3298 16.2496 33.4948 14.5741 33.1733 12.9576C32.8517 11.3411 32.0581 9.85622 30.8926 8.69078C29.7272 7.52534 28.2423 6.73167 26.6258 6.41013C25.0093 6.08858 23.3338 6.25361 21.8111 6.88434C20.2883 7.51507 18.9868 8.58317 18.0712 9.95358C17.1555 11.324 16.6667 12.9352 16.6667 14.5833C16.6667 16.7935 17.5447 18.9131 19.1075 20.4759C20.6703 22.0387 22.7899 22.9167 25.0001 22.9167Z"
                  fill="white"
                />
                <path
                  d="M37.5001 43.75C38.0526 43.75 38.5825 43.5305 38.9732 43.1398C39.3639 42.7491 39.5834 42.2192 39.5834 41.6667C39.5834 37.7989 38.047 34.0896 35.3121 31.3547C32.5772 28.6198 28.8678 27.0833 25.0001 27.0833C21.1323 27.0833 17.423 28.6198 14.6881 31.3547C11.9532 34.0896 10.4167 37.7989 10.4167 41.6667C10.4167 42.2192 10.6362 42.7491 11.0269 43.1398C11.4176 43.5305 11.9475 43.75 12.5001 43.75H37.5001Z"
                  fill="white"
                />
              </svg>
              <p>Login</p>
            </button>
            </a>
        </div>
        <div className="main_content">
          <div className="container_logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="container_p1">
            <p>
              Você já imaginou encontrar pessoas apaixonadas pelos mesmos hobbies que você? Apresentamos o HobbyHub, a
              plataforma revolucionária que conecta pessoas com interesses semelhantes e as ajuda a explorar juntas o
              emocionante mundo dos hobbies.
            </p>
          </div>
        </div>
      </section>
      <section className="section1" name="section1">
        <img src={bike1} alt="bike" />
        <div className="text_overp1">
          <h1>
            O que é HobbyHub
          </h1>
          <p>
            O HobbyHub é uma comunidade dinâmica de entusiastas de hobbies de todas as partes do mundo. Nosso objetivo é
            tornar mais fácil do que nunca encontrar, conhecer e interagir com pessoas que compartilham suas paixões e
            interesses.
          </p>
        </div>
      </section>
      <br />
      <section className="section2" name="section2">
                <img src={Dançando1} alt="Dançando" />
                <div className='text_overp2'>
                <h1 onClick={() => scrollToSection('section2')}>O que nos torna especial?</h1>
                    <p>O HobbyHub oferece uma ampla variedade de hobbies e permite que os usuários encontrem eventos e grupos locais relacionados aos seus interesses, promovendo amizades e oportunidades de participação em atividades que amam.</p>
                </div>
            </section>
            <br />
            <section className='section3' name='section3'>
                <img src={Música1} alt="Música" />
                <div className='text_overp3'>
                <h1 onClick={() => scrollToSection('section3')}>Como funciona?</h1>
                    <p>Explore Hobbies: Explore uma ampla gama de hobbies e encontre aqueles que mais lhe interessam.
                    Eventos e Grupos: Explore eventos locais e grupos específicos de hobby para atividades presenciais ou online.</p>
                </div>
            </section>
            <Footer id='footer_inicio'/>
        </div>
    )
    }

    export default Inicio