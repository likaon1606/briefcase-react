import React from 'react';
import '../styles/shelf.css';
import shelf from '../assets/img/repiza.png';
import linkedin from '../assets/img/linkedin.png';
import mwd from '../assets/img/MWD.png';
import git from '../assets/img/github.png';
import shadow from '../assets/img/shadow.png';
import whats from '../assets/img/whatsapp.png';

const Shelf = () => {
  return (
    <div className='container-shelf'>
      <div className="shelf">
        <img src={shelf} alt='shelf'/>
      </div>
      <div className="container-shadows">
        <ul className="icons">
          <li className='linkedin'>
            <img src={linkedin} alt='linkedin'/>
          </li>
          <li>
            <img src={mwd} alt='linkedin'/>
          </li>
          <li>
            <img src={git} alt='linkedin'/>
          </li>
          <li>
            <img src={whats} alt='linkedin'/>
          </li>
        </ul>
        <ul className='shadows'>
          <li>
            <img src={shadow}alt='shadow'/>
          </li>
          <li>
            <img src={shadow}alt='shadow'/>
          </li>
          <li>
            <img src={shadow}alt='shadow'/>
          </li>
          <li>
            <img src={shadow}alt='shadow'/>
          </li>
        </ul>
        <p className="copyright">
          Copyright © 2023 | Diseños digitales MexWebDesign | Developer: Ariel Fuentes García 
        </p>
      </div>
    </div>
  );
};

export default Shelf;