import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import Images from '../home/Images';
import portafolio from '../../assets/video/portafolio.mp4';
import gamelife from '../../assets/video/Game_of_life.mp4';
import treasure from '../../assets/video/Treasure.mp4';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVideoEnded = () => {
    // Cuando un video termina, pasa al siguiente índice en un bucle infinito
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  // Reproducir automáticamente el video activo al cambiar de índice
  useEffect(() => {
    // Reiniciar el tiempo reproducido al cambiar de video
  }, [activeIndex]);

  const carouselItems = [
    {
      url: portafolio,
      title: 'Segundo prototipo de portafolio',
      description:
        'Portafolio hecho con HTML, CSS y Javascript. Incluí un modo oscuro que es controlado con JS al igual que el carrusel, el efecto de máquina de escribir y las barras del menú, el cubo es solo CSS.',
      appLink: 'https://coruscating-llama-46f698.netlify.app/',
      repoLink: 'https://github.com/likaon1606/personalSite',
    },
    {
      url: gamelife,
      title: 'El juego de la vida de John Conway',
      description:
        'El Juego de la vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de cero jugadores, en el que su evolución es determinada por un estado inicial, sin requerir intervención adicional.',
      appLink: 'https://aesthetic-melba-a29721.netlify.app/',
      repoLink: 'https://github.com/likaon1606/GAMEOFLIFE',
    },
    {
      url: treasure,
      title: 'Encuentra el tesoro',
      description:
        'Se trata de encontrar el tesoro con el menor número de clics, cada vez que se da clic, aparece un gif dando la pista si estás frío, muy frío, congelado, tibio, caliente o quemandote.',
      appLink: 'https://roaring-bienenstitch-e08193.netlify.app/',
      repoLink: 'https://github.com/likaon1606/MAP-THE-TREASURE',
    },
  ];

  return (
    <div>
      <Images />
      <div className='about'>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            {carouselItems.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <div className='react-player'>
                  <ReactPlayer
                    url={item.url}
                    playing={index === activeIndex}
                    loop={index === activeIndex}
                    width='100%'
                    height='600px'
                    onEnded={handleVideoEnded}
                    playsinline
                    config={{
                      file: { attributes: { controlsList: 'nodownload' } },
                    }}
                    controls={true}
                    progressInterval={1000}
                  />
                </div>
                <div className='m-0 row justify-content-center'>
                  <h4 className='mt-3'>{item.title}</h4>
                  <hr className='w-50 border-3 text-primary' />
                  <p className='fw-semibold'>{item.description}</p>
                  <p className='fw-semibold'>
                    Para ir a la{' '}
                    <a
                      href={item.appLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-decoration-none fs-4'
                    >
                      aplicación
                    </a>
                    . Para mirar el{' '}
                    <a
                      href={item.repoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-decoration-none fs-4'
                    >
                      repositorio
                    </a>
                    .
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
