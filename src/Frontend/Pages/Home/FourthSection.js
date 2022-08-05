import { ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Container, Grid, GridItem, Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';
import logo from './../../../images/logoL.png';

const FourthSection = () => {
    return (
        <Box as='section' py={16} bg="#F2F6FE">
            <Container maxW='container.xl'>
                <Heading fontSize={42} textAlign='center' mb={10}>Hvorfor innbytte gjennom bilbytt?</Heading>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }} gap={6} alignItems="center">
                    <GridItem textAlign='center' bg='rgba(255, 255, 255, 0.66)' px={6} py={10} borderRadius={20}>
                        <VStack spacing={5} alignItems='flex-start'>
                            <Box textAlign='left'>
                                <Text fontSize={20} fontWeight={600}>Innbytte</Text>
                                <Text pb={5}>Få mest mulig for bilen din ved innbytte</Text>
                            </Box>

                            <VStack spacing={4} alignItems='flex-start'>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Flere bilforhandlere konkurrerer om deg</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Konkurransedyktig tilbud</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Innbytte i løpet av 1 - 2 virkedager</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Du har ingen reklamasjonsplikt</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Vi ordner alt for deg</Box>
                            </VStack>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center' bg='white' px={6} py={10} borderRadius={20}>
                        <VStack spacing={3}>
                            <Box fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '85px', height: '85px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image height='80px' src={logo}></Image></Box>
                            <Text pb={5} fontSize={18}>Få mest mulig for bilen din ved innbytte

                            </Text>
                            <VStack spacing={4} alignItems='flex-start' fontSize={17} fontWeight={600}>
                                <Box><CheckCircleIcon color='brand.500' mr={2} /> Flere bilforhandlere konkurrerer om deg</Box>
                                <Box><CheckCircleIcon color='brand.500' mr={2} /> Konkurransedyktig tilbud</Box>
                                <Box><CheckCircleIcon color='brand.500' mr={2} /> Innbytte i løpet av 1 - 2 virkedager</Box>
                                <Box><CheckCircleIcon color='brand.500' mr={2} /> Du har ingen reklamasjonsplikt</Box>
                                <Box><CheckCircleIcon color='brand.500' mr={2} /> Vi ordner alt for deg</Box>
                            </VStack>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center' bg='rgba(255, 255, 255, 0.66)' px={6} py={10} borderRadius={20}>
                        <VStack spacing={5} alignItems='flex-start'>
                            <Box textAlign='left'>
                                <Text fontSize={20} fontWeight={600}>Selge selv</Text>
                                <Text pb={5}>for å bytte til en annen bil</Text>
                            </Box>

                            <VStack spacing={4} alignItems='flex-start'>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Flere bilforhandlere konkurrerer om deg</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Konkurransedyktig tilbud</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Innbytte i løpet av 1 - 2 virkedager</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Du har ingen reklamasjonsplikt</Box>
                                <Box><CheckCircleIcon color='brand.200' mr={2} /> Vi ordner alt for deg</Box>
                            </VStack>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default FourthSection;