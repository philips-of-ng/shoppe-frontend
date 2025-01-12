import React from 'react'
import '../css/section-head.css'

const SectionHead = ({ title, icon, iconColor }) => {
  return (
    <div className='section-head'>
      <h2>{title} <i style={{color: iconColor}} className={icon}></i></h2>
    </div>
  )
}

export default SectionHead