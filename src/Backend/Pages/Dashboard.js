import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../Partials/SideNav';
import theme from '../../Styles/theme';
import Header from '../Partials/Header';
import BottomNavbar from '../Partials/BottomNavbar';

const Dashboard = () => {
    console.log(theme);
    return (
        <>
            <Container maxW="container.2xl" mt={2} height="100%" pb={{ sm: '70px', lg: 0 }}>
                <Grid templateColumns={{ lg: "repeat(10, 1fr)" }} gap={2} height="100%">
                    <GridItem colSpan={2} p={3} display={{ sm: 'none', lg: 'flex' }}>
                        <SideNav></SideNav>
                    </GridItem>
                    <GridItem colSpan={8} >
                        <Header></Header>
                        <Outlet />
                    </GridItem>
                </Grid>
            </Container>
            <BottomNavbar></BottomNavbar>
        </>
    );
};

export default Dashboard;