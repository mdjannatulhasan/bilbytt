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
    Link,
    Badge
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <ChakraProvider>
            <Box>
                <Flex direction="column" gap="2">
                    <Link as={NavLink} to="" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4} end>
                        <Flex justify="space-between">
                            <Box as="div">
                                <Box as="span" mr={2}><i className="fas fa-user"></i></Box> <Show breakpoint='(min-width: 768px)'>Profile</Show>
                            </Box>
                        </Flex>
                    </Link>
                    <Link as={NavLink} to="/dashboard/listing" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4}>
                        <Flex justify="space-between" align="center">
                            <Box as="div">
                                <Box as="span" mr={2}><i className="fas fa-list-ul"></i></Box> <Show breakpoint='(min-width: 768px)'>Listing</Show>
                            </Box>
                            <Badge fontWeight="600">46</Badge>
                        </Flex>
                    </Link>
                    <Link as={NavLink} to="/dashboard/offers" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4}>
                        <Flex justify="space-between" align="center">
                            <Box as="div">
                                <Box as="span" mr={2}><i className="fa fa-envelope"></i></Box> <Show breakpoint='(min-width: 768px)'>Offers Received</Show>
                            </Box>
                            <Badge fontWeight="600">4</Badge>
                        </Flex>
                    </Link>
                    <Link as={NavLink} to="/dashboard/message" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4}>
                        <Flex justify="space-between" align="center">
                            <Box as="div">
                                <Box as="span" mr={2}><i className="fas fa-comments"></i></Box> <Show breakpoint='(min-width: 768px)'>My Messages</Show>
                            </Box>
                            <Badge fontWeight="600">10</Badge>
                        </Flex>
                    </Link>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default SideNav;
