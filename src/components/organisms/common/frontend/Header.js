import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Flex,
    Hide,
    Image,
    Menu,
    MenuButton,
    Show,
    Link,
    IconButton,
    HStack
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderMenuListItems from '../../../molecules/Landing/HeaderMenuListItems';
import HeaderNavLinkItem from '../../../molecules/Landing/HeaderNavLinkItem';
import logo from './../../../../images/logo.png'
const Header = ({ bgColor }) => {
    const menuItemsList = [
        { url: '/dashboard', name: 'Dashboard' },
        { url: '/dashboard', name: 'Profile' }
    ]
    const mobileMenuItemsList = [
        { url: '/dashboard', name: 'Jobber' },
        { url: '/dashboard', name: 'Meldingers' },
        { url: '/dashboard', name: 'Dashboard' },
        { url: '/dashboard', name: 'Profile' }
    ]
    return (
        <Box as='section' bg={bgColor}>
            <Container maxW="container.xl">
                <Flex align="center" py='2'>
                    <Flex justify="space-between" align="center" w='100%' ml={4} zIndex={10}>
                        <Hide below='md'>
                            <Flex gap="3">
                                <HeaderNavLinkItem name='Jobber' url='/dashboard' />
                                <HeaderNavLinkItem name='Meldingers' url='/dashboard' />
                            </Flex>
                        </Hide>

                        <Link as={NavLink} to="/"><Image boxSize="80px" height="auto" src={logo} /></Link>
                        <HStack spacing={5}>
                            <HeaderNavLinkItem name='Login' url='/login' icon='fa fa-user' />
                            <Hide below='md'>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<HamburgerIcon />}
                                        variant='outline'
                                    />
                                    <HeaderMenuListItems menuList={menuItemsList} />
                                </Menu>
                            </Hide>
                            <Show breakpoint='(max-width: 768px)'>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<HamburgerIcon />}
                                        variant='outline'
                                    />
                                    <HeaderMenuListItems menuList={mobileMenuItemsList} />
                                </Menu>
                            </Show>
                        </HStack>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
