import React from 'react';

const About = () => {
    return (
        <>

            {/* <!-- ======= About Us Section ======= --> */}

            <section id="about" className="about my-4">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-7">
                            <div className="text-box mt-5">
                                <h3>About us</h3>
                                <h2>Secure, Scalable , performance based and pay for resources</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor incididunt ut labore .Lorem ipsum dolor sit </p>
                                <a href="#" className="buy-btn mt-1">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="img-box">
                                <img src="assets/img/about-us.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End About Us Section --> */}

        </>
    )
}

export default About;