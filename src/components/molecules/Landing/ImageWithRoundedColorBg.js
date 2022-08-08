import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const ImageWithRoundedColorBg = ({ children, boxSize }) => {
    return (
        <Box mb={3} position='relative' _after={{ bg: 'blue.100', content: '""', width: '75px', height: '75px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800">
            <Image boxSize={boxSize} src={children}></Image>
        </Box>
    );
};

export default ImageWithRoundedColorBg;