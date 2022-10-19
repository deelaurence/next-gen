import React from 'react'
import squiggly from '../images/squiggly-line.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)
const Nav = () => {
    const logoRef = useRef(null)
    const navRef = useRef(null)
    const buttonRef = useRef(null)
    // const heroRef = useRef(null)
    useEffect(() => {
        const logo = logoRef.current;
        const nav = navRef.current;
        const button = buttonRef.current;
        // const hero = heroRef.current;
        const heroTl = gsap.timeline()
        heroTl.fromTo(nav,
            {
                opacity: 0,
                // yPercent: 70,
                // rotate: "12deg",
                // skewX: "30deg",
            },
            {
                opacity: 1,
                // rotate: "0deg",
                // skewX: "0deg",
                // yPercent: -20,
                duration: 1,
                delay: 2
            }

        )
        gsap.fromTo(button,
            {
                opacity: 0,

            },
            {
                opacity: 1,
                delay: 2.3,
            }

        )
        gsap.fromTo(logo,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 2.6
            }

        )
        // heroTl.fromTo(hero, {
        //     scale: 1.2,
        //     yPercent: 20,
        //     opacity: 0.1,
        // }, {
        //     scale: 1,
        //     yPercent: 0,
        //     opacity: 1,
        //     duration: 1,
        // })
    })
    return (
        <nav className='flex px-[6%] text-black items-center justify-between pt-4'>
            <div className='text-black'>
                <div ref={logoRef} className='flex text-[10px] sm:text-xs font-bold'>
                    <h1 >
                        NextGen
                    </h1>
                    <h1 className='mt-2'>
                        Models
                    </h1>
                </div>
                <img src={squiggly} className="h-[10px] sm:h-3 -mt-2" alt="" />
            </div>
            <ul ref={navRef} className='cursor-pointer text-xs  gap-4 font-semibold hidden sm:flex'>
                <li className='font-semibold' >Welcome</li>
                <li>Feautures</li>
                <li>Model</li>
                <li>Contacts</li>
            </ul>
            <div className=''>
                <button ref={buttonRef} className=' text-[8px] p-2 font-semibold rounded-2xl  my-5 bg-orange text-white'>
                    Hire our Models
                </button>
            </div>
        </nav>
    )
}

export default Nav
