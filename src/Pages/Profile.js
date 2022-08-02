import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import Select from 'react-select';

const Profile = () => {
    const options = [
        { value: "audi", label: "Audi" },
        { value: "bmw", label: "BMW" },
        { value: "dacia", label: "Dacia" },
    ]
    const gender = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" },
    ]
    return (
        <Box>
            <Grid templateColumns={{ lg: "repeat(9,1fr)" }} gap={2}>
                <GridItem colSpan={6} bg="white" p={5}>
                    <Box>
                        <Heading fontSize={18} fontWeight={600} color='#262b40'>
                            General Information
                        </Heading>
                        <Grid templateColumns="repeat(2, 1fr)" mt={4} gap={3}>
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
                                <Select options={gender} className="selectCustom">
                                </Select>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box mt={5}>
                        <Heading fontSize={18} fontWeight={600} color='#262b40'>
                            Address
                        </Heading>
                        <Grid templateColumns="repeat(2, 1fr)" mt={4} gap={3}>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i class="fas fa-home"></i>}
                                    />
                                    <Input type='tel' placeholder='House/Street No' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i class="fas fa-city"></i>}
                                    />
                                    <Input type='tel' placeholder='City' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i class="fas fa-map"></i>}
                                    />
                                    <Input type='tel' placeholder='State' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i class="fas fa-map-marker-alt"></i>}
                                    />
                                    <Input type='tel' placeholder='Zip' />
                                </InputGroup>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box mt={5}>
                        <Heading fontSize={18} fontWeight={600} color='#262b40'>
                            Brands
                        </Heading>
                        <Grid templateColumns="repeat(1, 1fr)" mt={4} gap={3}>
                            <GridItem>
                                <Select options={options} isMulti className='selectCustom' />
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