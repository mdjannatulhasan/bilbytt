import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import Header from '../../Partials/Header';
import Hero from './Hero';
import ServiceSection from './ServiceSection';

const Home = () => {
    return (
        <>
            <Header bgColor='#F3F2F8' />
            <Hero></Hero>
            <ServiceSection></ServiceSection>
        </>
    );
};

export default Home;