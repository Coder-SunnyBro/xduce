// eslint-disable-next-line no-unused-vars
import React from 'react'
import './navbarTop.css';
import { Mail, Phone } from 'react-feather'

const NavbarTop= ()=> {
  return (
    <>
        <div className='flex h-[55px] navbar-color justify-evenly'>
            <div className='flex  items-center font-mono'>
                <span className='text-light text-lg text-center font-semibold bg-orange-600 rounded-full text-md w-[100px] my-2'>Projects</span><h3 className='text-center font-semibold text-light text-lg mx-2'>with 100% satisfaction</h3><span className='text-orange-600 font-semibold'>Get Started</span>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center'>
              <Mail icon="fa-regular fa-envelope" className='mr-2 text-orange-600' size={20}/>
              <h3 className='text-light text-lg text-center font-semibold font-mono'>USA.info@XDuce.com</h3>
              </div>
              <div className='static-border mx-3'></div> {/* Horizontal line */}
              <div className='flex items-center'>
                <Phone className='text-orange-600 mr-2' size={20}/>
                <h3 className='text-light text-lg text-center font-semibold'>+1 732-465-9100</h3>
              </div>
            </div>
        </div>
    </>
  )
}

export default NavbarTop