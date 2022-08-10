import { BellIcon, ChevronDownIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Hide,
    Menu,
    MenuButton,
    Show,
    Link,
    InputGroup,
    InputLeftElement,
    Input,
    Image,
    Container
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HorizontalLogo from '../../../molecules/dashboard/HorizontalLogo';
import HeaderMenuListItems from '../../../molecules/Landing/HeaderMenuListItems';

const Header = () => {
    const dashboardMenuItemsList = [
        { url: '/dashboard', name: 'Profile' },
        { url: '/dashboard', name: 'My Message' }
    ]
    return (
        <Container maxW='container.custom' bg='#ffffff' w="100%" position='fixed' top='0' zIndex={60} borderBottom='1px solid #e5e7eb'>
            <Flex align="center" p={3} w="100%">
                <Flex justify="space-between" align="center" ml={4} w="100%">
                    <Hide below='md'>
                        <Flex align='center'>
                            <Link as={NavLink} to="/" mr={8} display="block" _hover={{ textDecoration: "none" }}>
                                <HorizontalLogo />
                            </Link>
                            <InputGroup ml={3} borderColor="transparent" display='inline-block'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<SearchIcon color='gray.400' />}
                                />
                                <Input type='tel' placeholder='Search...' />
                            </InputGroup>
                        </Flex>
                    </Hide>
                    <Show breakpoint='(max-width: 768px)'>
                        <Link as={NavLink} to="/" display="block" _hover={{ textDecoration: "none" }}>
                            <HorizontalLogo />
                        </Link>
                    </Show>
                    <Flex w='100%' justify="flex-end" align="center" gap={{ sm: 5, lg: 8 }}>
                        <Menu>
                            <MenuButton fontWeight={600}>
                                <Flex align="center">
                                    <Box as="span" fontSize={22} lineHeight='0'><BellIcon /></Box>
                                    <Box as='span' px={2} py={1} bg="gray.300" fontSize={13} fontWeight="700">12</Box>
                                </Flex>
                            </MenuButton>
                            <HeaderMenuListItems menuList={dashboardMenuItemsList} />
                        </Menu>
                        <Menu>
                            <MenuButton fontWeight={600}>
                                <Flex align="center">
                                    <Image src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' boxSize='40px' objectFit="cover" objectPosition='top' borderRadius={900} mr={2}></Image> <Box as='span' display={{ sm: 'none', lg: 'inline-block' }}>Admin Name <ChevronDownIcon /></Box>
                                    <HamburgerIcon display={{ lg: 'none' }} />

                                </Flex>
                            </MenuButton>
                            <HeaderMenuListItems menuList={dashboardMenuItemsList} />
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Header;
