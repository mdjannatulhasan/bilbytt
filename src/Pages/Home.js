import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../Partials/SideNav';

const Home = () => {
    return (
        <Container maxW="container.xl" mt={2}>
            <Grid templateColumns="repeat(8, 1fr)">
                <GridItem colSpan={2} bg="#ffffff" p={3}>
                    <SideNav></SideNav>
                </GridItem>
                <GridItem bg="#ffffff" p={4}>

                    HJ
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Home;