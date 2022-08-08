import React from 'react';
import Header from '../../../components/organisms/common/frontend/Header';
import Footer from '../../../components/organisms/common/frontend/Footer';
import Hero from '../../../components/organisms/Landing/Hero';
import ServiceSection from '../../../components/organisms/Landing/ServiceSection';
import SectionWithLeftSIdeImage from '../../../components/organisms/Landing/SectionWithLeftSIdeImage';
import FourthSection from '../../../components/organisms/Landing/FourthSection';
import SectionWithRightSIdeImage from '../../../components/organisms/Landing/SectionWithRightSIdeImage';
import LastSection from '../../../components/organisms/Landing/LastSection';

const Home = () => {
    return (
        <>
            <Header bgColor='#F2F6FE' />
            <Hero></Hero>
            <ServiceSection></ServiceSection>
            <SectionWithLeftSIdeImage></SectionWithLeftSIdeImage>
            <FourthSection></FourthSection>
            <SectionWithRightSIdeImage></SectionWithRightSIdeImage>
            <LastSection></LastSection>
            <Footer></Footer>
        </>
    );
};

export default Home;