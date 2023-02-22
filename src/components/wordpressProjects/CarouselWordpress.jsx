import MWD from "../../assets/videos/MWD.mp4";
import Estanque from "../../assets/videos/Estanque.mp4";

const CarouselWordpress = () => {
  return (
    <div>
      <div className="about">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video playsInline autoPlay muted loop controls>
                <source src={MWD} type="video/mp4" />
              </video>
              <div className="m-0 row justify-content-center">
                <h4 className="mt-3">Sitio de mis servicios</h4>
                <hr className="w-50 border-3 text-primary" />
                <p className="fw-semibold">
                  Sitio donde brindo mis servicios como desarrollador freelance. Para ir al
                   <a href="https://mexwebdesign.com/" target='blank' class="text-decoration-none fs-4"> sitio. </a>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <video playsInline autoPlay muted loop controls>
                <source src={Estanque} type="video/mp4" />
              </video>
              <div className="m-0 row justify-content-center">
                <h4 className="mt-3">La casa del estanque</h4>
                <hr className="w-50 border-3 text-primary" />
                <p className="fw-semibold">
                  Fué mi primer página hecha como freelance. Para ir al  <a href="https://cute-starlight-f947f8.netlify.app/" target='blank' class="text-decoration-none fs-4">sitio. </a>
                </p>
              </div>
            </div>
            
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselWordpress;
