import React from 'react';

const Footer = () => {
    return (
    <>
            {/* <!-- ======= Footer ======= --> */}

            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <a href="index.html" className="logo me-auto">
                                    <img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                                <p>
                                    CLOUDWARE TECHNOLOGIES PRIVATE LIMITED <br />
                                    Unit No 304-305, 3rd Floor, Tower B4, IT<br />
                                    Spaze Park, Sector 49Gurgaon, Haryana,<br />
                                    244001 India <br /><br />
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">FAQ</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Privacy policy</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Terms of service</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Blogs</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Pricing</a></li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Dedicated Server</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Cloud Server</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Backup & Storage</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Hosting Details</a></li>

                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Migrations</a></li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Follow us</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>

                                <div className="social-links mt-3">

                                    <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>

                                    <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>

                                    <a href="#" className="instagram"><i className="fa fa-youtube-play" aria-hidden="true"></i>
                                   </a>

                                    <a href="#" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Cloudware</span></strong>. All Rights Reserved
                    </div>
                </div>

            </footer>
                                {/* <!-- End Footer --> */}
                            </>
     )
}
export default Footer;