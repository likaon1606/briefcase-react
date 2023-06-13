import html from "../../assets/img/CONSTANCIAS/HTML-CSS.jpg";
import react from "../../assets/img/CONSTANCIAS/REACT.jpg";
import node from "../../assets/img/CONSTANCIAS/NODE.jpg";
import full from "../../assets/img/CONSTANCIAS/FULL.jpg";
import docker from "../../assets/img/CONSTANCIAS/DOCKER.jpg";
import typescript from "../../assets/img/CONSTANCIAS/TypeScript.jpg";
import sql from "../../assets/img/CONSTANCIAS/SQL.jpg";
import javascript from "../../assets/img/CONSTANCIAS/Javascript.jpg";
import htmlycss from "../../assets/img/CONSTANCIAS/HTML_Y_CSS.jpg";
import git from "../../assets/img/CONSTANCIAS/GIT.jpg";
import "../../styles/cerfications.css/carouselCertifications.css";

const CarouselCertifications = () => {
  return (
    <div>
      <div className='about'>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                className='d-block w-75 images'
                src={full}
                alt='Full Stack'
              />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>
                  Full Stack Web Development & Computer Sciencie
                </h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://certificates.academlo.com/en/verify/24249240109488?ref'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={html} alt='HTML' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>HTML-CSS-JavaScript</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://certificates.academlo.com/en/verify/15542914684766'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={react} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>React.js</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://certificates.academlo.com/en/verify/21836861079277'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={node} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Node.js</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://certificates.academlo.com/en/verify/05741999201657'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={docker} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Docker</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://community.open-bootcamp.com/user/likaon1606/certificaciones/aa1aceb6-7e58-4dd8-bc46-c591578a07fe'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={typescript} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>TypeScript</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://storage.googleapis.com/openvitae-prod/diplomas%2Ff373ec27-e518-4ec5-817a-4a011c53fd04.pdf'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={sql} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>SQL</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://community.open-bootcamp.com/user/likaon1606/certificaciones/26326efc-b7b6-46b5-91c7-259f9fab7ecb'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={javascript} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>JavaScript</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://community.open-bootcamp.com/user/likaon1606/certificaciones/3eb7a25c-6465-47d2-b5b7-3e68d5701be4'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={htmlycss} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>HTML-CSS-BOOTSTRAP</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  No lo menciona, pero se curso también Bootstrap. Ir al
                  <a
                    href='https://community.open-bootcamp.com/user/likaon1606/certificaciones/3a7237e0-7f07-4a79-a231-1f749dba4237'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='d-block w-75' src={git} alt='React.js' />
              <div className='m-0 row justify-content-center'>
                <h4 className='mt-3'>Git</h4>
                <hr className='w-50 border-3 text-primary' />
                <p className='fw-semibold certificate'>
                  Ir al
                  <a
                    href='https://community.open-bootcamp.com/user/likaon1606/certificaciones/a006a944-07fc-4603-89cd-b9f12a748da9'
                    target='blank'
                    className='text-decoration-none fs-4'
                  >
                    {" "}
                    certificado.{" "}
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

export default CarouselCertifications;
