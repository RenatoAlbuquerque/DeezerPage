import React from 'react';
import './style.css';
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {

  return (
    <footer>
      <p>Imagens e dados cedidos pela API da Deezer</p>
      <p>Desenvolvido por <a className="linkedinlink" href="https://www.linkedin.com/in/renato-albuquerque-dev/" target="_blank" rel="noreferrer">Renato Albuquerque</a></p>
      <div className="social-media">
        <a
          id="emoteSocialMedia"
          href="https://github.com/RenatoAlbuquerque"
          alt="noreferrer"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          id="emoteSocialMedia"
          href="https://www.instagram.com/renalbuquerq/"
          alt="noreferrer"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          id="emoteSocialMedia"
          href="https://www.linkedin.com/in/renato-albuquerque-dev/"
          alt="noreferrer"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
