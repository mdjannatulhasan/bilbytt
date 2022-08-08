import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, Grid, GridItem, Heading, Text, VStack, Link, Image } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';
import registrationImg from './../../../images/registration.png';
import offerSelectImg from './../../../images/select-offer.png';
import exchangeImg from './../../../images/exchange.png';

const ServiceSection = () => {
    return (
        <Box as="section" py={16}>
            <Container maxW='container.xl'>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }} gap={6}>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box mb={3} fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '85px', height: '85px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image boxSize='80px' src={registrationImg}></Image></Box>
                            <Heading as="h3" fontSize={24}>1. REGISTRENING</Heading>
                            <Text fontSize={19} px={{ lg: 5 }}>Registrer bilen din, samt ønske av innbyttebiler. Bilbytt legger frem dine ønsker til våre samarbeidspartnere gjennom en budrunde.</Text>
                            <Link as={reactLink} className='animatedHover' to="" color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }} _after={{ bg: '#2a4365' }}>Les Mer om oss <ArrowForwardIcon /></Link>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box mb={3} fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '85px', height: '85px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image boxSize='80px' src={offerSelectImg}></Image></Box>
                            <Heading as="h3" fontSize={24}>2. VELG TILBUD</Heading>
                            <Text fontSize={19} px={{ lg: 5 }}>Når budrunden er over, kontakter en av våre kunderådgivere deg med de beste tilbudene. Du velger den bilen som passer deg best.</Text>
                            <Link as={reactLink} className='animatedHover' to="" color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }} _after={{ bg: '#2a4365' }}>Les Mer om oss <ArrowForwardIcon /></Link>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box mb={3} fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '85px', height: '85px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image boxSize='80px' src={exchangeImg}></Image></Box>
                            <Heading as="h3" fontSize={24}>1. REGISTRENING</Heading>
                            <Text fontSize={19} px={{ lg: 5 }}>Når du har valgt den innbyttebilen du ønsker å gå for, etablerer vi kontakt mellom deg og forhandleren som vant budrunden. Da er alt klart for å bytte bil.</Text>
                            <Link as={reactLink} className='animatedHover' to="" color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }} _after={{ bg: '#2a4365' }}>Les Mer om oss <ArrowForwardIcon /></Link>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default ServiceSection;