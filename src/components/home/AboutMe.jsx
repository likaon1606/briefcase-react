import React from 'react';
import '../../styles/home/aboutme.css';
import phone from '../../assets/img/phone.png';
import coffee from '../../assets/img/coffee.png';
import notebook from '../../assets/img/notebook.png';
import headphones from '../../assets/img/headphones.png';
import me from '../../assets/img/mia.jpg';


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
          <img src={me} alt='me' />
          <p>Soy desarrollador Full-Stack. Actualmente me dedico al desarrollo de sitios web como freelance, tengo mi propio sitio <a href='https://mexwebdesign.com/' target='blank'>https://mexwebdesign.com/</a> en dónde ofrezco mis servicios de desarrollo profesional. Gusto de aprender de manera autodidacta y estoy en busca de retos profesionales como programador. Estoy en constante práctica con proyectos personales para así mejorar mi lógica.</p>
        </div>  
        <div className="broken-sheet"></div>
      </div>
    </div> 
  );
};

export default AboutMe;