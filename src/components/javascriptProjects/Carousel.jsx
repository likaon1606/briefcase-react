import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactPlayer from 'react-player';
import Images from '../home/Images';
import '../../styles/javascript/javascript.css';

import portafolio from '../../assets/video/portafolio.mp4';
import gamelife from '../../assets/video/Game_of_life.mp4';
import treasure from '../../assets/video/Treasure.mp4';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const playerRef = useRef(null);

  const handleVideoEnded = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const carouselItems = useMemo(
    () => [
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
    ],
    [] // Dependencias vacías, se ejecutará una sola vez al montar el componente
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        playerRef.current &&
        playerRef.current.getCurrentTime() >=
          playerRef.current.getDuration() - 1
      ) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeIndex, carouselItems]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(0); // Reiniciar el video al cambiar de índice
    }
  }, [activeIndex]);

  return (
    <div>
      <Images />
      <div className='about'>
        <div
          id='carouselExampleControls'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            {carouselItems.map((item, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? 'active' : ''
                }`}
                key={index}
              >
                <ReactPlayer
                  ref={playerRef}
                  url={item.url}
                  playing={index === activeIndex}
                  loop={true}
                  width='100%'
                  height='100%'
                  onEnded={handleVideoEnded}
                  controls={true}
                  progressInterval={1000}
                  style={{ display: index === activeIndex ? 'block' : 'none' }}
                />
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
                  <p className='fw-semibold'>{item.description}</p>
                  <p className='fw-semibold'>
                    Para ir a la{' '}
                    <a
                      className='text-decoration-none fs-4'
                      href={item.appLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      aplicación
                    </a>
                    . Para mirar el{' '}
                    <a
                      className='text-decoration-none fs-4'
                      href={item.repoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      repositorio
                    </a>
                    .
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
