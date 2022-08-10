import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/organisms/common/dashboard/SideNav';
import DashboardHeader from '../../components/organisms/common/dashboard/DashboardHeader';
import BottomNavbar from '../../components/organisms/common/dashboard/BottomNavbar';

const Index = () => {
    return (
        <>
            <DashboardHeader></DashboardHeader>
            <Container maxW="container.custom" mt={2} height="100%" px={{ lg: 0 }} pb={{ sm: '70px', lg: 0 }}>
                <Flex gap={2} height="100%" mt='83px' align='flex-start'>
                    <Box bg='#ffffff' width='100%' height='88vh' maxW='275px' display={{ base: 'none', lg: 'flex' }}>
                        <SideNav></SideNav>
                    </Box>
                    <Box mt={4} ml={2} mr={3}>
                        <Outlet />
                    </Box>
                </Flex>
            </Container>
            <BottomNavbar></BottomNavbar>
        </>
    );
}
export default Index; 