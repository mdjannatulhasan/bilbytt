import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../Partials/SideNav';
import theme from '../../Styles/theme';
import Header from '../Partials/Header';

const Dashboard = () => {
    console.log(theme);
    return (
        <Container maxW="container.2xl" mt={2} height="100%">
            <Grid templateColumns="repeat(10, 1fr)" gap={2} height="100%">
                <GridItem colSpan={2} p={3}>
                    <SideNav></SideNav>
                </GridItem>
                <GridItem colSpan={8}>
                    <Header></Header>
                    <Outlet />
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Dashboard;