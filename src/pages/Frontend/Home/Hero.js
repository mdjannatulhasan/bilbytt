import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import heroImg from './../../../images/hero-img.png'
const Hero = () => {
    return (
        <Box as='section' bg='#F2F6FE'>
            <Container maxW="container.xl">
                <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }} py={20} pb={28} alignItems='center' gap={12}>
                    <GridItem>
                        <Heading as="h1" fontSize={{ sm: '36', md: '36', lg: '56' }}>
                            Vurderer du å bytte bil?
                        </Heading>
                        <Heading as="h2" my={4} fontSize={{ sm: '26', lg: '36' }} fontWeight={400}>
                            La forhandlere konkurrere om innbyttebilen din!
                        </Heading>
                        <Text fontSize={19}>Bilbytt samarbeider med en rekke bilforhandlere og samler inn de beste innbyttetilbudene.
                            Du velger det tilbudet som passer deg best. </Text>
                        <HStack mt={8} spacing={5}>
                            <Button bg='brand.500' height='auto' border='1px solid' borderColor='brand.500' borderRadius={500} py={3} px={8} fontSize={18} color='white' _hover={{ color: 'brand.500', bg: 'transparent' }}>Få tilbud på innbytte
                            </Button>
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Flex justify={{ lg: 'flex-end' }}>
                            <Box position='relative'>
                                <Image maxHeight='550px' zIndex={1} position='relative' borderRadius={16} src={heroImg}></Image>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;