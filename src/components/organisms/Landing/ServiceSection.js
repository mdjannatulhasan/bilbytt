import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, Grid, GridItem, Heading, Text, VStack, Link, Image } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';
import registrationImg from './../../../images/registration.png';
import offerSelectImg from './../../../images/select-offer.png';
import exchangeImg from './../../../images/exchange.png';
import Card from '../../molecules/Landing/LandingCard';

const ServiceSection = () => {
    return (
        <Box as="section" py={16}>
            <Container maxW='container.xl'>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }} gap={6}>
                    <GridItem textAlign='center'>
                        <Card imgSrc={registrationImg}
                            title='1. REGISTRENING'
                            text='Registrer bilen din, samt ønske av innbyttebiler. Bilbytt legger frem dine ønsker til våre samarbeidspartnere gjennom en budrunde.'
                            link={{ text: 'Les Mer om oss', url: '' }}
                        ></Card>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <Card imgSrc={offerSelectImg}
                            title='2. VELG TILBUD'
                            text='Når budrunden er over, kontakter en av våre kunderådgivere deg med de beste tilbudene. Du velger den bilen som passer deg best.'
                            link={{ text: 'Les Mer om oss', url: '' }}
                        ></Card>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <Card imgSrc={exchangeImg}
                            title='1. REGISTRENING'
                            text='Når du har valgt den innbyttebilen du ønsker å gå for, etablerer vi kontakt mellom deg og forhandleren som vant budrunden. Da er alt klart for å bytte bil.'
                            link={{ text: 'Les Mer om oss', url: '' }}
                        ></Card>
                    </GridItem>
                </Grid>
            </Container>
        </Box >
    );
};

export default ServiceSection;