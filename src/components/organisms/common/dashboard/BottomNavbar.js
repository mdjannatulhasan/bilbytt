import { Badge, Box, Container, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <Box p={1} bg='blue.50' position='fixed' bottom={0} width='100%' zIndex={79} display={{ lg: 'none' }}>
            <Container p={0}>
                <Flex justify='space-between'>
                    <Link as={NavLink} to="" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ color: 'brand.500' }} py={1} px={2} borderRadius="4px" end>
                        <Flex justify="space-between">
                            <Box as="div" textAlign='center'>
                                <Box><i className="fas fa-user"></i></Box>
                                <Box>Profile</Box>
                            </Box>
                        </Flex>
                    </Link>
                    <Link as={NavLink} to="/dashboard/listing" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ color: 'brand.500' }} py={1} px={2} borderRadius="8px">
                        <Flex justify="space-between" align="center" textAlign='center'>
                            <Box as="div">
                                <Box><i className="fas fa-list-ul"></i></Box>
                                <Box>Listing</Box>
                            </Box>
                        </Flex>
                    </Link>
                    <Link as={NavLink} to="/dashboard/proposals" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ color: 'brand.500' }} py={1} px={2} borderRadius="8px">
                        <Flex justify="space-between" align="center">
                            <Box as="div" textAlign='center'>
                                <Box><i className="fa fa-envelope"></i></Box>
                                <Box>Offers</Box>
                            </Box>
                        </Flex>
                    </Link>
                    <Link as={NavLink} to="/dashboard/message" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ color: 'brand.500' }} py={1} px={2} borderRadius="8px">
                        <Flex justify="space-between" align="center">
                            <Box as="div" textAlign='center'>
                                <Box><i className="fas fa-comments"></i></Box>
                                <Box>Messages</Box>
                            </Box>
                        </Flex>
                    </Link>
                </Flex>
            </Container>
        </Box>
    );
};

export default BottomNavbar;