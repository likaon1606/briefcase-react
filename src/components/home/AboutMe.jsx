import React from 'react';
import '../../styles/home/aboutme.css';
import Images from '../home/Images';
import me from '../../assets/img/mia-pro.png';


const AboutMe = () => {
  return (
    <div className='principal'>
      <Images />
      <div className='about' >
        <div className="section-about">
          <img src={me} alt='me' />
          <p>Soy desarrollador Full-Stack. Actualmente me dedico al desarrollo de sitios web como freelance, tengo mi propio sitio <a href='https://mexwebdesign.com/' target='blank'>https://mexwebdesign.com/</a> en dónde ofrezco mis servicios de desarrollo profesional. Gusto de aprender de manera autodidacta y estoy en busca de retos profesionales como programador. Estoy en constante práctica con proyectos personales para así mejorar mi lógica.</p>
        </div>  
        <div className="broken-sheet"></div>
      </div>
    </div> 
  );
};

export default AboutMe;