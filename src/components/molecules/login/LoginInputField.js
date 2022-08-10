import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

const LoginInputField = ({ icon, placeholder, name, type }) => {
    return (
        <InputGroup borderTopColor='transparent' borderLeftColor='transparent' borderRightColor='transparent' borderRadius={0} w='100'>
            <InputLeftElement color="gray.400"
                pointerEvents='none'
                children={<i className={icon}></i>}
            />
            <Input type={type} placeholder={placeholder} name={name} borderTopColor='transparent' borderLeftColor='transparent' borderRightColor='transparent' _hover={{ borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent' }} borderRadius='0' _focus={{ borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: 'brand.500' }} _focusVisible={{ borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: 'brand.500' }} />
        </InputGroup>
    );
};

export default LoginInputField;