import React from 'react';
import Slider from "react-slick";

const Customer = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,

                }
            },
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                    arrows: false,

                }
            },

        ]

    };

    return (
        <>
            {/* <!-- ======= Our Customer says  Section ======= --> */}
            <section id="customer" className="customer my-5">
                <div className="container">
                    <div className="section-second">
                        <h2>Our Customer</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="clients_slider my-5">
                                <Slider {...settings}>
                                    <div>
                                        <img src="assets/img/clients/client-1.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-2.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-3.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-4.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-5.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-6.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-1.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-2.png" width="100%" alt="" />
                                    </div>
                                    <div>
                                        <img src="assets/img/clients/client-3.png" width="100%" alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======= END Our Customer says  Section ======= --> */}
        </>
    )
}

export default Customer;