import { Button } from '@chakra-ui/react';
import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <Button bg='brand.500' height='auto' border='1px solid' borderColor='brand.500' borderRadius={500} py={3} px={8} fontSize={18} color='white' _hover={{ color: 'brand.500', bg: 'transparent' }}>{children}
        </Button>
    );
};

export default PrimaryButton;