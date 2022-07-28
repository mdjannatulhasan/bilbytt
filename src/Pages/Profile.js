import { Box, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
    return (
        <Box>
            <Flex>
                <Box>
                    <Menu isLazy>
                        <MenuButton>Open menu</MenuButton>
                        <MenuList>
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Box>
    );
};

export default Profile;