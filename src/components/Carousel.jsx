import React from 'react';
import gameoflife from '../assets/videos/Game_of_life.mp4';
import briefcase from '../assets/videos/portafolio.mp4';
import treasure from '../assets/videos/Treasure.mp4';

const Carousel = () => {
  return (
    <div className="about">
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <video
        playsInline
        autoPlay
        muted
        loop
        controls
      >
        <source
        src={briefcase}
        type="video/mp4" />
      </video>
    </div>
    <div className="carousel-item">
    <video
        playsInline
        autoPlay
        muted
        loop
        controls
      >
        <source
        src={gameoflife}
        type="video/mp4" />
      </video>
    </div>
    <div className="carousel-item">
    <video
        playsInline
        autoPlay
        muted
        loop
        controls
      >
        <source
        src={treasure}
        type="video/mp4" />
      </video>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

export default Carousel;