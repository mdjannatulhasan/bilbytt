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
    Image
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <ChakraProvider>
            <Flex align="center" mb={2} p={3} w="100%">
                <Flex justify="space-between" align="center" ml={4} w="100%">
                    <Hide below='md'>
                        <InputGroup borderColor="transparent">
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.400' />}
                            />
                            <Input type='tel' placeholder='Search...' />
                        </InputGroup>
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
                    <Flex w='100%' justify="flex-end" align="center" gap={8}>
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
                                    <Image src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' boxSize='40px' objectFit="cover" objectPosition='top' borderRadius={900} mr={2}></Image> Admin Name <ChevronDownIcon />
                                </Flex>
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={NavLink} to="/" _hover={{ textDecoration: 'none' }} fontWeight="500" color="gray.600" _activeLink={{ backgroundColor: '#5890ED', color: '#ffffff' }} py={2} px={4} end>Download</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
};

export default Header;
