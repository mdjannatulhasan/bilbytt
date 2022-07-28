import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Grid, GridItem, Heading, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Listing = () => {
    return (
        <Box>
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
                <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5}>
                    <Grid templateColumns={{ lg: 'repeat(7,1fr)' }} fontWeight={600}>
                        <GridItem colSpan={5}>
                            <Text>For å lykkes på Mittanbud er det viktig at du</Text>
                            <Box mt={2}><Box as="span">0490 Oslo</Box><Box as="span"></Box></Box>
                        </GridItem>
                        <GridItem as={Flex} colSpan={2} gap={2} flexDirection={{ sm: "column", lg: 'row' }} justifyContent={{ lg: "flex-end" }}>
                            <Box as="span">08.44</Box>
                            <Image objectFit="cover" boxSize="160px" height="170px" src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80' />
                        </GridItem>
                    </Grid>
                </Box>
                <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5}>
                    <Grid templateColumns={{ lg: 'repeat(7,1fr)' }} fontWeight={600}>
                        <GridItem colSpan={5}>
                            <Text>For å lykkes på Mittanbud er det viktig at du</Text>
                            <Box mt={2}><Box as="span">0490 Oslo</Box><Box as="span"></Box></Box>
                            <Badge mt={3} bg="orange.200">Recommended</Badge>
                        </GridItem>
                        <GridItem as={Flex} colSpan={2} gap={2} flexDirection={{ sm: "column", lg: 'row' }} justifyContent={{ lg: "flex-end" }}>
                            <Box as="span">08.44</Box>
                            <Image objectFit="cover" boxSize="160px" height="170px" src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80' />
                        </GridItem>
                    </Grid>
                </Box>
                <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5}>
                    <Grid templateColumns={{ lg: 'repeat(7,1fr)' }} fontWeight={600}>
                        <GridItem colSpan={5}>
                            <Text>For å lykkes på Mittanbud er det viktig at du</Text>
                            <Box mt={2}><Box as="span">0490 Oslo</Box><Box as="span"></Box></Box>
                        </GridItem>
                        <GridItem as={Flex} colSpan={2} gap={2} flexDirection={{ sm: "column", lg: 'row' }} justifyContent={{ lg: "flex-end" }}>
                            <Box as="span">08.44</Box>
                            <Image objectFit="cover" boxSize="160px" height="170px" src='https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
                        </GridItem>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
};

export default Listing;