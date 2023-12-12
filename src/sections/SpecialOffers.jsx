import React from 'react'
import Button from '../components/Buton'

import {arrowRight} from '../assets/icons' 
import { offer } from '../assets/images'
const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687}
        className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
      

      <h2 className='font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
       We Provide You 
       <span className='text-coral-red'>
        Super</span>
        <span className='text-coral-red'>
        Quality 
        </span>
       Shoes
        <br />
       
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <div className='mt-11'>
      <Button 
      label="Shop now"
      iconURL = {arrowRight}
      />
      </div>
            </div>
    </section>
  )
}

export default SpecialOffers