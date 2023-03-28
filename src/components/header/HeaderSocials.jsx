import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/brunobuglioni/'><BsLinkedin/></a>
        <a href='https://github.com/brunob43'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
