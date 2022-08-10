import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from './../../../images/logo1.png';
const HorizontalLogo = () => {
    return (
        <Flex align="center" justify="center" fontSize={22} className="logo" fontWeight={700} w="100%">
            <Image boxSize="70px" height="auto" src={logo} />
            <Text color="#ABCDF7" ml={2}>bil</Text>
            <Text color="#4682E0">bytt</Text>
        </Flex>
    );
};

export default HorizontalLogo;