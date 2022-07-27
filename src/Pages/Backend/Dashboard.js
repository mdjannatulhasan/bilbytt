import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../Partials/SideNav';

const Dashboard = () => {
    return (
        <Container maxW="container.xl" mt={2} height="100%">
            <Grid templateColumns="repeat(8, 1fr)" gap={2} height="100%">
                <GridItem colSpan={2} bg="#ffffff" p={3}>
                    <SideNav></SideNav>
                </GridItem>
                <GridItem colSpan={6} bg="#ffffff" p={4}>
                    <Outlet />
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Dashboard;