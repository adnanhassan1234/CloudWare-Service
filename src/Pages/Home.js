import React from 'react';
import Button from '@material-ui/core/Button';
import Banner from '../Components/Banner';
import Clients from '../Components/Clients';
import Offer from '../Components/Offer/Offer';




const Home = () => {

    return (
        <>
           {/* <!-- ======= Hero Section ======= --> */}
           <Banner />
           {/* <!-- ======= Clients Section ======= --> */}
           <Clients />
           {/* <!-- ======= Offer Section ======= --> */}
           <Offer />
    

        </>
    )
}

export default Home;
