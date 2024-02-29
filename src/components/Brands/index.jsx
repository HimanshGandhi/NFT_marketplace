import React from 'react'
import './brands.css'
import Bi from '../../assets/Bi.png'

const Brands = () => {
  return (
    <div className='brands-int absolute-center'>
      <img className='bi-logo' alt='brand-logo' src={Bi}></img>
    </div>
  )
}

export default Brands