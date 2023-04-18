import React from "react";
import ReactPlayer from "react-player";

import Images from "../home/Images";

const Carousel = () => {
  return (
    <div>
      <Images />
      <div className='about'>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='react-player'>
                <ReactPlayer
                  url='https://youtu.be/MgYmx7WmIgg'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Segundo prototipo de portafolio</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  Portafolio hecho con HTML, CSS y Javascript. Incluí un modo
                  oscuro que es controlado con JS al igual que el carrusel, el
                  efecto de máquina de escribir y las barras del menú, el cubo
                  es solo CSS. Para ir a la{" "}
                  <a
                    href='https://coruscating-llama-46f698.netlify.app/'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    aplicación.{" "}
                  </a>{" "}
                  Para mirar el{" "}
                  <a
                    href='https://github.com/likaon1606/personalSite'
                    target='blank'
                    class='text-decoration-none fs-4  '
                  >
                    repositorio.
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='react-player'>
                <ReactPlayer
                  url='https://youtu.be/v9oSkkYiKcU'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>El juego de la vida de John Conway</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  El Juego de la vida es un autómata celular diseñado por el
                  matemático británico John Horton Conway en 1970. Es un juego
                  de cero jugadores, en el que su evolución es determinada por
                  un estado inicial, sin requerir intervención adicional. Por
                  cada 3 células el organismo vive y se reproduce, 2 el
                  organismo entra en suspensión y 4 o más células, el organismo
                  muere por sobrepoblación de células. Las células se deben
                  crear en horizontal y vertical. Para ir a la{" "}
                  <a
                    href='https://aesthetic-melba-a29721.netlify.app/'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    aplicación.{" "}
                  </a>{" "}
                  Para mirar el{" "}
                  <a
                    href='https://github.com/likaon1606/GAMEOFLIFE'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    repositorio.
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='react-player'>
                <ReactPlayer
                  url='https://youtu.be/mXtp1lOqsnM'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Encuentra el tesoro.</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  Se trata de encontrar el tesoro con el menor numero de clicks,
                  cada vez que se da click, aparece un gif dando la pista si
                  estás frío, muy frío, congelado, tibio, caliente o quemandote.
                  Utilicé el teorema de pitágoras para poder realizar las
                  coordenadas y cada vez que se gana, el tesoro aparecerá en un
                  lugar distinto. Para ir a la{" "}
                  <a
                    href='https://roaring-bienenstitch-e08193.netlify.app/'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    aplicación.{" "}
                  </a>{" "}
                  Para mirar el{" "}
                  <a
                    href='https://github.com/likaon1606/MAP-THE-TREASURE'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    repositorio.
                  </a>
                </p>
              </div>
            </div>
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
