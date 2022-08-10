import { Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavLinkItem = ({ url, name, icon }) => {
    return (
        <Link fontSize={18} as={NavLink} to={url} _hover={{ textDecoration: 'none', color: '#5890ED', }} fontWeight="500" _activeLink={{ color: '#5890ED' }}>
            {icon && <i className={icon}></i>} {name}
        </Link>
    );
};

export default HeaderNavLinkItem;