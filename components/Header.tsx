"use client";
import { useState, useEffect } from 'react'
import { Navbar } from '.'

function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    // const changeBackground = () => {
    //     const header: any = document.querySelector('#header');
    //     if (window.scrollY >= 100) {
    //         header.classList.add('scroll-header')
    //     } else {
    //         header.classList.remove('scroll-header')
    //     }
    // }
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setIsScrolled(true)
        } else{
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground);
    }, [])

    return (
        <header className={`w-full fixed top-0 left-0 z-[100] ${isScrolled ? 'scroll-header' : 'bg-transparent'}`} id="header">
            <Navbar isScrolled={isScrolled} />
        </header>
    )
}

export default Header