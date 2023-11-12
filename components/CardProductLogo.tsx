"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from 'next/image'
import { BRAND_LOGOS } from '@/constants'
import Link from 'next/link'

function CardProductLogo() {
    const ref = useRef(null);

    const isScroll = useInView(ref, { once: true });
    const brandLogoControls = useAnimation();

    const containerContent = {
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
            brandLogoControls.start("visible");
        }
    }, [isScroll, brandLogoControls]);
    return (
        <motion.section
            ref={ref}
            animate={brandLogoControls}
            initial="hidden"
            variants={containerContent}
            className="section" id="discover"
        >
            <h2 className="section__title">Discover amazing BPR products<br /> with the best deal</h2>

            <div className="pt-8 container">
                <motion.div variants={item} className="grid gap-4 place-content-center grid-cols-2 md:grid-cols-4 lg:gap-x-12 lg:gap-y-8 container">
                    {BRAND_LOGOS.map(item =>
                        <div className="max-h-fit flex items-center justify-center" key={item.id}>
                            <Link href="#" className="">
                                <Image src={item.name} alt='' className="w-[180px] md:w-[240px] opacity-50 hover:opacity-100 duration-300" />
                            </Link>
                        </div>
                    )}

                </motion.div>
            </div>
        </motion.section>
    )
}

export default CardProductLogo