import React from 'react';
import '../../styles/home/aboutme.css';
import Images from '../home/Images';
import me from '../../assets/img/mia.webp';

const AboutMe = () => {
  return (
    <div className='principal'>
      <Images />
      <div className='about'>
        <div className='section-about'>
          <img src={me} alt='me' />
          <p>
          Desarrollador Full Stack con experiencia en tecnologías como <strong>JavaScript, React.js, TypeScript, Node.js, MySQL,</strong> y otras relacionadas con el desarrollo web. Proactivo y autodidacta, he colaborado en varios proyectos internacionales para países como <strong>Chile y Panamá</strong> y me mantengo en constante actualización en programación y soporte IT.
          </p>
        </div>
        <div className='broken-sheet'></div>
      </div>
    </div>
  );
};

export default AboutMe;
