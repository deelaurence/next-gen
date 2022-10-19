import React from 'react'
import underline from "../images/about-us-underline.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
const About = () => {

    const nextRef = useRef(null)
    const nextRef2 = useRef(null)
    const modelRef = useRef(null)
    const modelRef2 = useRef(null)
    const aboutRef = useRef(null)
    const underlineRef = useRef(null)
    const p1Ref = useRef(null)
    const p2Ref = useRef(null)
    // const heroRef = useRef(null)
    useEffect(() => {
        const next = nextRef.current;
        const next1 = nextRef2.current;
        const model = modelRef.current;
        const about = aboutRef.current;
        const underline = underlineRef.current;
        const p1 = p1Ref.current;
        const p2 = p2Ref.current;
        const model1 = modelRef2.current;

        const log = () => {
            console.log("hello")
        }
        gsap.fromTo(next, {
            xPercent: 80,
            skewX: "20deg",
            yoyo: true,
            repeat: -1,
        },
            {
                yoyo: true,
                xPercent: -10,
                skewX: "0deg",
                repeat: -1,
                duration: 24,
            })
        gsap.fromTo(model, {
            xPercent: -80,
            skewX: "-20deg",
            yoyo: true,
            repeat: -1,
        },
            {
                yoyo: true,
                skewX: "0deg",
                xPercent: 10,
                repeat: -1,
                // delay: 4,
                duration: 24,
            })
        gsap.fromTo(next1, {
            xPercent: 80,
            skewX: "20deg",
            yoyo: true,
            repeat: -1,
        },
            {
                yoyo: true,
                xPercent: -10,
                skewX: "0deg",
                repeat: -1,
                duration: 24,
            })
        gsap.fromTo(model1, {
            xPercent: -80,
            skewX: "-20deg",
            yoyo: true,
            repeat: -1,
        },
            {
                yoyo: true,
                skewX: "0deg",
                xPercent: 10,
                repeat: -1,
                // delay: 4,
                duration: 24,
            })
        const aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: about,
                start: "top center",
            }
        })
        aboutTl.fromTo(about, {
            yPercent: 100,
            opacity: 0,
            // onSnapComplete: log,
        }
            , {
                yPercent: 0,
                opacity: 1,
                duration: .5
            })
            .fromTo(underline, {
                yPercent: 100,
                opacity: 0,
            },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: .5
                })
        gsap.fromTo(p1, {
            yPercent: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: about,
                start: "top center",
            }

        }, {
            scrollTrigger: {
                trigger: about,
                start: "top center",
            },
            yPercent: 0,
            opacity: 1,
            delay: .2,
            duration: 1.2,
        }
        )
        gsap.fromTo(p2, {
            yPercent: 50,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: about,
                start: "top center",
            },
            yPercent: 0,
            opacity: 1,
            delay: .5,
            duration: 1.5,
        }
        )
        gsap.from(about, {
            scrollTrigger: {
                trigger: about,
                start: "top top",
                end: "top 2%",
                // onComplete: log
            }
        })


    }, [])
    return (
        <section className=''>
            <div className='h-[300px] bg-orange justify-between flex'>
                <div className='w-[400px] flex justify-center items-center'>
                    <div className='text-8xl text-opaque opacity-40 overflow-visible mt-8 font-semibold -rotate-90'>
                        <p ref={nextRef} >NextGen</p>
                        <p ref={modelRef} className='pl-4'>Models</p>
                    </div>
                </div>
                <div className='my-auto max-w-[350px]'>
                    <div className='text-white text-center my-3'>
                        <h2 ref={aboutRef} >About us</h2>
                        <img ref={underlineRef} src={underline} className='w-20 mx-auto' alt="" />
                    </div>
                    <p ref={p1Ref} className='text-center text-white text-[12px]'>
                        We are the No. 1 Modelling Agency in the Country.
                        We discover talents. Mould them and expose them to the <br /> whole world.
                    </p>
                    <p ref={p2Ref} className='text-center text-white text-[12px]'>
                        We look out for the models for the next generations.
                        Join us and experience a whole different modelling experiences with top coaches and awesome partners.
                    </p>
                </div>
                <div className='w-[400px] flex justify-center items-center' >
                    <div className='text-8xl text-opaque opacity-40  overflow-visible mt-8 font-semibold rotate-90'>
                        <p ref={nextRef2} >NextGen</p>
                        <p ref={modelRef2} className='pl-4'>Models</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About
