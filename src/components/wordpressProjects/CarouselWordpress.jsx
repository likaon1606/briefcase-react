import React, { useState, useMemo } from 'react';

import mwd from '../../assets/img/Projects/mwd.webp';
import bio from '../../assets/img/Projects/biomedicina.webp';
import itami from '../../assets/img/Projects/itami.webp';
import siv from '../../assets/img/siv.webp';
import glidden from '../../assets/img/glidden.webp';
import velzra from '../../assets/img/velzra.webp';

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
      {
        url: siv,
        title: 'Soluciones Industriales Veltor',
        technologies: 'WordPress',
        description:
          'Sitio oficial de construcción y remodelación con marcas como COMEX y TRUPER',
        appLink: 'https://sivconstructora.com/',
      },
      {
        url: glidden,
        title: 'Pinturas Glidden',
        technologies: 'WordPress',
        description:
          'Sitio oficial de publicidad en pintura marca Glidden, con presencia en México y Panamá',
        appLink: 'https://gliddenstore.com/',
      },
      {
        url: velzra,
        title: 'Todo en remodelación, pinturas, herramientas y más. (México y Panamá)',
        technologies: 'WordPress',
        description:
          'Sitio oficial en donde se publicita la marca de pinturas oficial PPG para México y Panamá',
        appLink: 'https://grupovelzra.com/',
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
                    Para ir al{' '}
                    <a
                      className='text-decoration-none fs-4'
                      href={item.appLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      sitio,
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
