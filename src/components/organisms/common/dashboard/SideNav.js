import { Box, Flex, Show, Link, Badge, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNavLink from '../../../molecules/common/SideNavLink';

const SideNav = () => {
    return (
        <Box w='100%'>
            <Flex direction="column" gap="2">
                {/* <SideNavLink></SideNavLink> */}
                <Link as={NavLink} to="" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="4px" end>
                    <Flex justify="space-between">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fas fa-user"></i></Box> <Show breakpoint='(min-width: 768px)'>Profile</Show>
                        </Box>
                    </Flex>
                </Link>
                <Link as={NavLink} to="/dashboard/listing" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="8px">
                    <Flex justify="space-between" align="center">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fas fa-list-ul"></i></Box> <Show breakpoint='(min-width: 768px)'>Listing</Show>
                        </Box>
                        <Badge fontWeight="600">46</Badge>
                    </Flex>
                </Link>
                <Link as={NavLink} to="/dashboard/proposals" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="8px">
                    <Flex justify="space-between" align="center">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fa fa-envelope"></i></Box> <Show breakpoint='(min-width: 768px)'>Offers Received</Show>
                        </Box>
                        <Badge fontWeight="600">4</Badge>
                    </Flex>
                </Link>
                <Link as={NavLink} to="/dashboard/message" _hover={{ textDecoration: 'none' }} fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="8px">
                    <Flex justify="space-between" align="center">
                        <Box as="div">
                            <Box as="span" mr={2}><i className="fas fa-comments"></i></Box> <Show breakpoint='(min-width: 768px)'>My Messages</Show>
                        </Box>
                        <Badge fontWeight="600">10</Badge>
                    </Flex>
                </Link>
            </Flex>
        </Box>
    );
};

export default SideNav;
