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
            Soy un profesional proactivo, entregado al aprendizaje autodidacta.
            He colaborado en varios proyectos para la ONG Surgencia en el país
            de <strong> Chile</strong> y actualmente coordinando proyectos para
            Grupo Velzra en <strong>México y Panamá.</strong> Estoy en constante
            actualización en programación y soporte IT, además de resolver
            problemas en software y hardware a profundidad.
          </p>
        </div>
        <div className='broken-sheet'></div>
      </div>
    </div>
  );
};

export default AboutMe;
