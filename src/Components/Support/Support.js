import React, { useState } from 'react';
import SupportCardData from './SupportCardData';
import SupportCard from './SupportCard';


const Support = () => {

    const [supportData] = useState(SupportCardData);
    console.log("🚀 ~ file: Support.js:8 ~ Support ~ supportData", supportData);

    return (
        <>
            {/* <!-- ======= Team Section ======= --> */}

            <section id="team" className="team section-bg ">
                <div className="container ">
                    <div className="section-title"> <br />
                        <h2 className='mt-5'>99.99% SLA. 100%  Human Support </h2>
                        <p className='mb-4'>.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</p>

                    </div>
                    <div className="row">
                    {
                        supportData.map((currData, ind) => {
                                return (
                                    <SupportCard key={ind} {...currData} />
                                )

                            })
                        }  
                    </div> 
                </div>
            </section>
            {/* <!-- End Team Section --> */}
        </>
    )
}

export default Support;