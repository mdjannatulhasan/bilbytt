import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, Grid, GridItem, Heading, Text, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';

const LastSection = () => {
    return (
        <Box as="section" pb={24} pt={16}>
            <Container maxW='container.xl'>
                <Box textAlign='center' mb={5}>
                    <Heading fontSize={42}>5 tips til deg som drømmer om båt!</Heading>
                    <Text fontSize={21} py={4} maxW="600px" mx='auto'>
                        Båtsesongen nærmer seg og mange drømmer om å investere i egen båt, men hva slags båt er egentlig rett for deg?
                    </Text>
                </Box>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }} gap={6}>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box as='span' fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '55px', height: '55px', position: 'absolute', left: '5px', top: '5px', zIndex: -1, borderRadius: '200' }} color="blue.800"><i class="fas fa-car"></i></Box>
                            <Heading as="h3" fontSize={24}>Velg Brage Finans</Heading>
                            <Text fontSize={18} px={{ lg: 5 }}>Vi sørger for finansiering til din neste bil, båt eller andre kjøretøy. Søk enkelt selv i vår lånekalkulator.</Text>
                            <Link as={reactLink} className='animatedHover' to="" color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }} _after={{ bg: '#2a4365' }}>Les Mer om oss <ArrowForwardIcon /></Link>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box as='span' fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '55px', height: '55px', position: 'absolute', left: '5px', top: '5px', zIndex: -1, borderRadius: '200' }} color="blue.800"><i class="fas fa-car"></i></Box>
                            <Heading as="h3" fontSize={24}>Velg Brage Finans</Heading>
                            <Text fontSize={18} px={{ lg: 5 }}>Vi sørger for finansiering til din neste bil, båt eller andre kjøretøy. Søk enkelt selv i vår lånekalkulator.</Text>
                            <Link as={reactLink} className='animatedHover' to="" color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }} _after={{ bg: '#2a4365' }}>Les Mer om oss <ArrowForwardIcon /></Link>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box as='span' fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '55px', height: '55px', position: 'absolute', left: '5px', top: '5px', zIndex: -1, borderRadius: '200' }} color="blue.800"><i class="fas fa-car"></i></Box>
                            <Heading as="h3" fontSize={24}>Velg Brage Finans</Heading>
                            <Text fontSize={18} px={{ lg: 5 }}>Vi sørger for finansiering til din neste bil, båt eller andre kjøretøy. Søk enkelt selv i vår lånekalkulator.</Text>
                            <Link as={reactLink} className='animatedHover' to="" color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }} _after={{ bg: '#2a4365' }}>Les Mer om oss <ArrowForwardIcon /></Link>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default LastSection;