import React from 'react';

const Estimator = () => {
    return (
        <>
            <section id="pricing" className="pricing estimator">
                <div className="container" id="priceestimate">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-box  float-left mt-5">
                                <h3>Price Estimator</h3>
                                <h2>Compare the best price from the market!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor incididunt ut labore .Lorem ipsum dolor sit </p>
                            </div>
                            <a href="#" className="bluebtn mt-3">Compare Pricing</a>
                        </div>
                        <div className="col-md-6 justify-content-center">
                            <div className="img-box">
                                <img src="assets/img/estimate.png" alt="img" />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Estimator;