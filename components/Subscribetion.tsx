import React from 'react'

export default function Subscribetion() {
    return (
        <section className="section">
            <div className="py-10 px-0 bg-none md:p-0 bg-firstColorSecond">
                <div className="md:py-14 md:px-0 md:bg-firstColorSecond container">
                    <h2 className="section__title subscribe__title">Subscribe Our <br /> Newsletter</h2>
                    <p className="text-center text-whiteColor mb-10">Sign up for our emails. Be the first to know about the latest events, news, and deals.
                    </p>

                    <form action="" className="subscribe__form">
                        <input type="text" placeholder="Enter email" className="subscribe__input" />

                        <button className="button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
