import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/organisms/common/dashboard/SideNav';
import DashboardHeader from '../../components/organisms/common/dashboard/DashboardHeader';
import BottomNavbar from '../../components/organisms/common/dashboard/BottomNavbar';

const Index = () => {
    return (
        <>
            <Container maxW="container.2xl" mt={2} height="100%" pb={{ sm: '70px', lg: 0 }}>
                <Grid templateColumns={{ lg: "repeat(10, 1fr)" }} gap={2} height="100%">
                    <GridItem colSpan={2} p={3} display={{ sm: 'none', lg: 'flex' }}>
                        <SideNav></SideNav>
                    </GridItem>
                    <GridItem colSpan={8} >
                        <DashboardHeader></DashboardHeader>
                        <Outlet />
                    </GridItem>
                </Grid>
            </Container>
            <BottomNavbar></BottomNavbar>
        </>
    );
}
export default Index;