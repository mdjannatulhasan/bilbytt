import React from 'react';
import {
    ChakraProvider,
} from '@chakra-ui/react';
import theme from './Styles/theme';
import { Route, Routes } from 'react-router-dom';
import "./Styles/App.css"
import Profile from './pages/dashboard/Profile';
import Listing from './pages/dashboard/Listing';
import Dashboard from './pages/dashboard/Index';
import Proposals from './pages/dashboard/Proposals';
import MyMessages from './pages/dashboard/message/Index';
import SingleChatbox from './pages/dashboard/message/SingleChatbox';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Frontend/Home/Home';
function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>

                    <Route path='/dashboard' element={<Dashboard></Dashboard>}>
                        <Route path='/dashboard/' element={<Profile></Profile>}></Route>
                        <Route path='listing' element={<Listing></Listing>}></Route>
                        <Route path='proposals' element={<Proposals></Proposals>}></Route>
                        <Route path='/dashboard/message' element={<MyMessages></MyMessages>}>
                            <Route path='/dashboard/message/:userName' element={<SingleChatbox></SingleChatbox>}></Route>
                        </Route>
                    </Route>

                </Routes>

            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
