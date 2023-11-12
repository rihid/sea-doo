import React from 'react'
import Image from 'next/image'
import { BRAND_LOGOS } from '@/constants'
import Link from 'next/link'

function CardProductLogo() {
    return (
        <section className="section" id="discover">
            <h2 className="section__title">Discover amazing BPR products<br /> with the best deal</h2>

            <div className="pt-8 container">
                <div className="grid gap-4 place-content-center grid-cols-2 md:grid-cols-4 lg:gap-x-12 lg:gap-y-8 container">
                    {BRAND_LOGOS.map(item =>
                        <div className="max-h-fit flex items-center justify-center" key={item.id}>
                            <Link href="#" className="">
                                <Image src={item.name} alt='' className="w-[180px] md:w-[240px]" />
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}

export default CardProductLogo