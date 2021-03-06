/** @jsx jsx */
import React, { useState } from "react"
import { jsx, useColorMode } from "theme-ui"
import styled from "@emotion/styled";

const Menu = ({ scrollTo }) => {
  const [menuMode, setMenuMode] = useState(false)
  const toggleMenu = (e: any) => {
    setMenuMode( !menuMode )
  }
  const [ colorMode, setColorMode ] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
  <React.Fragment>
    <NavigationMenu className={menuMode ? "top-right open" : "top-right"}>
      <a className="disc l1" onClick={() => { scrollTo(4.8)}}>
        <div>Contacts</div>
      </a>
      <a className="disc l2" onClick={() => { scrollTo(3.2)}}>
        <div>Projects</div>
      </a>
      <a className="disc l3" onClick={() => { scrollTo(1.4)}}>
        <div>About</div>
      </a>
      <a className="disc l4" onClick={() => { scrollTo(0)}}>
        <div>Hello</div>
      </a>
      <a className="disc l5 toggle" onClick={toggleMenu}>
        {menuMode ? "Close" : "Menu"}
      </a>
    </NavigationMenu>
    <style>
      {`
        .open {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      
        .top-right {
          top: -140px;
          right: -140px;
        }
        nav a {
          color: black;
        }

        .disc {
          position: absolute;
          display: inline-block;
          text-align: center;
          cursor: pointer;
          font: 25px Alegreya Sans, sans-serif;
          line-height: 40px;
          padding-top: 10px;
          border-radius: 250px;
          -webkit-transform: scale3d(0.5, 0.5, 0.5) rotate3d(0, 0, 1, 200deg);
          transform: scale3d(0.5, 0.5, 0.5) rotate3d(0, 0, 1, 200deg);
          pointer-events: none;
          opacity: 0;
          cursor: pointer;
          -webkit-transition: opacity 0.5s, -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
          transition: opacity 0.5s, -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
          transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9), opacity 0.5s;
          transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9), opacity 0.5s, -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
        }

        .disc div {
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
          
        }

        .open .disc {
          pointer-events: auto;
          opacity: 1;
        }

        .l1 {
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: ${isDark ? '#286673' : 'tomato' };
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }

        .open .l1 {
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
          -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          opacity: 1;
        }

        .open .l1:hover {
          background: #1a0a07;
          color: tomato;
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }

        .open .l1:active {
          background: ${isDark ? '#bf9f3f' : '#803224' };
          color: tomato;
        }

        .open .l1.toggle {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
        }

        .l2 {
          top: 50px;
          left: 50px;
          right: 50px;
          bottom: 50px;
          background: ${isDark ? '#5D837A' : '#ff7a39' };
          -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
        }

        .open .l2 {
          -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
          -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          opacity: 1;
        }

        .open .l2:hover {
          background: #1a0c06;
          color: #ff7a39;
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }

        .open .l2:active {
          background: #803d1d;
          color: #ff7a39;
        }

        .open .l2.toggle {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
        }

        .l3 {
          top: 100px;
          left: 100px;
          right: 100px;
          bottom: 100px;
          background: ${isDark ? '#93A182' : '#ff912b' };
          -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
        }

        .open .l3 {
          -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
          -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          opacity: 1;
        }

        .open .l3:hover {
          background: #1a0f04;
          color: #ff912b;
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }

        .open .l3:active {
          background: #804916;
          color: #ff912b;
        }

        .open .l3.toggle {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
        }

        .l4 {
          top: 150px;
          left: 150px;
          right: 150px;
          bottom: 150px;
          background: ${isDark ? '#C9BF89' : '#ffa91c' };
          -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
        }

        .open .l4 {
          -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
          -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          opacity: 1;
        }

        .open .l4:hover {
          background: #1a1103;
          color: #ffa91c;
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }

        .open .l4:active {
          background: #80550e;
          color: #ffa91c;
        }

        .open .l4.toggle {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
        }

        .l5 {
          top: 200px;
          left: 200px;
          right: 200px;
          bottom: 200px;
          background: ${isDark ? '#ffdd91' : '#ffc00e' };
          -webkit-transition-delay: 0.4s;
          transition-delay: 0.4s;
        }

        .open .l5 {
          -webkit-transition-delay: 0.4s;
          transition-delay: 0.4s;
          -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 200deg);
          opacity: 1;
        }

        .open .l5:hover {
          background: #1a1301;
          color: #ffc00e;
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }

        .open .l5:active {
          background: #806007;
          color: #ffc00e;
        }

        .open .l5.toggle {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, 20deg);
        }

        .toggle {
          line-height: 100px;
          padding: 0;
          width: 100px;
          background: ${isDark ? '#ffdd91' : 'gold' };
          opacity: 1;
          -webkit-transform: none;
          transform: none;
          pointer-events: auto;
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }

        .open .toggle {
          -webkit-transform: rotate3d(0, 0, 1, 0deg);
          transform: rotate3d(0, 0, 1, 0deg);
        }

        .toggle:hover {
          background: #1a1600;
          color: gold;
        }

        .toggle:active {
          background: #806c00;
          color: rgba(255, 215, 0, 0.5);
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          -webkit-transition-duration: 0s;
          transition-duration: 0s;
        }
    `}
    </style>
  </React.Fragment>
  )}

const NavigationMenu = styled.nav`
    display: block;
    position: fixed;
    width: 500px;
    height: 500px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transform: translate3d(25px, -25px, 0);
    transform: translate3d(25px, -25px, 0);
    -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
    transition: -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
    transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
    transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9), -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
    z-index: 10;
    `
// const MenuItem = styled.a`
//     position: absolute;
//     display: inline-block;
//     text-align: center;
//     cursor: pointer;
//     font: 25px Alegreya Sans, sans-serif;
//     line-height: 40px;
//     padding-top: 10px;
//     border-radius: 250px;
//     -webkit-transform: scale3d(0.5, 0.5, 0.5) rotate3d(0, 0, 1, 200deg);
//     transform: scale3d(0.5, 0.5, 0.5) rotate3d(0, 0, 1, 200deg);
//     pointer-events: none;
//     opacity: 0;
//     cursor: pointer;
//     -webkit-transition: opacity 0.5s, -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
//     transition: opacity 0.5s, -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
//     transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9), opacity 0.5s;
//     transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9), opacity 0.5s, -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
//     `;

// const MenuLevel5 = styled(MenuItem)`
//`;


export default Menu
