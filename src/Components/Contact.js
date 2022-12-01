import React from 'react';

const Contact = () => {
    return (
        <>
            {/* <!-- ======= Contact Section ======= --> */}

            <section id="contact" className="contact">
                <div className="container" >
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                         <div className="info">
                                <div className="address">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <h4>Location:</h4>
                                    <p>Unit No 304-305, 3rd Floor, Tower B4, IT Spaze Park, Sector 49Gurgaon, Haryana</p>
                                </div>
                                <div className="email">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                   <h4>Email:</h4>
                                    <p>Yashpal.sharma@@cloudwareindia.com
                                    </p>
                                </div>
                                <div className="phone">
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                    <h4>Call:</h4>
                                    <p>+91-9560197840
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Contact Section --> */}
        </>
    )
}

export default Contact;