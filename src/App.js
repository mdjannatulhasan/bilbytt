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
import Proposals from './Pages/Backend/Proposals';
import MyMessages from './Pages/Backend/MyMessages';
import SingleChatbox from './Pages/Backend/SingleChatbox';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Header />
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/message' element={<MyMessages></MyMessages>}>
                        <Route path=':userName' element={<SingleChatbox></SingleChatbox>}></Route>
                    </Route>
                    <Route path='/dashboard' element={<Dashboard></Dashboard>}>
                        <Route path='/dashboard/' element={<Profile></Profile>}></Route>
                        <Route path='listing' element={<Listing></Listing>}></Route>
                        <Route path='proposals' element={<Proposals></Proposals>}></Route>
                    </Route>

                </Routes>

            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
