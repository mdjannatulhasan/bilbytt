import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';

const TextLink = ({ children, url }) => {
    return (
        <Link as={reactLink} color='brand.500' to={url}>{children}</Link>
    );
};

export default TextLink;