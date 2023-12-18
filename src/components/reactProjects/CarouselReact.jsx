import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactPlayer from 'react-player';

import tasks from '../../assets/video/Tasks.mp4';
import surgencia from '../../assets/video/Pokeapi.mp4';
import triangule from '../../assets/video/TRIANGULOS.mp4';

const CarouselReact = () => {
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
        url: tasks,
        title: 'Tareas por hacer',
        description:
          'Uso de CRUD en React.js, donde se puede crear, eliminar, o descartar la tarea, utilizando renderizado condicional.',
        appLink: 'https://fanciful-ganache-1232db.netlify.app/',
        repoLink: 'https://github.com/likaon1606/Tasks-List-Openbootcamp',
      },
      {
        url: surgencia,
        title: 'Sitio para ONG Surgencia',
        description:
          'Sitio oficial de la ONG Surgencia. Blog oficial para la vigilancia de desastres ecológicos, en donde se reportan y se vigila la costera de Chile. El usuario puede mapear, además de subir fotos y los adminstradores entran a un apartado para validar y publicar el artículo subido por el usuario',
        appLink: 'https://surgenciaong.vercel.app/',
        repoLink: 'https://github.com/likaon1606/surgencia',
      },
      {
        url: triangule,
        title: 'Identificador de triángulos',
        description:
          'Identifica el tipo de triángulo, dependiendo de los valores, que en cada lado se coloquen. Triángulo Equilatero - Isosceles - Escaleno.',
        appLink: 'https://thunderous-boba-b06e6d.netlify.app/',
        repoLink: 'https://github.com/likaon1606/identificar_triangulo',
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
export default CarouselReact;
