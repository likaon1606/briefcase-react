import React from 'react';
import '../../styles/home/aboutme.css';
import Images from '../home/Images';
import me from '../../assets/img/mia-pro.png';

const AboutMe = () => {
  return (
    <div className='principal'>
      <Images />
      <div className='about'>
        <div className='section-about'>
          <img src={me} alt='me' />
          <p>
            Soy desarrollador Full-Stack. He realizado proyectos en conjunto y
            también individuales, tanto académicos como profesionales. Gusto de
            aprender de manera autodidacta y estoy en busca de retos
            profesionales como programador. Estoy en constante participación en
            proyectos parciales para el país Chile y clientes propios que
            requieren realizar un sitio a la medida.
          </p>
        </div>
        <div className='broken-sheet'></div>
      </div>
    </div>
  );
};

export default AboutMe;
