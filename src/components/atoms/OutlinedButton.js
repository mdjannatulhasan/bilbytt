import { Button, Link } from '@chakra-ui/react';
import React from 'react';

const OutlinedButton = ({ children, url }) => {
    return (
        <Button as={Link} variant='outline' to={url} borderColor='brand.500' height='auto' borderRadius={500} py={3} px={8} fontSize={18} color='brand.500' _hover={{ color: 'white', bg: 'brand.500', textDecoration: 'none' }}>{children}</Button>
    );
};

export default OutlinedButton;