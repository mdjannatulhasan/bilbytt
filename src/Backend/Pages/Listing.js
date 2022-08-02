import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Grid, GridItem, HStack, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import ModalNew from '../Partials/ModalNew';

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
    const { isLoading, data, isPreviousData, isFetching } = useQuery(["listings", page], () => fetchListing(page), { keepPreviousData: true })
    if (isLoading) {
        return <h2>Loading</h2>
    }
    console.log(data.data)
    return (
        <Box bg="#ffffff">
            <Flex px={4} py={3} align="center" justify="space-between" borderBottom="1px solid" borderColor="gray.300" wrap="wrap" gap={2}>
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
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='#718096' />}
                            h="32px"
                        />
                        <Input h="32px" bg='gray.200' type='text' placeholder='Søk' />
                    </InputGroup>
                </Stack>
            </Flex>
            <Stack>
                {
                    data?.data.map((data) =>
                        <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5} onClick={() => modalTrigger(data)} cursor="pointer">
                            <Grid templateColumns={{ lg: 'repeat(7,1fr)' }} fontWeight={600}>
                                <GridItem colSpan={5}>
                                    <Text textTransform="capitalize">{data.title}</Text>
                                    <Box mt={2}><Box as="span">0490 Oslo</Box><Box as="span"></Box></Box>
                                    {data.recommended && <Badge mt={3} bg="orange.200">Recommended</Badge>}
                                </GridItem>
                                <GridItem as={Flex} colSpan={2} gap={3} flexDirection={{ sm: "column", lg: 'row' }} justifyContent={{ lg: "flex-end" }}>
                                    <Box as="span">08.44</Box>
                                    <Image objectFit="cover" boxSize="160px" height="170px" src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80' />
                                </GridItem>
                            </Grid>

                        </Box>
                    )
                }
            </Stack>
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
                        if (!isPreviousData && data?.data.length) {
                            setPage(page => page + 1)
                        }
                    }}
                    disabled={page === data?.data.length}
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