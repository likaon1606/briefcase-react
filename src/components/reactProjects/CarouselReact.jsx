import React, { useState, useMemo } from 'react';

import surgencia from '../../assets/img/Projects/surgencia.jpg';
import hanged from '../../assets/img/Projects/Ahorcado.jpg';
import memory from '../../assets/img/Projects/memorygame.jpg';
import guitars from '../../assets/img/Projects/tienda_guitarras.jpg';
import velzra from '../../assets/img/velzra.png';

import '../../styles/cerfications.css/carouselCertifications.css';

const CarouselReact = () => {
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
        url: guitars,
        title: 'Tienda de Guitarras',
        technologies: 'Tecnologías: React.js y Bootstrap',
        description:
          'Tienda de guitarras en donde el usuario puede elegir un producto, y se utiliza la persistencia de datos con localStorage para que los datos no se pierdan al recargar, se puede aumentar cantidades, se suman preciosy se puede vaciar el carrito desde un botón regresando el state del cart a un arreglo vacío',
        appLink: 'https://guitar-store-liard.vercel.app/',
        repoLink: 'https://github.com/likaon1606/taskListFormik',
      },
      {
        url: surgencia,
        title: 'Sitio para reportes medio ambientales',
        technologies:
          'Tecnologías: En el Front En - React.js, Bootstrap, zustand, protección de rutas. En el Back End - JWT, pg, swagger para la documentación, sequelize.',
        description:
          'Blog para el rescate de las costera, en donde el usuario puede subir fotos, escribir y pinchar el lugar donde ocurrió un problema medio ambiental y se quedará registrado en el mapa. Por el lado del administrador, hay una sección especial donde se aprobarán los reportes que suben los seguidores o usuarios que deseen interactuar con el sitio.',
        appLink: 'https://surgenciaong.vercel.app/',
        repoLink: 'https://github.com/likaon1606/surgencia',
      },
      {
        url: hanged,
        title: 'El juego del Ahorcado',
        technologies:
          'React.js + Vite, useContext para el manejo de estados, renderizado condicional. ',
        description:
          'Juego donde hay una serie de preguntas y se debe adivinar la palabra. Aparecen algunos guiones con la longitud de la respuesta correcta, si la letra que se elige está en la palabra, sustituirá los guiones de la posición y aparecerá en ver, no se podrá elegir otra vez la misma letra, si se falla, la letra elegida se torna roja. Se tienen 5 intentos.',
        appLink: 'https://illustrious-longma-fa9493.netlify.app/',
        repoLink: 'https://github.com/likaon1606/Ahorcado',
      },
      {
        url: velzra,
        title: 'Sitio Grupo Velzra',
        technologies: 'React.js, HTML5, CSS3 y JavaScript',
        description:
          'Sitio Web de la empresa Grupo Velzra. Sitio dedicado a construcción y pinturas con marcas como COMEX, TRUPER y Glidden.',
        appLink: 'https://grupovelzra.com/',
        repoLink: 'https://github.com/likaon1606/grupo_velzra',
      },
      {
        url: memory,
        title: 'Juego de memoria',
        technologies:
          'Tecnologías: React.js + Vite, renderizado condicional, uso de props.',
        description:
          'Juego donde se debe encontrar las parejas de imagenes iguales, si no es la pareja, las cartas se voltean, no se pueden elegir más de 2 cartas al mismo tiempo, una vez encontradas todas, se gana y s epuede repetir el juego.',
        appLink: 'https://likaon1606.github.io/memory_game/',
        repoLink: 'https://github.com/likaon1606/memory_game',
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

export default CarouselReact;
