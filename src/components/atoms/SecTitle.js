import { Heading } from '@chakra-ui/react';
import React from 'react';

const SecTitle = ({ children, textAlign, mb }) => {
    return (
        <Heading textAlign={textAlign} mb={mb} fontSize={42}>{children}</Heading>
    );
};

export default SecTitle;