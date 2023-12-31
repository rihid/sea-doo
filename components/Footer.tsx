"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { SOCIAL_ICONS, RESOURCES, SUPPORT, COMPANY } from '@/constants'
import Link from 'next/link'
import { Icon } from '.'

function Footer() {
    const ref = useRef(null);

    const isScroll = useInView(ref, { once: true });
    const footerContentControls = useAnimation();

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: -25,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 150,
            },
        },
    };

    useEffect(() => {
        if (isScroll) {
            footerContentControls.start("visible");
        }
    }, [isScroll, footerContentControls]);
    return (
        <footer className="section">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
                className="footer__container container grid"
            >
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Follow Us</h3>
                        <div className="mt-4">
                            {SOCIAL_ICONS.map(item =>
                                <Link href="#" target="_blank" className="footer__social" key={item.id}>
                                    <Icon name={item.name} size={18} />
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Resources</h3>
                        <ul>
                            {RESOURCES.map(item =>
                                <li key={item.id} className="footer__item">
                                    <Link href={item.href} className="footer__link">{item.name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            {COMPANY.map(item =>
                                <li key={item.id} className="footer__item">
                                    <Link href={item.href} className="footer__link">{item.name}</Link>
                                </li>
                            )}

                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            {SUPPORT.map(item =>
                                <li key={item.id} className="footer__item">
                                    <Link href={item.href} className="footer__link">{item.name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; BRP 2003-2023</p>
                    <div className="footer__terms">
                        <a href="#" className="footer__terms-link">Legal Notice</a>
                        <a href="#" className="footer__terms-link">Privacy Policy</a>
                        <a href="#" className="footer__terms-link">Sitemap</a>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer