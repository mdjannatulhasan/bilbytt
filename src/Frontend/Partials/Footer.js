import { Box, Container } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box as='footer' pt={12} pb={8} bg="#F2F6FE">
            <Container maxW='container.xl'>
                Footer goes here
            </Container>
        </Box>
    );
};

export default Footer;