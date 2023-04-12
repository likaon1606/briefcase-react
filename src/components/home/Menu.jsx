import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home/menu.css";
import menuImg from "../../assets/img/menu-img.png";

const Menu = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);

  const [clickMenu, setClickMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  let Click = {
    position: "relative",
    paddingTop: "30px",
    top: "-10px",
  };

  const noClick = {
    position: "relative",
    paddingTop: "20px",
    top: "0",
  };

  let ClickMenu = {
    position: "absolute",
    marginTop: "50px",
    top: "-20px",
  };

  const noClickMenu = {
    position: "absolute",
    paddingTop: "40px",
    top: "0",
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
              setClick1(
                !click1,
                setClick2(false),
                setClick3(false),
                setClick4(false),
                setClick5(false),
                setClick6(false),
                setIsOpen(!isOpen)
              );
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
              setClick2(
                !click2,
                setClick1(false),
                setClick3(false),
                setClick4(false),
                setClick5(false),
                setClick6(false),
                setIsOpen(!isOpen)
              );
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
              setClick3(
                !click3,
                setClick1(false),
                setClick2(false),
                setClick4(false),
                setClick5(false),
                setClick6(false),
                setIsOpen(!isOpen)
              );
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
              setClick4(
                !click4,
                setClick1(false),
                setClick2(false),
                setClick3(false),
                setClick5(false),
                setClick6(false),
                setIsOpen(!isOpen)
              );
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
              setClick5(
                !click5,
                setClick1(false),
                setClick2(false),
                setClick3(false),
                setClick4(false),
                setClick6(false),
                setIsOpen(!isOpen)
              );
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
              setClick6(
                !click6,
                setClick1(false),
                setClick2(false),
                setClick3(false),
                setClick4(false),
                setClick5(false),
                setIsOpen(!isOpen)
              );
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
