import React, { useState, useMemo } from 'react';

import velzra from '../../assets/img/Projects/velrza.webp';
import portafolio from '../../assets/img/Projects/portafolio.webp';
import gol from '../../assets/img/Projects/GOL.webp';
import treasure from '../../assets/img/Projects/TESORO.webp';

import '../../styles/cerfications.css/carouselCertifications.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const items = useMemo(
    () => [
      {
        url: velzra,
        title: 'Grupo Velzra',
        technologies: 'Tecnologías: HTML, CSS y React.js',
        description:
          'Sitio dedicado a la construcción y remodelación, es un sitio en desarrollo que se puede traducir de español a inglés y proximamente se traducirá a 5 idiomas',
        appLink: 'https://grupovelzracom.netlify.app/',
        repoLink: 'https://github.com/likaon1606/grupo_velzra',
      },
      {
        url: portafolio,
        title: 'Primer portafolio',
        technologies: 'Tecnologías: HTML, CSS y Javascript.',
        description:
          'Incluí un modo oscuro que es controlado con JS al igual que el carrusel, el efecto de máquina de escribir y las barras del menú, el cubo es solo CSS.',
        appLink: 'https://coruscating-llama-46f698.netlify.app/',
        repoLink: 'https://github.com/likaon1606/personalSite',
      },
      {
        url: gol,
        title: 'El juego de la vida de John Conway',
        technologies: 'Tecnologías: HTML, CSS y Javascript.',
        description:
          'El Juego de la vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de cero jugadores, en el que su evolución es determinada por un estado inicial, sin requerir intervención adicional.',
        appLink: 'https://aesthetic-melba-a29721.netlify.app/',
        repoLink: 'https://github.com/likaon1606/GAMEOFLIFE',
      },
      {
        url: treasure,
        title: 'Encuentra el tesoro',
        technologies:
          'Tecnologías: HTML, CSS y Javascript. Se usó el Teorema de Pitágoras para las coordenadas.',
        description:
          'Se trata de encontrar el tesoro con el menor número de clics, cada vez que se da clic, aparece un gif dando la pista si estás frío, muy frío, congelado, tibio, caliente o quemandote.',
        appLink: 'https://roaring-bienenstitch-e08193.netlify.app/',
        repoLink: 'https://github.com/likaon1606/MAP-THE-TREASURE',
      },
    ],
    []
  );

  return (
    <div className='principal'>
      <div className='about'>
        <div
          id='carouselExampleControls'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            {items.map((item, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? 'active' : ''
                }`}
                key={index}
              >
                <img src={item.url} className='d-block' alt={`item ${index}`} />
                <div className='btns text-center'>
                  <button
                    className='btn btn-outline-secondary m-1 btn-sm btn-block'
                    onClick={handlePrevious}
                  >
                    Anterior
                  </button>
                  <button
                    className='btn btn-outline-primary m-1 btn-sm btn-block'
                    onClick={handleNext}
                  >
                    Siguiente
                  </button>
                </div>
                <div className='m-2 p-2 justify-content-center'>
                  <h4>{item.title}</h4>
                  <p className='fw-semibold'>
                    <strong>{item.technologies}</strong> {item.description}
                  </p>
                  <p className='fw-semibold'>
                    Para ir a la{' '}
                    <a
                      className='text-decoration-none fs-4'
                      href={item.appLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      aplicación,
                    </a>{' '}
                    para mirar el{' '}
                    <a
                      className='text-decoration-none fs-4'
                      href={item.repoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      repositorio.
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
