import { Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';
import logo from './../../../images/logo1.png';
const HorizontalLogo = ({ justify, small }) => {
    return (
        <Link as={reactLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Flex align="center" justify={justify ? justify : "center"} fontSize={small ? 18 : 22} className="logo" fontWeight={700} w="100%">
                <Image boxSize={small ? "40px" : "70px"} height="auto" src={logo} />
                <Text color="#ABCDF7" ml={2}>bil</Text>
                <Text color="#4682E0">bytt</Text>
            </Flex>
        </Link>
    );
};

export default HorizontalLogo;