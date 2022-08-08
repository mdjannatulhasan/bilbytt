import { BellIcon, ChevronDownIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    ChakraProvider,
    Flex,
    Hide,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Show,
    Link,
    InputGroup,
    InputLeftElement,
    Input,
    Image,
    Text,
    Container
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../../../images/logo1.png';

const Header = () => {
    return (
        <Container maxW='container.custom' bg='#ffffff' w="100%" position='fixed' top='0' zIndex={60} borderBottom='1px solid #e5e7eb'>
            <Flex align="center" p={3} w="100%">
                <Flex justify="space-between" align="center" ml={4} w="100%">
                    <Hide below='md'>
                        <Flex align='center'>
                            <Link as={NavLink} to="/" mr={8} display="block" _hover={{ textDecoration: "none" }}>
                                <Flex align="center" justify="center" fontSize={22} className="logo" fontWeight={700} w="100%">
                                    <Image boxSize="70px" height="auto" src={logo} />
                                    <Text color="#ABCDF7" ml={2}>bil</Text>
                                    <Text color="#4682E0">bytt</Text>
                                </Flex>
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
                            <Flex align="center" justify="center" fontSize={22} className="logo" fontWeight={700} w="100%">
                                <Image boxSize="60px" height="auto" src={logo} />
                                <Text color="#ABCDF7" ml={2}>bil</Text>
                                <Text color="#4682E0">bytt</Text>
                            </Flex>
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
                            <MenuList>
                                <MenuItem as={NavLink} to="/" _hover={{ textDecoration: 'none' }} fontWeight="500" color="gray.600" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4} end>Notification 1</MenuItem>
                                <MenuItem as={NavLink} to="/" _hover={{ textDecoration: 'none' }} fontWeight="500" color="gray.600" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4} end>Notification 2</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton fontWeight={600}>
                                <Flex align="center">
                                    <Image src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' boxSize='40px' objectFit="cover" objectPosition='top' borderRadius={900} mr={2}></Image> <Box as='span' display={{ sm: 'none', lg: 'inline-block' }}>Admin Name <ChevronDownIcon /></Box>
                                    <HamburgerIcon display={{ lg: 'none' }} />

                                </Flex>
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={NavLink} to="/" _hover={{ textDecoration: 'none' }} fontWeight="500" color="gray.600" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4} end>Download</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Header;
