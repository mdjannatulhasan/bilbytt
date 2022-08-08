import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import {
    Box,
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
    IconButton,
    HStack
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../../../images/logo.png'
const Header = ({ bgColor }) => {
    return (
        <Box as='section' bg={bgColor}>
            <Container maxW="container.xl">
                <Flex align="center" py='2'>
                    <Flex justify="space-between" align="center" w='100%' ml={4} zIndex={10}>
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
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList>
                                    <MenuItem icon={<AddIcon />} command='⌘T'>
                                        New Tab
                                    </MenuItem>
                                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                                        New Window
                                    </MenuItem>
                                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                                        Open Closed Tab
                                    </MenuItem>
                                    <MenuItem icon={<EditIcon />} command='⌘O'>
                                        Open File...
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Show>
                        <Link as={NavLink} to="/"><Image boxSize="80px" height="auto" src={logo} /></Link>
                        <HStack spacing={5}>
                            <Link fontSize={18} as={NavLink} to="/message" _hover={{ textDecoration: 'none', color: '#5890ED', }} fontWeight="500" _activeLink={{ color: '#5890ED' }}>
                                <i className='fa fa-user'></i> <Box as="span" ml={2}>Login</Box>
                            </Link>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList py={2} px={3}>
                                    <Link as={NavLink} to="/dashboard">Dashboard</Link>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
