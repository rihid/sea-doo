import Image from 'next/image'
import hero from '@/public/images/hero.jpg'
import { CardDeal, CardProduct, CardProductLogo, Hero, Promo, Subscribetion } from '@/components'

export default function Home() {
    
    return (
        <main className="main">
            <Hero />
            <CardDeal />
            <CardProduct />
            <Promo/>
            <CardProductLogo/>
            <Subscribetion/>
        </main>
    )
}
