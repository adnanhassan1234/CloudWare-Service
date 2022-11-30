import React from 'react';

const Banner = () => {
    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}

            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" >
                            <h1>Cloud Computing Service</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .
                            </p>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" >
                            <img src="assets/img/banner.gif" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Hero --> */}
        </>
    )
}

export default Banner;