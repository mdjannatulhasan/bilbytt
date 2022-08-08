import { Box, Button, Container, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import logo from './../../../../images/logoL.png';

const Footer = () => {
    return (
        <Box as='footer' pt={12} pb={8} bg="#F2F6FE">
            <Container maxW='container.xl'>
                <Grid templateColumns={{ lg: 'repeat(3, 1fr)' }}>
                    <GridItem>
                        <Flex direction='column' alignItems='center' maxW='100px'>
                            <Image height='80px' src={logo}></Image>
                            <Button mt={3} bg='brand.500' height='auto' border='1px solid' borderColor='brand.500' borderRadius={500} py={3} px={8} fontSize={18} color='white' _hover={{ color: 'brand.500', bg: 'transparent' }}>Få tilbud
                            </Button>
                        </Flex>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;