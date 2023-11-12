"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Subscribetion() {
    const ref = useRef(null);

    const isScroll = useInView(ref, { once: true });
    const promoContentControls = useAnimation();

    const contentVariants = {
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

    useEffect(() => {
        if (isScroll) {
            promoContentControls.start("visible");
        }
    }, [isScroll]);
    return (
        <section className="section">
            <div className="py-10 px-0 bg-none md:p-0 bg-firstColorSecond">
                <div className="md:py-14 md:px-0 md:bg-firstColorSecond container">
                    <h2 className="section__title subscribe__title">Subscribe Our <br /> Newsletter</h2>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                        className="text-center text-whiteColor mb-10"
                    >
                        Sign up for our emails. Be the first to know about the latest events, news, and deals.
                    </motion.p>

                    <motion.form
                        initial="hidden"
                        animate="visible"
                        variants={rightContentVariants}
                        action=""
                        className="subscribe__form"
                    >
                        <input type="text" placeholder="Enter email" className="subscribe__input" />

                        <button className="button">
                            Subscribe
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
