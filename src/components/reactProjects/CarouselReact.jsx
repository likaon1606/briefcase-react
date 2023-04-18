import ReactPlayer from "react-player";

const CarouselReact = () => {
  return (
    <div>
      <div className='about'>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='react-player'>
                <ReactPlayer
                  url='https://youtu.be/OtyYj6zrWEQ'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Lista de Tareas</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  Lista de tareas donde se puede agregar, tachar la tarea o
                  eliminarla. Para ir a la
                  <a
                    href='https://fanciful-ganache-1232db.netlify.app/'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    {" "}
                    aplicación.{" "}
                  </a>{" "}
                  Para mirar el{" "}
                  <a
                    href='https://github.com/likaon1606/Task-List'
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
                  url='https://youtu.be/QkW8p3AC3Bs'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Buscador de pokemones</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  Buscador de pokemones, primero colocas tu nombre para que la
                  aplicación te salude, después puedes buscar por nombre o
                  filtrar por tipo los pokemones. Para ir a la{" "}
                  <a
                    href='https://cute-starlight-f947f8.netlify.app/'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    aplicación.{" "}
                  </a>{" "}
                  Para mirar el{" "}
                  <a
                    href='https://github.com/likaon1606/pokeapi'
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
                  url='https://youtu.be/STnqpOWClkE'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Identificador de triángulos</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  Identifica el tipo de triángulo, dependiendo de los valores,
                  que en cada lado se coloquen. Triángulo Equilatero - Isosceles
                  - Escaleno.{" "}
                  <a
                    href='https://thunderous-boba-b06e6d.netlify.app/'
                    target='blank'
                    class='text-decoration-none fs-4'
                  >
                    aplicación.{" "}
                  </a>{" "}
                  Para mirar el{" "}
                  <a
                    href='https://github.com/likaon1606/identificar_triangulo'
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

export default CarouselReact;
