import React from 'react'
import underline from "../images/about-us-underline.png"
const BecomeModel = () => {
    return (
        <section className="relative become-model py-12 h-[300px]">
            <div className='z-10 absolute top-0 opacity-50 w-full h-full bg-orange' ></div>
            <div className='absolute left-1/2 -translate-x-1/2 z-20'>
                <div className='text-white text-center my-3'>
                    <h2>Become a Model</h2>
                    <img src={underline} className='w-20 mx-auto' alt="" />
                </div>
                <p className='text-center max-w-[350px] text-white text-[12px] '>
                    We are the No. 1 Modelling Agency in the Country.
                    We discover talents. Mould them and expose them to the <br /> whole world.
                    We are the No. 1 Modelling Agency in the Country.
                    We discover talents. Mould them and expose them to the <br /> whole world.
                </p>
                <div className=''>
                    <button className='ml-[50%] text-xs p-2 font-semibold rounded-2xl -translate-x-1/2 my-5 bg-white text-orange'>
                        JOIN US TODAY
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BecomeModel
