"use client";
import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import Image from 'next/image'
import promos from '@/public/images/promos.jpg'
import { Button } from '.';

function Promo() {
    const ref = useRef(null);

    const isScroll = useInView(ref, { once: true });
    const promoContentControls = useAnimation();

    const promoContentVariants = {
        hidden: { opacity: 0, x: -12 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.7,
                staggerChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
            },
        },
    };

    useEffect(() => {
        if (isScroll) {
            promoContentControls.start("visible");
        }
    }, [isScroll, promoContentControls]);
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={promoContentVariants}
            className="section"
            id="promo"
        >
            <div className="bg-center bg-no-repeat bg-[url('https://sea-doo.brp.com/content/sea-doo/en_us/_jcr_content/root/imagecards.coreimg.jpeg/1698842427195/sea-pwc-my24-reclt-spark-fam-lifestyle-0000-176-rgb.jpeg?imwidth=2048')] bg-cover bg-textColorLight bg-blend-multiply">
                <div className="mx-auto max-w-screen-xl text-left py-24 lg:py-36 container">
                    <motion.div variants={item} className="">
                        <h1 className="text-whiteColor font-bold text-[2.25rem] lg:text-[4rem] mb-3">2024 promos</h1>
                        <span className="max-w-md block text-whiteColor font-semibold mb-3">
                            Sweet PWC and Switch deals</span>
                        <span className="max-w-md block text-whiteColor font-normal leading-normal tracking-wide mb-10">
                            Live more adventures on your 2024 Sea-Doo personal watercraft or Switch pontoon with 2 years of coverage. Plus, get a sweet discount on the entire 2024 accessories lineup. See details and prepare for the fun</span>
                        <Button type="button" label="See Promotions" />

                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Promo