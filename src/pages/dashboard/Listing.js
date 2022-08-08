import { ChevronDownIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import ModalNew from '../../components/organisms/listings/ModalNew';
import CheckboxList from '../../components/organisms/listings/CheckboxList';
import Card from '../../components/organisms/listings/Card';
import Pagination from '../../components/organisms/listings/Pagination';

const Listing = () => {
    const [page, setPage] = useState(1)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dataTemp, setData] = useState({});
    const modalTrigger = (data) => {
        setData(data);
        onOpen();
    }
    const fetchListing = (page) => {
        return axios.get(`${process.env.REACT_APP_SERVER_URL}/posts?_limit=10&_page=${page}`)
    }
    const { isLoading: isLoading2, data: dataCar, isPreviousData, isFetching } = useQuery(["listings", page], () => fetchListing(page), { keepPreviousData: true });

    const { isLoading: carBrandLoading, data: carBrandNames } = useQuery(["carBrands", page], () => {
        return axios.get('../db.json')
    }
    );
    if (isLoading2 || carBrandLoading) {
        return <h2>Loading</h2>
    }
    return (
        <Box>
            <Flex bg="#ffffff" px={4} py={3} align="center" justify="space-between" wrap="wrap" gap={2}>
                <Box>
                    <Menu isLazy>
                        <MenuButton _hover={{ color: 'blackAlpha.800' }} fontWeight="500" color="blackAlpha.600">1890 nye jobber i alle områder <ChevronDownIcon /></MenuButton>
                        <MenuList>
                            <MenuItem>1890 nye jobber i alle områder</MenuItem>
                            <MenuItem>1190 nye jobber</MenuItem>
                            <MenuItem>1460 alle områder</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', lg: "repeat(10, 1fr)" }} gap={6} mt={4}>
                <GridItem display={{ sm: 'flex', lg: 'none' }} width='100%'>
                    <Accordion allowToggle width='100%'>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <i class="fas fa-sliders-h"></i> <Box as='span' ml={2}>Filters</Box>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <CheckboxList carBrandNames={carBrandNames}></CheckboxList>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </GridItem>
                <GridItem colSpan={{ lg: 7 }}>
                    <Grid templateColumns={{ lg: "repeat(2, 1fr)" }} gap={4}>
                        {
                            dataCar?.data.map((data) =>
                                <Card data={data} modalTrigger={modalTrigger}></Card>
                            )
                        }
                    </Grid>
                </GridItem>
                <GridItem colSpan={3} display={{ sm: 'none', lg: 'block' }}>
                    <CheckboxList carBrandNames={carBrandNames}></CheckboxList>
                </GridItem>
            </Grid>
            <Pagination setPage={setPage} page={page} isPreviousData={isPreviousData} dataCar={dataCar} isFetching={isFetching}></Pagination>
            <ModalNew onOpen={onOpen} data={dataTemp} onClose={onClose} isOpen={isOpen}></ModalNew>
        </Box>
    );
};

export default Listing;
