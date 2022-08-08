import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Button, Checkbox, Flex, Grid, GridItem, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import CustomCheckbox from '../../components/organisms/listings/CustomCheckbox';
import FavouriteIcon from '../../components/atoms/FavouriteIcon';
import ModalNew from '../../components/organisms/listings/ModalNew';

const Listing = () => {
    const [page, setPage] = useState(1)
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const data1 = { tile: "Title 1", body: "New Text" };
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
    if (isLoading2 && carBrandLoading) {
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
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<SearchIcon color='gray.400' />}
                                    />
                                    <Input type='tel' placeholder='Search in car' />
                                </InputGroup>
                                <Stack spacing={1} mt={3}>
                                    <Heading as={'h4'} fontSize={18}>Brands</Heading>
                                    {
                                        carBrandNames?.data?.brandList.map((brand) =>
                                            <CustomCheckbox textInput={brand.brand} models={brand?.models} />
                                        )
                                    }

                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </GridItem>
                <GridItem colSpan={{ lg: 7 }}>
                    <Grid templateColumns={{ lg: "repeat(2, 1fr)" }} gap={4}>
                        {
                            dataCar?.data.map((data) =>
                                <GridItem bg="#ffffff" position='relative' borderRadius={5} overflow="inherit">
                                    {data.recommended && <p class="ribbon">
                                        <Box as="span" className="text" fontSize={14}><strong class="bold">Recommended</strong></Box>
                                    </p>}
                                    <FavouriteIcon />
                                    <Box as={Flex} colSpan={2} gap={3} flexDirection={{ sm: "column", lg: 'row' }} justifyContent={{ lg: "flex-end" }} onClick={() => modalTrigger(data)} cursor="pointer">
                                        <Image objectFit="cover" borderTopRadius={5} boxSize="100%" height="200px" src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80' />
                                    </Box>
                                    <Box fontWeight={500} px={3} py={2} mt={2} onClick={() => modalTrigger(data)} cursor="pointer" >
                                        <VStack spacing={1} align="flex-start">
                                            <Badge fontSize={11}>{data?.location?.zip} {data?.location?.state}</Badge>
                                            <Text textTransform="capitalize">{data.title}</Text>
                                        </VStack>
                                        <HStack justify="space-between" mt={2}>
                                            <Text><i class="far fa-calendar-alt"></i> {data?.year}</Text>
                                            <Text><i class="fas fa-road"></i> {data?.totalTraveled}</Text>
                                            <Text><i class="fas fa-dollar-sign"></i> {data?.price}</Text>
                                        </HStack>
                                    </Box>

                                </GridItem>
                            )
                        }
                    </Grid>
                </GridItem>
                <GridItem colSpan={3} display={{ sm: 'none', lg: 'block' }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.400' />}
                        />
                        <Input type='tel' placeholder='Search in car' />
                    </InputGroup>
                    <Stack spacing={1} mt={3}>
                        <Heading as={'h4'} fontSize={18}>Brands</Heading>
                        {
                            carBrandNames?.data?.brandList.map((brand) =>
                                <CustomCheckbox textInput={brand.brand} models={brand?.models} />
                            )
                        }

                    </Stack>

                </GridItem>

            </Grid>
            <HStack gap={4} m={2}>
                <Button
                    onClick={() => setPage(page => Math.max(page - 1, 0))}
                    disabled={page === 1}

                >
                    Previous Page
                </Button>
                <span>Current Page: {page}</span>
                <Button
                    onClick={() => {
                        if (!isPreviousData && dataCar?.data.length) {
                            setPage(page => page + 1)
                        }
                    }}
                    disabled={page === dataCar?.data.length}
                >
                    Next Page
                </Button>
                {isFetching ? <span> Loading...</span> : null}
            </HStack>
            <ModalNew onOpen={onOpen} data={dataTemp} onClose={onClose} isOpen={isOpen}></ModalNew>
        </Box>
    );
};

export default Listing;

/*
/components
    /common
    /listings
        /molecules
        /organisms
    /profile
        /molecules
        /organisms
/hooks
/pages
    /dashboard/listing.ts
    index.ts
/utils
App.js
index.js
yee-zbnh-csp */