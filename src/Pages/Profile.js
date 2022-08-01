import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
    return (
        <Box>
            <Grid templateColumns={{ lg: "repeat(9,1fr)" }} gap={2}>
                <GridItem colSpan={6} bg="white" p={5}>
                    <Box>
                        <Heading fontSize={18} fontWeight={600} color='#262b40'>
                            General Information
                        </Heading>
                        <Grid templateColumns="repeat(2, 1fr)" mt={4} gap={2}>
                            <GridItem colSpan={2}>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i class="fas fa-user"></i>}
                                    />
                                    <Input type='tel' placeholder='Full Name' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i class="fas fa-envelope"></i>}
                                    />
                                    <Input type='tel' placeholder='User Email' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<PhoneIcon />}
                                    />
                                    <Input type='tel' placeholder='Phone number' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <Input type='date' placeholder='' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <Select>
                                    <option>Hello</option>
                                    <option>Hello</option>
                                    <option>Hello</option>
                                </Select>
                            </GridItem>
                        </Grid>
                    </Box>
                </GridItem>
                <GridItem colSpan={3} bg="white">
                    Profile
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Profile;