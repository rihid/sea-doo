import React from 'react'
import { SOCIAL_ICONS } from '@/constants'
import Link from 'next/link'
import { Icon } from '.'

function Footer() {
    return (
        <footer className="section">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Follow Us</h3>
                        <div className="mt-4">
                            {SOCIAL_ICONS.map(item =>
                                <Link href="#" target="_blank" className="footer__social" key={item.id}>
                                    <Icon name={item.name} size={18}/>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Resources</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Need Help</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Safety Recalls</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Delivery Update</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Careers</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Become A Dealer</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Contact Us</a>
                            </li>
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
            </div>
        </footer>
    )
}

export default Footer