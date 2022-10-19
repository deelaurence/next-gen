import React from 'react'
import hero from '../images/hero.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect, useState } from 'react'
gsap.registerPlugin(ScrollTrigger)


const Hero = () => {
    const modelRef = useRef(null)
    const shootRef = useRef(null)
    const beRef = useRef(null)
    const heroRef = useRef(null)
    const [noise, setNoise] = useState(true)
    const [noiseAnimate, setNoiseAnimate] = useState(true)
    setTimeout(() => {
        setNoiseAnimate(false)
    }, 30000);
    useEffect(() => {
        const model = modelRef.current;
        const shoot = shootRef.current;
        const be = beRef.current;
        const hero = heroRef.current;
        const heroTl = gsap.timeline()
        heroTl.fromTo(model,
            {
                opacity: 0,
                yPercent: 70,
                rotate: "12deg",
                skewX: "30deg",
            },
            {
                opacity: 1,
                rotate: "0deg",
                skewX: "0deg",
                yPercent: -20,
                duration: 1,
                delay: 2
            }

        )
        heroTl.fromTo(model,
            {
                yPercent: -20,
            },
            {
                yPercent: 0,
                duration: 1,
            }

        )
        gsap.fromTo(shoot,
            {
                opacity: 0,
                yPercent: 70,
                rotate: "12deg",
                skewX: "30deg",

            },
            {
                opacity: 1,
                rotate: "0deg",
                skewX: "0deg",
                yPercent: -20,
                duration: 1,
                delay: 2.3,
            }

        )
        gsap.fromTo(shoot,
            {
                yPercent: -20,
            },
            {
                yPercent: 0,
                duration: 1,
                delay: 3.3,
            }

        )
        gsap.fromTo(be,
            {
                opacity: 0,
                yPercent: 70,
                rotate: "12deg",
                skewX: "30deg",
            },
            {
                opacity: 1,
                rotate: "0deg",
                skewX: "0deg",
                yPercent: -20,
                duration: 1,
                delay: 2.6
            }

        )
        gsap.fromTo(be,
            {
                yPercent: -20,
            },
            {
                yPercent: 0,
                duration: 1,
                delay: 3.6
            }

        )
        gsap.fromTo(hero, {
            scale: 1.2,
            yPercent: 20,
            opacity: 0.05,
        }, {
            scale: 1,
            yPercent: 0,
            opacity: 1,
            duration: 1,
        })
    }, [])
    return (
        <section className='px-[6%] relative'>
            <svg className=" h-0 w-0">
                <filter id="noise">
                    <feTurbulence id="turbulence">
                        <animate attributeName="baseFrequency" dur={noiseAnimate ? "1s" : "0s"}
                            values="0.9 0.9;0.8 0.8;0.9 0.9;" repeatCount="indefinite">
                        </animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="60">

                    </feDisplacementMap>
                </filter>
            </svg>
            <div className={noise ? "svg -left-[20%]  -top-[20%]" : "hidden"}></div>
            <div className='mt-4 flex items-center justify-center flex-col text-[4vw]'>
                <ul className='flex mx-auto gap-6 justify-center font-extrabold'>
                    <li ref={modelRef} className='model'>MODEL<span className='text-orange' >.</span></li>
                    <li ref={shootRef} className='shoot'>SHOOT<span className='text-orange' >.</span></li>
                    <li ref={beRef} className='be-the-next'>BE THE NEXT<span className='text-orange' >.</span></li>
                </ul>
                <div className=' bg-gradient-radial from-orange  via-white  to-white  '>
                    <img ref={heroRef} src={hero} className='mx-auto -mb-2 w-[60vw] max-w-[400px]' alt="" />
                </div>
            </div>
            <div className='absolute bottom-8 text-3xl text-orange font-semibold' >

                <p><span className=' bg-orange inline-block mb-2 mr-1 h-1 w-4'></span>
                    01
                </p>
            </div>
            <div className='absolute bottom-8 text-[10px] right-[6%]'>
                <p className='font-bold'>Model Of the Month</p>
                <p className='font-semibold text-center'>August 2022</p>
            </div>
        </section>
    )
}

export default Hero
