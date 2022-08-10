import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SideNavLinkGroup from '../../../molecules/common/SideNavLinkGroup';
import SideNavLinkItem from '../../../molecules/dashboard/SideNavLinkItem';

const SideNav = () => {
    const sideNavItems = [
        { url: '', faIconClass: 'fas fa-user', itemName: 'Profile' },
        { url: '/dashboard/listing', faIconClass: 'fas fa-list-ul', itemName: 'Listing', count: '46' },
        { url: '/dashboard/proposals', faIconClass: 'fa fa-envelope', itemName: 'Offers Received', count: '66' },
        { url: '/dashboard/message', faIconClass: 'fas fa-comments', itemName: 'My Messages', count: '36' },
    ]
    return (
        <Box w='100%' maxW='275px' minH='100vh' p={3} borderRight='1px solid #e5e7eb' position='fixed' left={0}>
            <Flex direction="column" gap="2">
                <SideNavLinkGroup
                    groupIconclassName='fas fa-list-ul'
                    groupName='Dashboard'
                    groupItemList={sideNavItems}
                ></SideNavLinkGroup>
                {sideNavItems.map(({ url, faIconClass, itemName, count }, index) =>
                    <SideNavLinkItem key={index}
                        url={url}
                        faIconclassName={faIconClass}
                        itemName={itemName}
                        count={count}
                    ></SideNavLinkItem>
                )}
            </Flex>
        </Box>
    );
};

export default SideNav;
