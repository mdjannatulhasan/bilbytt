import {
    Box,
    Flex,
    Show,
    Link,
    Badge,
    Image,
    Text
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo1.png';

const SideNav = () => {
    return (
        <Box>
            <Link as={NavLink} to="/" mb={5} display="block" _hover={{ textDecoration: "none" }}>
                <Flex align="center" justify="center" fontSize={22} className="logo" fontWeight={700} w="100%">
                    <Image boxSize="70px" height="auto" src={logo} />
                    <Text color="#ABCDF7" ml={2}>bil</Text>
                    <Text color="#4682E0">bytt</Text>
                </Flex>
            </Link>
            <Flex direction="column" gap="2">
                <Link as={NavLink} to="" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="4px" end>
                    <Flex justify="space-between">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fas fa-user"></i></Box> <Show breakpoint='(min-width: 768px)'>Profile</Show>
                        </Box>
                    </Flex>
                </Link>
                <Link as={NavLink} to="/dashboard/listing" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="8px">
                    <Flex justify="space-between" align="center">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fas fa-list-ul"></i></Box> <Show breakpoint='(min-width: 768px)'>Listing</Show>
                        </Box>
                        <Badge fontWeight="600">46</Badge>
                    </Flex>
                </Link>
                <Link as={NavLink} to="/dashboard/proposals" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="8px">
                    <Flex justify="space-between" align="center">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fa fa-envelope"></i></Box> <Show breakpoint='(min-width: 768px)'>Offers Received</Show>
                        </Box>
                        <Badge fontWeight="600">4</Badge>
                    </Flex>
                </Link>
                <Link as={NavLink} to="/message" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="8px">
                    <Flex justify="space-between" align="center">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fas fa-comments"></i></Box> <Show breakpoint='(min-width: 768px)'>My Messages</Show>
                        </Box>
                        <Badge fontWeight="600">10</Badge>
                    </Flex>
                </Link>
            </Flex>
        </Box>
    );
};

export default SideNav;
