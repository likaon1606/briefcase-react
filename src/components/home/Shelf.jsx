import React from 'react';
import '../../styles/home/shelf.css';
import shelf from '../../assets/img/repiza.png';
import linkedin from '../../assets/img/linkedin.png';
import mwd from '../../assets/img/MWD.png';
import git from '../../assets/img/github.png';
import shadow from '../../assets/img/shadow.png';
import whats from '../../assets/img/whatsapp.png';

const Shelf = () => {
  return (
    <div className='container-shelf'>
      <div className="shelf">
        <img src={shelf} alt='shelf'/>
      </div>
      <div className="container-shadows">
        <ul className="icons">
          <li className='linkedin'>
            <a href='https://www.linkedin.com/in/ariel-f-78604898/' target='blank'>
              <img src={linkedin} alt='linkedin'/>
            </a>
          </li>
          <li>
            <a href='https://mexwebdesign.com/' target='blank'>
              <img src={mwd} alt='mwd'/>
            </a>
          </li>
          <li>
          <a href='https://github.com/likaon1606' target='blank'>
              <img src={git} alt='github'/>
            </a>
          </li>
          <li>
          <a href='https://api.whatsapp.com/send?phone=525532604568' target='blank'>
            <img src={whats} alt='whatsapp'/>
            </a>
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
          Copyright © 2023 | Diseños digitales MexWebDesign | Developer: Ariel Fuentes García. 
        </p>
      </div>
    </div>
  );
};

export default Shelf;