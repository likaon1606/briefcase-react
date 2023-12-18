import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactPlayer from 'react-player';

import estanque from '../../assets/video/Estanque.mp4';
import mwd from '../../assets/video/MWD.mp4';

const CarouselWordpress = () => {
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
        url: estanque,
        title: 'Sitio de Biomedicina',
        description: 'Sitio de Biomedicina con estilos en WORDPRESS',
        appLink: 'https://biomedicinamolecular.com/',
      },
      {
        url: mwd,
        title: 'Sitio de servicios digitales',
        description:
          'Sitio donde se ofrecen servicios de diseño web y marketing digital',
        appLink: 'https://mexwebdesign.com/',
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
    <div className='principal'>
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

export default CarouselWordpress;
