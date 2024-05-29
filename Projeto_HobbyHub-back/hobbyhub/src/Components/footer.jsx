import React from 'react'
import './footer.css'
import {Link} from "react-router-dom"
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer_container'>
      <div className='footer_content'>
        <div className='icons_content'>
        <a href="https://www.facebook.com/profile.php?id=61552916645047" target="_blank"><BsFacebook className='icon_footer'/></a>
        <a href="https://www.instagram.com/hobby.hubb1/" target="_blank"><BsInstagram className='icon_footer'/></a>
        <a href="https://twitter.com/HobbyHubb1" target="_blank"><BsTwitter className='icon_footer'/></a>
        </div>
        <ul>
          <li><a href="https://hobbyhubback-production.up.railway.app/"><button>Home</button></a></li>
          <li><Link to="/Contatos"><button>Contatos</button></Link></li>
          <li><Link to="/Sobre"><button>Sobre</button></Link></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} HobbyHub</p>
      </div>
    </footer>
  );
}

export default Footer;