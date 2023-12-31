"use client"
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from "framer-motion";
import newProoduct from '@/public/images/new-product.jpg'
import { Button } from '.';

function CardDeal() {
    const ref = useRef(null);

    const isScroll = useInView(ref, { once: true });
    const dealContentControls = useAnimation();

    const leftContentVariants = {
        hidden: { opacity: 0, x: -12 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { x: -11, y: 50, opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
            },
        },
    };

    const rightContentVariants = {
        hidden: {
            opacity: 0,
            x: 25,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 70,
            },
        },
    };

    useEffect(() => {
        if (isScroll) {
            dealContentControls.start("visible");
        }
    }, [isScroll, dealContentControls]);

    return (
        <section className="section" id="new">
            <div className="gap-10 md:gap-12 md:grid-cols-2 md:items-center container grid">
                <motion.div
                    ref={ref}
                    animate={dealContentControls}
                    initial="hidden"
                    variants={leftContentVariants}
                    className="text-center md:text-left"
                >
                    <h2 className="md:text-left md:mb-6 section__title">Discover the 2024 <br />Sea-Doo lineup</h2>
                    <motion.div variants={item}>
                        <p className="mb-8 leading-normal tracking-wide">The 2024 Sea-Doo lineup has it all! The next level of premium versatility arrives with a revolutionary Switch pontoon lineup. A Spark evolution delivers the ultimate in accessible fun on the water.
                        </p>
                        <Button type="button" label="Reserve a place" />
                    </motion.div>
                </motion.div>

                <motion.div
                    ref={ref}
                    animate={dealContentControls}
                    initial="hidden"
                    variants={rightContentVariants}
                    className="flex gap-4 items-center justify-center md:justify-end"
                >
                    <div className="overflow-hidden">
                        <Image src={newProoduct} alt="" className="max-w-sm md:max-w-full transition-100" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CardDeal