import { Heading } from '@chakra-ui/react';
import React from 'react';

const CardTitle = ({ children, fontSize, px, fontWeight }) => {
    return (
        // <Heading as='h3' fontSize={fontSize} px={px} fontWeight={fontWeight}>{children}</Heading>
        <Heading as='h3' fontSize={23} px={8} fontWeight={600}>{children}</Heading>
    );
};

export default CardTitle;