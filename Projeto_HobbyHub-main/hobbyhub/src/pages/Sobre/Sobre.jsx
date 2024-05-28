import React from 'react'
import './Sobre.css'
import logoprojeto from '../../assets/logoprojeto.png';
import {RxLinkedinLogo} from 'react-icons/rx'
import {FaGithub} from 'react-icons/fa'
import Footer from '../../Components/footer'
import vitor from '../../assets/vitor.jpg'
import Benicio from '../../assets/Benicio.jpg'
import Ytalo from '../../assets/Ytalo.jpg'
import Paulo from '../../assets/Paulo.jpg'
import Bruno from '../../assets/Bruno.jpg'
import Kauã from '../../assets/Kauã.jpg'
import Ricardo from '../../assets/Ricardo.jpg'

const Sobre = () => {
  return (
    <div className='main_about'>
      <div className='logo_about'>
        <img src={logoprojeto} alt="Logo" />
      </div>
      <div className='tittle_about'>
        <h1>Time de desenvolvedores</h1>
      </div>
        <div className='content_about_left'>
          <section className='section_about_left'>
            <div className='descricao_dev'>
              <p>Olá, meu nome é Vitor, nascido no dia 08/01/2001. Atualmente estou cursando análise e desenvolvimento de sistemas, no 5° período. Sempre fui imerso na tecnologia, fiz meu primeiro curso de informática com 12 anos e desde de então me apaixonei pela área. Com 18 anos iniciei uma graduação de gastronomia, me formei com 20 e com 21 iniciei ADS pois além de gostar da área, percebi que profissões voltadas a tecnologia era o presente e o futuro.</p>
            <div className='btn_about'>
              <a href="https://www.linkedin.com/in/vitor-gabriel-b42563218" target="_blank"><button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button></a>
              <a href="" target="_blank"><button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button></a>
            </div>
            </div>
          </section>
          <div className='container_img_left'>
            <img src={vitor} alt="vitor" />
          </div>
        </div>
        
        <div className='content_about_left'>
        <section className='section_about_left'>
            <div className='descricao_dev'>
              <p>Me chamo Ytalo atualmente tenho 22 anos, e hoje estou cursando ADS (Análise e Desenvolvimento de Sistemas). Para ser bem honesto ingressei no curso achando que só era codificar, mas vi que o importante mesmo é você saber como codificar e o que codificar, pois a parte essencial de um projeto é seu documento, ali está tudo o que o cliente necessita, fazendo com que seja desenvolvido o que de fato o cliente espera, o documento é a chave para todo projeto, então entendi que o curso não se tratava só de codificar e criar softwares e sim de um ciclo de vida extenso se um projeto que pode ser revolucionário, me apeguei a esta área de requisitos, e sei que posso chegar ainda mais longe.</p>
            <div className='btn_about'>
              <a href="https://www.linkedin.com/in/vitor-gabriel-b42563218" target="_blank"><button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button></a>
              <a href="" target="_blank"><button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button></a>
            </div>
            </div>
          </section>
          <div className='container_img_left'>
            <img src={Ytalo} alt="Ytalo" />
          </div>
        </div>
        <div className='content_about_right'>
        <div className='container_img_right'>
            <img src={Kauã} alt="Kauã" />
          </div>
          <section className='section_about_right'>
          <div className='descricao_dev'>
              <p>Prazer me chamo Kauã e desde muito jovem, demonstrava um fascínio especial por tudo o que envolvia tecnologia. Comecei quando ganhei meu primeiro computador aos 10 anos. Fascinado pela ideia de ter uma máquina capaz de fazer praticamente qualquer coisa, eu rapidamente me envolvi em um universo de possibilidades.</p>
            <div className='btn_about'>
              <a href="https://www.linkedin.com/in/kau%C3%A3-jos%C3%A9-242677235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button></a>
              <a href="https://github.com/kjdap" target="_blank"><button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button></a>
            </div>
            </div>
          </section>
        </div>
       
      
        <div className='footer_about'>
          <Footer/>
        </div>
    </div>
  )
}

export default Sobre