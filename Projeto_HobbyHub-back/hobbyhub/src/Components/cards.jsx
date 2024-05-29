import React from 'react'
import './cards.css'
import { Link } from 'react-router-dom'

const cards = () => {
  return (
    <section className='card_main'>
        <h3>Título do hobby</h3>
        <div className='footer_card'>
            <div id='content_footer'>
                <p>Localização</p>
                <p>data</p>
            </div>
            <div id='btn'>
              <Link to='/Descrição' className='link_btn_card'>
                <button id="AboutMore">Saiba mais</button>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default cards