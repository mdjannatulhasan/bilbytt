import { Box, Flex, Show, Link, Badge } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavLinkItem = ({ faIconClass, itemName, url, count }) => {
    return (
        <Link as={NavLink} to={url} _hover={{ textDecoration: 'none' }} display='block' fontWeight="500" color="blackAlpha.700" _activeLink={{ backgroundColor: 'brand.100', color: 'brand.500' }} py={3} px={4} borderRadius="4px" end>
            <Flex justify="space-between" align='center'>
                <Box as="div">
                    <Box as="span" mr={2}><i className={faIconClass}></i></Box> <Show breakpoint='(min-width: 768px)'>{itemName}</Show>
                </Box>
                {count && <Badge fontWeight="600">{count}</Badge>}
            </Flex>
        </Link>
    );
};

export default SideNavLinkItem;