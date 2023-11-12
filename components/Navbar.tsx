"use client";
import React, { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";
import Image from "next/image";

export default function Navbar({isScrolled}: {isScrolled: boolean}) {
    const [isShow, setIsShow] = useState(false);

    return (
        <nav className="flex h-12 md:h-[4.5rem] container items-center justify-between">
            <Link href="#">
                <Icon name={isScrolled ? 'seadoo-logo' : 'seadoo-logo-white'} size={120} />
            </Link>

            <div className={`nav__menu ${isShow ? 'show-menu': ''}`}id="nav-menu">
                <ul className="flex flex-col gap-10 md:flex-row md:gap-16">
                    {NAV_LINKS.map(menu =>
                        <li key={menu.id}>
                            <Link href={`#${menu.slug}`} className={`text-textColorLight font-semibold uppercase hover:text-textColor  md:normal-case  ${isScrolled ? 'md:text-textColor' : 'md:text-whiteColor md:hover:text-whiteColor'}`}>{menu.name}</Link>
                        </li>
                    )}
                </ul>

                <div 
                    className="nav__close"
                    onClick={() => setIsShow(!isShow)}
                >
                    <Icon name="icon-close" size={24} />
                </div>
            </div>

            <div 
                className="nav__toggle" 
                onClick={() => setIsShow(true)}
            >
                <Icon name="icon-menu" size={24} />
            </div>
        </nav>

    )
}
