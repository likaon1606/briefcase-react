import React, { useState, useMemo } from 'react';

import html from '../../assets/img/CONSTANCIAS/HTML-CSS.webp';
import reactImage from '../../assets/img/CONSTANCIAS/REACT.webp';
import nodeImage from '../../assets/img/CONSTANCIAS/NODE.webp';
import fullImage from '../../assets/img/CONSTANCIAS/FULL.webp';
import python from '../../assets/img/CONSTANCIAS/python.webp';

import '../../styles/cerfications.css/carouselCertifications.css';

const CarouselCertifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const certifications = useMemo(
    () => [
      {
        url: fullImage,
        title: 'Full Stack Development',
        appLink:
          'https://certificates.academlo.com/en/verify/24249240109488?ref',
      },
      {
        url: html,
        title: 'HTML / CSS',
        appLink: 'https://certificates.academlo.com/en/verify/15542914684766',
      },
      {
        url: reactImage,
        title: 'React',
        appLink: 'https://certificates.academlo.com/en/verify/21836861079277',
      },
      {
        url: nodeImage,
        title: 'Node.js',
        appLink: 'https://certificates.academlo.com/en/verify/05741999201657',
      },
      {
        url: python,
        title: 'Backend con Python y Django',
        appLink: 'https://certificates.academlo.com/en/verify/32265689151391',
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
            {certifications.map((certification, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? 'active' : ''
                }`}
                key={index}
              >
                <img
                  src={certification.url}
                  className='d-block w-50'
                  alt={`Certification ${index}`}
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
                  <h4>{certification.title}</h4>
                  <p className='fw-semibold'>
                    Para ir a la{' '}
                    <a
                      className='text-decoration-none fs-4'
                      href={certification.appLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      certificación.
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

export default CarouselCertifications;
