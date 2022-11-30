import React, { useState } from 'react';
import OfferCard from './OfferCard';
import OfferCardData from './OfferCardData';

const Offer = () => {

    const [offerData] = useState(OfferCardData);

    return (
        <>
            {/* <!-- ======= offers sections ======= --> */}

            <section id="pricing" className="pricing my-5">
                <div className="container" >
                    <div className="section-second text-center">
                        <h2>What We offers</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        {
                            offerData.map((currData, ind) => {
                                return (
                                    <OfferCard key={ind} {...currData} />
                                )

                            })
                        }
                    </div>
                </div>


            </section>
            {/* <!-- End what we offers Section --> */}
        </>
    )
}

export default Offer;