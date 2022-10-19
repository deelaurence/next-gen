import React from 'react'
import greenHat from "../images/greenhat.jpg"
import greenHair from "../images/greenhair.jpg"
import twinAfro from "../images/twinafro.jpg"
import patternJacket from "../images/patternjacket.jpg"
import { useRef } from 'react'
import underline from "../images/orange-underline.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
const Models = () => {
    const [mobileScreen, setMobileScreen] = useState(undefined)
    const [noise, setNoise] = useState(true)

    let endValue;
    window.innerWidth < 769 ? endValue = "=+400px" : endValue = "top 20%"
    console.log(endValue)
    const handleResize = () => {
        window.innerWidth < 481 ? setMobileScreen(true) : setMobileScreen(false)
    }
    useEffect(() => {
        // console.log(window.innerWidth < 481)
        window.addEventListener('resize', handleResize)
        console.log(mobileScreen)
        // console.log('runEffect')
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [window.innerWidth])
    const input = useRef(null)
    const modelRef = useRef(null)
    const underlineRef = useRef(null)
    const pRef = useRef(null)
    const greenHatRef = useRef(null)
    const greenHairRef = useRef(null)
    const twinAfroRef = useRef(null)
    const patternJacketRef = useRef(null)
    const noiseRef = useRef(null)
    const noiseRef2 = useRef(null)
    const noiseRef3 = useRef(null)
    const noiseRef4 = useRef(null)
    useEffect(() => {

        const underline = underlineRef.current;
        const p = pRef.current;
        const model = modelRef.current;
        const greenHair = greenHairRef.current;
        const greenHat = greenHatRef.current;
        const twinAfro = twinAfroRef.current;
        const noise = noiseRef.current;
        const noise2 = noiseRef2.current;
        const noise3 = noiseRef3.current;
        const noise4 = noiseRef4.current;
        const patternJacket = patternJacketRef.current;
        const modelTl = gsap.timeline({
            scrollTrigger: {
                trigger: underline,
                start: "top center",
                // markers: true,
            }
        }
        )
        modelTl.fromTo(model, {
            yPercent: 20,
            opacity: 0,
            skewX: "20deg",
            // yoyo: true,
            // repeat: -1,
        },
            {
                // yoyo: true,
                yPercent: 0,
                opacity: 1,
                skewX: "0deg",
                // repeat: -1,
                duration: .4,
            })
            .fromTo(underline, {
                yPercent: 20,
                opacity: 0,
                // skewX: "20deg",
                // yoyo: true,
                // repeat: -1,
            },
                {
                    // yoyo: true,
                    yPercent: 0,
                    opacity: 1,
                    // skewX: "0deg",
                    // repeat: -1,
                    duration: .4,
                })

            .fromTo(p, {
                yPercent: 20,
                opacity: 0,
                // skewX: "20deg",
                // yoyo: true,
                // repeat: -1,
            },
                {
                    // yoyo: true,
                    yPercent: 0,
                    opacity: 1,
                    // skewX: "0deg",
                    // repeat: -1,
                    duration: 1.2,
                })
        const imagesTl = gsap.timeline({
            scrollTrigger: {
                trigger: greenHat,
                start: "top 70%",
                end: endValue,
                // markers: true,
                scrub: true,
                // onComplete: removeNoise(),
                // pin: true,
                // anticipatePin: true,
            }

        })

        imagesTl
            .fromTo(noise, {
                // yPercent: 100,
                // skewX: "30deg",
                // filter: "grayscale(100%)",
                // rotate: "12deg",
                opacity: 1,
            }, {
                // yPercent: 0,
                opacity: 0,
                // filter: "grayscale(0%)",
                // rotate: "0deg",
                // skewX: "0deg"

            })
            .fromTo(greenHat, {
                // yPercent: 100,
                // skewX: "30deg",
                filter: "grayscale(100%)",
                // rotate: "12deg",
                // opacity: 0,
            },
                {
                    // yPercent: 0,
                    // opacity: 1,
                    filter: "grayscale(0%)",
                    // rotate: "0deg",
                    // skewX: "0deg"

                })
            .fromTo(noise2, {
                // yPercent: 100,
                // skewX: "30deg",
                // filter: "grayscale(100%)",
                // rotate: "12deg",
                opacity: 1,
            }, {
                // yPercent: 0,
                opacity: 0,
                // filter: "grayscale(0%)",
                // rotate: "0deg",
                // skewX: "0deg"

            })
            .fromTo(greenHair, {
                // yPercent: 100,
                // skewX: "30deg",
                filter: "grayscale(100%)",
                // rotate: "12deg",
                // opacity: 0,
            }, {
                // yPercent: 0,
                // opacity: 1,
                filter: "grayscale(0%)",
                // rotate: "0deg",
                // skewX: "0deg"

            })
            .fromTo(noise3, {
                // yPercent: 100,
                // skewX: "30deg",
                // filter: "grayscale(100%)",
                // rotate: "12deg",
                opacity: 1,
            }, {
                // yPercent: 0,
                opacity: 0,
                // filter: "grayscale(0%)",
                // rotate: "0deg",
                // skewX: "0deg"

            })

            .fromTo(patternJacket, {
                // yPercent: 100,
                // skewX: "30deg",
                filter: "grayscale(100%)",
                // rotate: "12deg",
                // opacity: 0,
            }, {
                // yPercent: 0,
                // opacity: 1,
                filter: "grayscale(0%)",
                // rotate: "0deg",
                // skewX: "0deg"

            })
            .fromTo(noise4, {
                // yPercent: 100,
                // skewX: "30deg",
                // filter: "grayscale(100%)",
                // rotate: "12deg",
                opacity: 1,
            }, {
                // yPercent: 0,
                opacity: 0,
                // filter: "grayscale(0%)",
                // rotate: "0deg",
                // skewX: "0deg"

            })
            .fromTo(twinAfro, {
                // yPercent: 100,
                // skewX: "30deg",
                filter: "grayscale(100%)",
                // rotate: "12deg",
                // opacity: 0,
            },
                {
                    // yPercent: 0,
                    // opacity: 1,
                    filter: "grayscale(0%)",
                    // rotate: "0deg",
                    // skewX: "0deg"

                })

    }, [])
    // console.log(input.current)
    const position = (e) => {
        setNoise(false)

        // let rect = input.current.getBoundingClientRect();
        const offsetY = e.target.getBoundingClientRect().top - e.clientY
        const offsetX = e.target.getBoundingClientRect().left - e.clientX
        e.target.style.transform = 'scale(1.2)'
        e.target.style.top = -offsetY / 5 + 'px'
        // input.current.style.borderRadius = 50 + 'px'

        e.target.style.left = -offsetX / 5 + 'px'


    }
    const handleLeave = (e) => {
        e.target.style.transform = 'scale(1)'
        e.target.style.top = 0 + 'px'
        e.target.style.left = 0 + 'px'
    }
    return (
        <section className='relative pt-[6%] z-50'>
            <div className='text-orange text-center my-3'>
                <h2 ref={modelRef}>Meet Our Models</h2>
                <img ref={underlineRef} src={underline} className='w-28 mx-auto' alt="" />
            </div>
            <div className=' max-w-[350px] mx-auto'>
                <p ref={pRef} className='text-[12px] text-center  mx-auto font-semibold'>
                    Meet our beautiful models of the next generation.
                    Follow them on a journey of excellence as they strive to be the best of the rest.
                    <br /> We provide you with an amazing first-hand experience with our models.
                </p>
            </div>
            <div className='flex gap-2 flex-col md:flex-row mt-8 mb-20 items-center justify-around  md:h-[250px] w-screen'>

                <div ref={greenHatRef} className='h-[50vw] w-[50vw] md:h-[20vw] rounded-xl cursor-pointer overflow-hidden relative md:w-[20vw]'>
                    <img src={greenHat} onMouseMove={position} onMouseLeave={handleLeave} ref={input} className='green-hat h-full rounded-xl absolute object-contain' alt="" />
                    <svg className=" h-0 w-0">
                        <filter id="noise">
                            <feTurbulence id="turbulence">
                                <animate attributeName="baseFrequency" dur="0s"
                                    values="0.9 0.9;0.8 0.8;0.9 0.9;" repeatCount="indefinite">
                                </animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="60">
                            </feDisplacementMap>
                        </filter>
                    </svg>
                    <div ref={noiseRef} onMouseMove={position} className={noise ? "svg1 -left-[20%]  -top-[20%]" : "hidden"}></div>
                </div>
                <div ref={greenHairRef} className='h-[50vw] w-[50vw] md:h-[20vw] md:w-[20vw] cursor-pointer overflow-hidden relative rounded-xl'>
                    <img src={greenHair} onMouseMove={position} onMouseLeave={handleLeave} className='absolute object-fit rounded-xl' alt="" />
                    <svg className=" h-0 w-0">
                        <filter id="noise">
                            <feTurbulence id="turbulence">
                                <animate attributeName="baseFrequency" dur="0s"
                                    values="0.9 0.9;0.8 0.8;0.9 0.9;" repeatCount="indefinite">
                                </animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="60">
                            </feDisplacementMap>
                        </filter>
                    </svg>
                    <div ref={noiseRef2} onMouseMove={position} className={noise ? "svg1 -left-[20%]  -top-[20%]" : "hidden"}></div>
                </div>
                <div ref={patternJacketRef} className='h-[50vw] rounded-xl w-[50vw] md:h-[20vw] md:w-[20vw] cursor-pointer overflow-hidden relative'>
                    <img src={patternJacket} onMouseMove={position} onMouseLeave={handleLeave} className='absolute rounded-xl object-contain ' alt="" />
                    <svg className=" h-0 w-0">
                        <filter id="noise">
                            <feTurbulence id="turbulence">
                                <animate attributeName="baseFrequency" dur="0s"
                                    values="0.9 0.9;0.8 0.8;0.9 0.9;" repeatCount="indefinite">
                                </animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="60">
                            </feDisplacementMap>
                        </filter>
                    </svg>
                    <div ref={noiseRef3} onMouseMove={position} className={noise ? "svg1 -left-[20%]  -top-[20%]" : "hidden"}></div>
                </div>
                <div ref={twinAfroRef} className='h-[50vw] w-[50vw] md:h-[20vw]  md:w-[20vw] cursor-pointer overflow-hidden rounded-xl relative'>
                    <img src={twinAfro} onMouseMove={position} onMouseLeave={handleLeave} className='absolute rounded-xl' alt="" />
                    <svg className=" h-0 w-0">
                        <filter id="noise">
                            <feTurbulence id="turbulence">
                                <animate attributeName="baseFrequency" dur="0s"
                                    values="0.9 0.9;0.8 0.8;0.9 0.9;" repeatCount="indefinite">
                                </animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="60">
                            </feDisplacementMap>
                        </filter>
                    </svg>
                    <div ref={noiseRef4} onMouseMove={position} className={noise ? "svg1 -left-[20%]  -top-[20%]" : "hidden"}></div>
                </div>
            </div>
            <div className='absolute bottom-8 text-orange  font-semibold right-[6%] text-3xl' >

                <p><span className='bg-orange inline-block mb-2 mr-1 h-1 w-4'></span>
                    02
                </p>
            </div>
        </section>
    )
}

export default Models
