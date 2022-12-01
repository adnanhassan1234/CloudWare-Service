import React from 'react';
import Button from '@material-ui/core/Button';
import Banner from '../Components/Banner';
import Clients from '../Components/Clients';
import Offer from '../Components/Offer/Offer';
import About from '../Components/About';
import Estimator from '../Components/Estimator';
import Service from '../Components/Service';
import WhyChoose from '../Components/WhyChoose/WhyChoose';
import Support from '../Components/Support/Support';
import Testimonial from '../Components/Testimonial/Testimonial';
import Customer from '../Components/Customer';
import Faq from '../Components/Faq';
import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';




const Home = () => {

    return (
        <>
            {/* <!-- ======= HERO Section ======= --> */}
            <Banner />
            {/* <!-- ======= CLIENTS Section ======= --> */}
            <Clients />
            {/* <!-- ======= OFFER Section ======= --> */}
            <Offer />
            {/* <!-- ======= ESTIMATOR Section ======= --> */}
            <Estimator />
            {/* <!-- ======= ABOUT Section ======= --> */}
            <About />
            {/* <!-- ======= SERVICE Section ======= --> */}
            <Service />
            {/* <!-- ======= WHY CHOOSE US Section ======= --> */}
            <WhyChoose />
            {/* <!-- ======= SUPPORT Section ======= --> */}
            <Support />
            {/* <!-- ======= TESTIMONIALS Section ======= --> */}
            <Testimonial />
            {/* <!-- ======= CLIENT Section ======= --> */}
            <Customer />
            {/* <!-- ======= FAQ Section ======= --> */}
            <Faq />
            {/* <!-- ======= BLOG Section ======= --> */}
            <Blog />
            {/* <!-- ======= CONTACT Section ======= --> */}
            <Contact />
          



        </>
    )
}

export default Home;
