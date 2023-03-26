import React from 'react';
import "./header.css";
import CTA from "./CTA";
import bb from "../../assets/bb.png"
import HeaderSocials from './HeaderSocials';

const header = () => {
  return (
    <header>
      <div className="conteiner header__container">
        <h5>Hello I'm</h5>
        <h1>Bruno Buglioni</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='bb'>
            <img src={bb} alt="bb" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>  )
}

export default header
