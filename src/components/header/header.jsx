import React from 'react';
import "./header.css";
import CTA from "./CTA";
import BB1 from "../../assets/BB1.PNG"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="conteiner header__container">
        <h5>Hello I'm</h5>
        <h1>Bruno Buglioni</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='BB1'>
            <img src={BB1} alt="BB1" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>  )
}

export default Header
//----------------------------//