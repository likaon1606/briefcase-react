import React, { useState, useMemo } from 'react';

import mwd from '../../assets/img/Projects/mwd.jpg';
import bio from '../../assets/img/Projects/biomedicina.jpg';
import itami from '../../assets/img/Projects/itami.jpg';

import '../../styles/cerfications.css/carouselCertifications.css';

const CarouselWordpress = () => {
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
        url: mwd,
        title: 'Sitio marketing digital',
        technologies: 'WordPress',
        description:
          'Sitio donde se ofrece marketing digital, creación de sitios web para negocios pequeños a medianos y tiendas online o menús digitales con confirmación de compra',
        appLink: 'https://mexwebdesign.com/',
      },
      {
        url: bio,
        title: 'Productos de biomediciona',
        technologies: 'WordPress',
        description:
          'Sitio oficial de biomedicina molecular, tratamientos bio medicinales y evaluación de pacientes con enfermedades crónicas.',
        appLink: 'https://biomedicinamolecular.com/',
      },
      {
        url: itami,
        title: 'Medicina perioperatoria',
        technologies: 'WordPress',
        description:
          'Sitio donde se ofrecen servicios de rayos x, medicina intervencionista y productos con CBD permitido por COFEPRIS',
        appLink: 'https://itaminonaimedicinaperioperatoria.com/',
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
                    <strong>Tecnologías: {item.technologies}.</strong>{' '}
                    {item.description}
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
