import React from 'react'
import Image from 'next/image'
import promos from '@/public/images/promos.jpg'

function Promo() {
    return (
        <section className="section" id="home">
            <Image src={promos} alt="" className="absolute right-0 left-0 w-full h-[95%] object-cover object-[83%] image-brightness" />

            <div className="flex home__container container items-center justify-start">
                <div className="">
                    <h1 className="text-whiteColor font-bold text-[2.25rem] lg:text-[4rem] mb-3">2024 promos</h1>
                    <span className="max-w-md block text-whiteColor font-semibold mb-3">
                    Sweet PWC and Switch deals</span>
                    <span className="max-w-md block text-whiteColor font-normal leading-normal tracking-wide mb-10">
                    Live more adventures on your 2024 Sea-Doo personal watercraft or Switch pontoon with 2 years of coverage. Plus, get a sweet discount on the entire 2024 accessories lineup. See details and prepare for the fun</span>
                    <a href="#" className="button">See Promotions</a>

                </div>
            </div>
       
        </section>
    )
}

export default Promo