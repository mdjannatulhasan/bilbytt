import { MenuList, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMenuListItems = ({ menuList }) => {
    return (
        <MenuList>
            <Flex direction='column'>
                {menuList.map((menuItem, index) =>
                    <Link key={index} px={3} py={2} as={NavLink} to={menuItem?.url} _hover={{ textDecoration: 'none', background: 'brand.200' }}>{menuItem.name}</Link>
                )}
            </Flex>
        </MenuList>
    );
};

export default HeaderMenuListItems;