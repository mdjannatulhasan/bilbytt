import React from 'react';
import {
    ChakraProvider,
} from '@chakra-ui/react';
import Header from './Partials/Header';
import theme from './Styles/theme';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import "./Styles/App.css"
import Profile from './Pages/Profile';
import Listing from './Pages/Listing';
import Dashboard from './Pages/Backend/Dashboard';
function App() {
    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}>
                    <Route path='/dashboard/' element={<Profile></Profile>}></Route>
                    <Route path='listing' element={<Listing></Listing>}></Route>
                </Route>
            </Routes>

        </ChakraProvider>
    );
}

export default App;
