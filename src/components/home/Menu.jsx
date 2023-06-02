import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuImg from "../../assets/img/menu-img.png";
import "../../styles/home/menu.css";

const Menu = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);

  const [clickMenu, setClickMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const Click = {
    position: "relative",
    paddingTop: "30px",
    top: "-10px",
  };

  const noClick = {
    position: "relative",
    paddingTop: "20px",
    top: "0",
  };

  const ClickMenu = {
    position: "absolute",
    marginTop: "50px",
    top: "-20px",
  };

  const noClickMenu = {
    position: "absolute",
    paddingTop: "40px",
    top: "0",
  };

  const handleMenuClick = (clickNum) => {
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
    setClick6(false);
    setIsOpen(!isOpen);

    switch (clickNum) {
      case 1:
        setClick1(true);
        break;
      case 2:
        setClick2(true);
        break;
      case 3:
        setClick3(true);
        break;
      case 4:
        setClick4(true);
        break;
      case 5:
        setClick5(true);
        break;
      case 6:
        setClick6(true);
        break;
      default:
        break;
    }
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
            width='100rem'
            height='50rem'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <ul>
          <div
            className={`button-menu ${isOpen && "open"}`}
            style={click1 ? Click : noClick}
            onClick={() => {
              handleMenuClick(1);
            }}
          >
            <Link className='Link' to='/'>
              <li>Inicio</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && "open"}`}
            style={click2 ? Click : noClick}
            onClick={() => {
              handleMenuClick(2);
            }}
          >
            <Link className='Link' to='/javascript'>
              <li>Javascript</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && "open"}`}
            style={click3 ? Click : noClick}
            onClick={() => {
              handleMenuClick(3);
            }}
          >
            <Link className='Link' to='/react'>
              <li>React.js</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && "open"}`}
            style={click4 ? Click : noClick}
            onClick={() => {
              handleMenuClick(4);
            }}
          >
            <Link className='Link' to='/wordpress'>
              <li>Wordpress</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && "open"}`}
            style={click5 ? Click : noClick}
            onClick={() => {
              handleMenuClick(5);
            }}
          >
            <Link className='Link' to='/certifications'>
              <li>Certificaciones</li>
            </Link>
          </div>
          <div
            className={`button-menu ${isOpen && "open"}`}
            style={click6 ? Click : noClick}
            onClick={() => {
              handleMenuClick(6);
            }}
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
