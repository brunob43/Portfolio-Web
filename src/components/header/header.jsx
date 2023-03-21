import React from 'react';
import "./header.css";
import CTA from "./CTA";
import bb from "../../assets/bb.png"

const header = () => {
  return (
    <header>
      <div className="conteiner header__container">
        <h5>Hello I'm</h5>
        <h1>Bruno Buglioni</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>

        <div className='bb'>
            <img src={bb} alt="bb" />
        </div>
      </div>
    </header>  )
}

export default header
