import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/menu.css';
import menuImg from '../../assets/img/menu-img.png';

const Menu = () => {
  const [clickStates, setClickStates] = useState({
    click1: false,
    click2: false,
    click3: false,
    click4: false,
    click5: false,
    click6: false,
  });

  const [clickMenu, setClickMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    setClickStates((prevState) => ({
      click1: index === 1 ? !prevState.click1 : false,
      click2: index === 2 ? !prevState.click2 : false,
      click3: index === 3 ? !prevState.click3 : false,
      click4: index === 4 ? !prevState.click4 : false,
      click5: index === 5 ? !prevState.click5 : false,
      click6: index === 6 ? !prevState.click6 : false,
    }));
    setIsOpen(!isOpen);
    setClickMenu(!clickMenu);
  };

  const Click = {
    position: 'relative',
    paddingTop: '30px',
    top: '-10px',
  };

  const noClick = {
    position: 'relative',
    paddingTop: '20px',
    top: '0',
  };

  const ClickMenu = {
    position: 'absolute',
    marginTop: '50px',
    top: '-20px',
  };

  const noClickMenu = {
    position: 'absolute',
    paddingTop: '40px',
    top: '0',
  };

  return (
    <div className='menu'>
      <div className='head'>
        <p>Bienvenido A Mi Sitio</p>
      </div>
      <div className='phrase'>
        <p>
          "El cerebro no es un vaso por llenar, sino una lámpara por encender".
        </p>
      </div>
      <div className='sub-menu'>
        <div
          className='menu-img'
          style={clickMenu ? ClickMenu : noClickMenu}
          onClick={() => {
            setClickMenu(!clickMenu);
          }}
        >
          <img
            src={menuImg}
            alt='menu'
            width='100px'
            height='50px'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <ul>
          <div
            className={`button-menu ${isOpen && 'open'}`}
            style={clickStates.click1 ? Click : noClick}
            onClick={() => handleClick(1)}
          >
            <Link className='Link' to='/'>
              <li>Inicio</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && 'open'}`}
            style={clickStates.click2 ? Click : noClick}
            onClick={() => handleClick(2)}
          >
            <Link className='Link' to='/javascript'>
              <li>Javascript</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && 'open'}`}
            style={clickStates.click3 ? Click : noClick}
            onClick={() => handleClick(3)}
          >
            <Link className='Link' to='/react'>
              <li>React.js</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && 'open'}`}
            style={clickStates.click4 ? Click : noClick}
            onClick={() => handleClick(4)}
          >
            <Link className='Link' to='/wordpress'>
              <li>Wordpress</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && 'open'}`}
            style={clickStates.click5 ? Click : noClick}
            onClick={() => handleClick(5)}
          >
            <Link className='Link' to='/certifications'>
              <li>Certificaciones</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && 'open'}`}
            style={clickStates.click6 ? Click : noClick}
            onClick={() => handleClick(6)}
          >
            <Link className='Link' to='/contact'>
              <li>Contáctame</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
