import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, Grid, GridItem, Heading, Text, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';

const ServiceSection = () => {
    return (
        <Box as="section" pb={16} pt={28}>
            <Container maxW='container.xl'>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }}>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box as='span' fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '55px', height: '55px', position: 'absolute', left: '5px', top: '5px', zIndex: -1, borderRadius: '200' }} color="blue.800"><i class="fas fa-car"></i></Box>
                            <Heading as="h3" fontSize={24}>Velg Brage Finans</Heading>
                            <Text fontSize={19} px={{ lg: 5 }}>Vi sørger for finansiering til din neste bil, båt eller andre kjøretøy. Søk enkelt selv i vår lånekalkulator.</Text>
                            <Link as="reactLink" color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }}>Les Mer om oss <ArrowForwardIcon /></Link>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default ServiceSection;