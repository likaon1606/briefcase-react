import React from 'react';
import '../styles/aboutme.css';
import pcretro from '../assets/img/vintage/pcretro.jpg';
import phone from '../assets/img/phone.png';
import coffee from '../assets/img/coffee.png';
import notebook from '../assets/img/notebook.png';
import headphones from '../assets/img/headphones.png';


const AboutMe = () => {
  return (
    <div className='principal'>
      <div className="container">
        <div className="phone"><img src={phone} alt='phone'/></div>
        <div className="coffee"><img src={coffee} alt='coffee'/></div>
        <div className="notebook"><img src={notebook} alt='notebook'/></div>
        <div className="headphones"><img src={headphones} alt='headphones'/></div>
      </div>
      <div className='about' >
        <div className="section-about">
          <img src={pcretro} alt=''/>
          <p>Soy desarrollador Full-Stack. Actualmente me dedico al desarrollo de sitios web como freelance, tengo mi propio sitio <a href='https://mexwebdesign.com/' target='blank'>https://mexwebdesign.com/</a> en dónde ofrezco mis servicios de desarrollo profesional. Gusto de aprender de manera autodidacta y estoy en busca de retos profesionales como programador. Estoy en constante práctica con proyectos personales y así mejorar mi lógica. Pues a programar, se aprende programando.</p>
        </div>  
        <div className="broken-sheet"></div>
      </div>
    </div> 
  );
};

export default AboutMe;