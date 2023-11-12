import React from 'react'
import Image from 'next/image'
import acessories from '@/public/images/acessories.webp'
import part from '@/public/images/parts.webp'
import clothing from '@/public/images/clothing.webp'
import { Icon } from '.'

function CardProduct() {
    return (
        <section className="place section" id="place">
            <h2 className="section__title">The Official Sea-Doo Accessories, <br /> Parts & Clothing</h2>

            <div className="place__container container grid">
                <div className="h-56 w-36 place__card md:h-64 md:w-44 lg:h-80 lg:w-52">
                    <img src="https://sea-doo-shop.brp.com/media/wysiwyg/SEA-MY23-SAL-05566-RGB-3.jpg" alt="" className="h-56 w-36 place__img md:h-64 md:w-44 lg:h-80 lg:w-52 object-cover image-brightness" />

                    <div className="absolute top-8 left-2 w-full h-full">
                        <h3 className="text-lg text-whiteColor font-semibold md:text-xl">Accessories</h3>
                    </div>

                    <button className="button button--flex place__button">
                        <span className="text-xs md:text-sm">Shop Now</span>
                        <Icon name="icon-arrow-right" size={20}/>
                    </button>
                </div>

                <div className="h-56 w-36 place__card md:h-64 md:w-44 lg:h-80 lg:w-52">
                    <img src="https://sea-doo-shop.brp.com/media/wysiwyg/SEA-AF-SDA-March-13-BottomFunnel-XPS-Care-STATIC-1x1-ENNA.jpg" alt="" className="h-56 w-36 place__img md:h-64 md:w-44 lg:h-80 lg:w-52 object-cover image-brightness" />

                    <div className="absolute top-8 left-2 w-full h-full">
                        <h3 className="text-lg text-whiteColor font-semibold md:text-xl">Parts & <br /> Maintenance</h3>
                    </div>

                    <button className="button button--flex place__button">
                        <span className="text-xs md:text-sm">Shop Now</span>
                        <Icon name="icon-arrow-right" size={20}/>
                    </button>
                </div>

                <div className="h-56 w-36 place__card md:h-64 md:w-44 lg:h-80 lg:w-52">
                    <img src="https://sea-doo-shop.brp.com/media/wysiwyg/SEA-MY23-GTI-13658-RGB-desk_1.jpg" alt="" className="h-56 w-36 place__img md:h-64 md:w-44 lg:h-80 lg:w-52 object-cover image-brightness" />

                    <div className="absolute top-8 left-2 w-full h-full">
                        <h3 className="text-lg text-whiteColor font-semibold md:text-xl">Clothing & Gear</h3>
                    </div>

                    <button className="button button--flex place__button">
                        <span className="text-xs md:text-sm">Shop Now</span>
                        <Icon name="icon-arrow-right" size={20}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CardProduct