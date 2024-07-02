import React from 'react';
import '../../styles/home/shelf.css';

import linkedin from '../../assets/img/ink.png';
// import mwd from '../../assets/img/MWD.png';
import git from '../../assets/img/github.png';
import whats from '../../assets/img/whatsapp.png';

const Shelf = () => {
  return (
    <div className='container-shelf'>
      <div className='container-shadows'>
        <img
          src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_socials.png'
          alt='shadow'
        />
        <img
          src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_socials.png'
          alt='shadow'
        />
        {/* <img
          src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_socials.png'
          alt='shadow'
        /> */}
        <img
          src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_socials.png'
          alt='shadow'
        />
      </div>

      <div className='shelf'>
        <img
          src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_footerInfo.png'
          alt='shelf'
        />
      </div>

      <div className='icons'>
        <div className='linkedin'>
          <a
            href='https://www.linkedin.com/in/ariel-f-78604898/'
            target='blank'
          >
            <img src={linkedin} alt='linkedin' />
          </a>
        </div>
        {/* <div>
          <a href='https://mexwebdesign.com/' target='blank'>
            <img src={mwd} alt='mwd' />
          </a>
        </div> */}
        <div>
          <a href='https://github.com/likaon1606' target='blank'>
            <img src={git} alt='github' />
          </a>
        </div>
        <div>
          <a
            href='https://api.whatsapp.com/send?phone=525532604568'
            target='blank'
          >
            <img src={whats} alt='whatsapp' />
          </a>
        </div>
      </div>

      <div className='copyright'>
        <p>
          ®Todos los derechos reservados 2024.{' '}
          <br/>Sitio desarrollado por Ariel.F.G.
        </p>
      </div>
    </div>
  );
};

export default Shelf;
