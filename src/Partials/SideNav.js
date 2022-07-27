import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    ChakraProvider,
    Container,
    Flex,
    Hide,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Show,
    Link
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <ChakraProvider>
            <Box>
                <Flex direction="column" gap="2">
                    <Link as={NavLink} to="" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4} end>
                        <Box as="span" mr={2}><i class="fas fa-user"></i></Box> Profile
                    </Link>
                    <Link as={NavLink} to="/dashboard/listing" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4}>
                        <Box as="span" mr={2}><i class="fas fa-list-ul"></i></Box> Listing
                    </Link>
                    <Link as={NavLink} to="/dashboard/offers" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4}>
                        <Box as="span" mr={2}><i class="fa fa-envelope"></i></Box> Offers Received
                    </Link>
                    <Link as={NavLink} to="/dashboard/message" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4}>
                        <Box as="span" mr={2}><i class="fas fa-comments"></i></Box> My Messages
                    </Link>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default SideNav;
