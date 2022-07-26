import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Button,
    ChakraProvider,
    Container,
    Flex,
    Hide,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Show,
} from '@chakra-ui/react';
import React from 'react';

const Header = () => {
    return (
        <ChakraProvider>
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Image boxSize="100px" height="auto" src="images/logo.png" />
                    <Hide below='md'>
                        <Flex gap="2">
                            <Link _hover={{ textDecoration: 'none', color: 'blue', }} fontWeight="500">
                                Jobber
                            </Link>
                            <Link _hover={{ textDecoration: 'none', color: 'blue', }} fontWeight="500">
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
                </Flex>
            </Container>
        </ChakraProvider>
    );
};

export default Header;
