"use client";
import React from 'react'
import Image from 'next/image'
import hero from '@/public/images/hero.jpg'
import newApparell from '@/public/images/new-apparell-1.jpg'
import { Button, Icon } from '.'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Hero() {
    const contentHomeVariants = {
        hidden: {
            opacity: 0,
            x: -25,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 150,
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
                delay: 0.2,
                type: "spring",
                stiffness: 150,
            },
        },
    };
    return (
        <section id="home">
            <div className="bg-center bg-no-repeat bg-[url('https://sea-doo.brp.com/content/sea-doo/en_us/_jcr_content/root/heroblock.coreimg.jpeg/1698842427158/sea-my23-swic18-wakep-28615-rgb-4096x2304.jpeg?imwidth=2048')] bg-cover bg-textColorLight bg-blend-multiply">

                <div className="home__container container grid">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={contentHomeVariants}
                        className="md:self-end"
                    >
                        <h1 className="text-whiteColor font-medium text-[2.25rem] lg:text-[4rem] mb-3">The 2023 <br /> Lineup is Still <br /> <b>Available</b></h1>
                        <span className="max-w-md block text-whiteColor font-semibold leading-normal tracking-wide mb-10">
                            Satisfy your need for having a blast on the water with a 2023 Sea-Doo personal watercraft or pontoon</span>
                        <br />
                        <Button type="button" label="See 2023 Models"/>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={rightContentVariants}
                        className="flex p-4 items-center gap-2 absolute right-0 bottom-4 w-[228px] md:bottom-12 lg:w-[328px] lg:grid-cols-2 text-whiteColor bg-firstColor "
                    >
                        <div>
                            <span className="block text-sm font-semibold mb-3 lg:text-base">New apparel & accessories</span>
                            <Link href="#" className="button button--flex button--link home__info-button">
                                More <Icon name="icon-arrow-right" size={18} />
                            </Link>
                        </div>

                        <div className="overflow-hidden">
                            <Image src={newApparell} alt="" className="home__info-img" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Hero