import ReactPlayer from 'react-player';

const CarouselWordpress = () => {
  return (
    <div className='principal'>
      <div className='about'>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='react-player'>
                <ReactPlayer
                  url='https://youtu.be/qccv2qLuHnw'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Sitio de mis servicios</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  Sitio donde brindo mis servicios como desarrollador freelance.
                  Para ir al
                  <a
                    href='https://mexwebdesign.com/'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {' '}
                    sitio.{' '}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='react-player'>
                <ReactPlayer
                  url='https://youtu.be/9AHT3epQAdQ'
                  playing={true}
                  width='100%'
                  height='600px'
                />
              </div>
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>La casa del estanque</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold'>
                  Fué mi primer página hecha como freelance. Para ir al{' '}
                  <a
                    href='https://cute-starlight-f947f8.netlify.app/'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    sitio.{' '}
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

export default CarouselWordpress;
