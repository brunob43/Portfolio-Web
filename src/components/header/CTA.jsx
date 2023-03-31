import React from 'react'
import CVEngVersion from "../../assets/CVEngVersion.pdf"
import CVSpaVersion from "../../assets/CVSpaVersion.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVEngVersion} download className='btn'>CV English</a>
        <a href={CVSpaVersion} download className='btn'>CV Spanish</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA