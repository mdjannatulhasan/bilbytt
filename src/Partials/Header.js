import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';
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
import logo from './../images/logo.png'
const Header = () => {
    return (
        <ChakraProvider>
            <Container maxW="1450px">
                <Flex align="center" mt={2} bg='#ffffff' p={3}>
                    <Link as={NavLink} to="/"><Image boxSize="80px" height="auto" src={logo} /></Link>
                    <Flex justify="space-between" align="center" w='100%' ml={4}>
                        <Hide below='md'>
                            <Flex gap="3">
                                <Link fontSize={18} as={NavLink} to="/dashboard" _hover={{ textDecoration: 'none', color: '#5890ED', }} fontWeight="500" _activeLink={{ color: '#5890ED' }}>
                                    Jobber
                                </Link>
                                <Link fontSize={18} as={NavLink} to="/message" _hover={{ textDecoration: 'none', color: '#5890ED', }} fontWeight="500" _activeLink={{ color: '#5890ED' }}>
                                    Meldingers
                                </Link>
                            </Flex>
                        </Hide>
                        <Show breakpoint='(max-width: 768px)'>
                            <Menu>
                                <MenuButton as={Button}>
                                    <HamburgerIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem><Link _hover={{ textDecoration: 'none', color: 'blue', }} fontWeight="500">
                                        Jobber
                                    </Link></MenuItem>
                                    <MenuItem><Link _hover={{ textDecoration: 'none', color: 'blue', }} fontWeight="500">
                                        Meldingers
                                    </Link></MenuItem>
                                </MenuList>
                            </Menu>
                        </Show>
                        <Box as="div">
                            <Link as={NavLink} to="" _hover={{ textDecoration: 'none' }} fontWeight="500" end>
                                <Box as="span" fontSize={22} lineHeight='0'><BellIcon /></Box>
                                <Box as='span' px={2} py={1} bg="gray.300" fontSize={13} fontWeight="700">12</Box>
                            </Link>
                            <Link as={NavLink} to="" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blue.500" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4} end>
                                Admin Name <Box as="span" ml={1}><i className="fas fa-angle-down"></i></Box>
                            </Link>
                        </Box>
                    </Flex>
                </Flex>
            </Container>
        </ChakraProvider>
    );
};

export default Header;
