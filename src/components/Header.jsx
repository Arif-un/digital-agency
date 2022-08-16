/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import bannerImg from '../assets/images/banner-1.jpg';
import logo from '../assets/images/logo.png';
import LandingPage from './LandingPage';

export default function Header({ backgroundImg }) {
  const [openMenu, setMenu] = useState(false);

  // const openMenu = () => {
  //   //  alert('Open Menu');
  //   const menu = document.querySelector('.menu');
  //   const menuList = document.querySelector('.menuList');
  //   console.log('menu', menu);
  //   menuList.classList.toggle('menuList');
  // };
// alkd      jfa

  

  return (
    <header style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="container pt-50">
        <div className="logo">
          <img src={logo} alt="LOGO" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="index.html" className="border-btm-sm active">
                Home
              </a>
            </li>

            <li>
              <a className="border-btm-sm" href="services.html">
                Services
              </a>
            </li>
            <li>
              <a className="border-btm-sm" href="services.html">
                Portfolio
              </a>
            </li>
            <li>
              <a className="border-btm-sm" href="contact.html">
                Contact Us
              </a>
            </li>
            <li className="btn">
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </nav>

        <LandingPage bannerImg={bannerImg} />

        <div className="menuList">
          {openMenu ? (
            <ul>
              <li>
                <a href="index.html" className="border-btm-sm active">
                  Home
                </a>
              </li>

              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="services.html">Portfolio</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li className="btn">
                <a href="#">LOGIN</a>
              </li>
            </ul>
          ) : null}
        </div>

        <div>
          <button className="menu" onClick={() => setMenu(!openMenu)} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                fill="#00d747"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
