"use client";
import { useEffect } from 'react'
import scrollActive from '@/utils/scrollActive';
import { CardDeal, CardProduct, CardProductLogo, Hero, Promo, Subscribetion } from '@/components'

export default function Home() {

    useEffect(() => {
        window.addEventListener('scroll', scrollActive);
        return () => {
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    return (
        <>
            <Hero />
            <CardDeal />
            <CardProduct />
            <Promo />
            <CardProductLogo />
            <Subscribetion />
        </>
    )
}
