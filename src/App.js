import React from 'react';
import {
    ChakraProvider,
} from '@chakra-ui/react';
import Header from './Backend/Partials/Header';
import theme from './Styles/theme';
import { Route, Routes } from 'react-router-dom';
import Home from './Backend/Pages/Home';
import "./Styles/App.css"
import Profile from './Backend/Pages/Profile';
import Listing from './Backend/Pages/Listing';
import Dashboard from './Backend/Pages/Dashboard';
import Proposals from './Backend/Pages/Proposals';
import MyMessages from './Backend/Pages/MyMessages';
import SingleChatbox from './Backend/Pages/SingleChatbox';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Routes>
                    <Route path='/' element={<Dashboard></Dashboard>}></Route>

                    <Route path='/dashboard' element={<Dashboard></Dashboard>}>
                        <Route path='/dashboard/' element={<Profile></Profile>}></Route>
                        <Route path='listing' element={<Listing></Listing>}></Route>
                        <Route path='proposals' element={<Proposals></Proposals>}></Route>
                        <Route path='message' element={<MyMessages></MyMessages>}>
                            <Route path=':userName' element={<SingleChatbox></SingleChatbox>}></Route>
                        </Route>
                    </Route>

                </Routes>

            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
