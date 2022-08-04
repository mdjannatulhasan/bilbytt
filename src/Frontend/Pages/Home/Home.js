import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../Partials/Footer';
import Header from '../../Partials/Header';
import FifthSection from './FifthSection';
import FourthSection from './FourthSection';
import Hero from './Hero';
import LastSection from './LastSection';
import ServiceSection from './ServiceSection';
import ThirdSection from './ThirdSection';

const Home = () => {
    return (
        <>
            <Header bgColor='#F3F2F8' />
            <Hero></Hero>
            <ServiceSection></ServiceSection>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection>
            <FifthSection></FifthSection>
            <LastSection></LastSection>
            <Footer></Footer>
        </>
    );
};

export default Home;