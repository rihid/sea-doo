
"use client";
import { useEffect, useRef } from "react";
import Image from 'next/image'
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from '.'
import { PRODUCTS } from "@/constants";

function CardProduct() {
    const ref = useRef(null);

    const isScroll = useInView(ref, { once: true });
    const productContentControls = useAnimation();

    const productContentVariants = {
        hidden: { x: -11, opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.09,
            },
        },
    };

    const item = {
        hidden: { x: -12, opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    useEffect(() => {
        if (isScroll) {
            productContentControls.start("visible");
        }
    }, [isScroll]);

    return (
        <motion.section
            ref={ref}
            animate={productContentControls}
            initial="hidden"
            variants={productContentVariants}
            className="place section"
            id="place"
        >
            <h2 className="section__title">The Official Sea-Doo Accessories, <br /> Parts & Clothing</h2>
            <motion.div variants={item} className="place__container container grid">
                {PRODUCTS.map(item =>
                    <div key={item.id} className="h-56 w-36 place__card md:h-64 md:w-44 lg:h-80 lg:w-52">
                        <img src={item.src} alt="" className="h-56 w-36 place__img md:h-64 md:w-44 lg:h-80 lg:w-52 object-cover image-brightness" />

                        <div className="absolute top-8 left-2 w-full h-full">
                            <h3 className="text-lg text-whiteColor font-semibold md:text-xl">{item.name}</h3>
                        </div>

                        <button className="button button--flex place__button">
                            <span className="text-xs md:text-sm">Shop Now</span>
                            <Icon name="icon-arrow-right" size={20} />
                        </button>
                    </div>
                )}

            </motion.div>
        </motion.section>
    )
}

export default CardProduct