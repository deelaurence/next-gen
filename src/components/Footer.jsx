import React from 'react'
import squiggly from '../images/squiggly-line.png'
import fb from '../images/faceb.png'
import gh from '../images/github.png'
import ig from '../images/insta.png'
import tw from '../images/twitter.png'
const Footer = () => {
  return (
    <footer className='flex px-[6%]  text-black items-center py-8 justify-between pt-4'>
      <div className='text-black'>
        <div className='flex text-[10px] sm:text-xs font-bold'>
          <h1>
            NextGen
          </h1>
          <h1 className='mt-2'>
            Models
          </h1>
        </div>
        <img src={squiggly} className="h-[10px] sm:h-3 -mt-2" alt="" />
      </div>
      <ul className='cursor-pointer flex text-center flex-col md:flex-row text-black text-[8px] gap-4 font-semibold '>
        <li className='font-semibold' >Welcome</li>
        <li>Feautures</li>
        <li>Model</li>
        <li>Contacts</li>
      </ul>
      <div className='socials flex gap-4'>
        <img src={fb} alt="" className="h-2" />
        <img src={ig} alt="" className="h-2" />
        <img src={gh} alt="" className="h-2" />
        <img src={tw} alt="" className="h-2" />
      </div>
    </footer>
  )
}

export default Footer
