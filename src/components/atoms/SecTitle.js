import { Heading } from '@chakra-ui/react';
import React from 'react';

const SecTitle = ({ children, textAlign, mb, fontWeight }) => {
    return (
        <Heading textAlign={textAlign} mb={mb} fontWeight={fontWeight} fontSize={42}>{children}</Heading>
    );
};

export default SecTitle;