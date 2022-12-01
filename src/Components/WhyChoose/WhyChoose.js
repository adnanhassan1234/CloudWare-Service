import React, {useState} from 'react'
import ChooseCard from './ChooseCard';
import ChooseCardData from './ChooseCardData';

const WhyChoose = () => {

    const [chooseData] = useState(ChooseCardData);

    return (
        <>
            {/* <!-- ======= Services Section ======= --> */}

            <section id="services" className="services section-bg my-5">
                <div className="container">
                    <div className="section-title mb-5">
                        <h2>Why Choose Us</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row mb-4">
                    {
                        chooseData.map((currData, ind) => {
                                return (
                                    <ChooseCard key={ind} {...currData} />
                                )

                            })
                        }
                    </div>
                </div>
            </section>
            {/* <!-- End Services Section --> */}
        </>
    )
}

export default WhyChoose;