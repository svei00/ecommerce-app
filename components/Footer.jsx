import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { getCurrentYear } from '../assets/js/scripts';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2020 - {getCurrentYear()} Croquetas "El Kilo". All Rights Reserverd&reg;
      </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiFillFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer