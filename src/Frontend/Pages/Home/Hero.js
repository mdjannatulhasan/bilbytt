import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
    return (
        <Box as='section' bg='#F3F2F8'>
            <Container maxW="container.xl">
                <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }} py={16} alignItems='center' gap={5}>
                    <GridItem>
                        <Heading as="h1" fontSize={{ sm: '36', md: '36', lg: '56' }}>
                            Vi hjelper deg med ditt neste billån
                        </Heading>
                        <HStack mt={6} spacing={5}>
                            <Button bg='brand.500' height='auto' border='1px solid' borderColor='brand.500' borderRadius={500} py={3} px={8} fontSize={18} color='white' _hover={{ color: 'brand.500', bg: 'transparent' }}>Søk Billån</Button>
                            <Button variant='outline' borderColor='brand.500' height='auto' borderRadius={500} py={3} px={8} fontSize={18} color='brand.500' _hover={{ color: 'white', bg: 'brand.500' }}>Se andre lån</Button>
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Flex justify={{ lg: 'flex-end' }}>
                            <Box position='relative' mb={{ lg: '-100px' }} _before={{ bg: 'blue.100', position: 'absolute', width: '100%', height: '100%', content: '""', top: '16px', left: '16px', zIndex: "0", borderRadius: 16, }}>
                                <Image maxHeight='550px' zIndex={5} position='relative' borderRadius={16} src='https://brage.no/media/1971/glade-barn-i-baksete-med-ipad.jpg?anchor=center&mode=crop&width=496&height=693&rnd=132802537500000000'></Image>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;