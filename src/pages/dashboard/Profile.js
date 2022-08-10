import { AttachmentIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Select from 'react-select';

const Profile = () => {
    const options = [
        { value: "audi", label: "Audi" },
        { value: "bmw", label: "BMW" },
        { value: "dacia", label: "Dacia" },
        { value: "dacia", label: "Dacia" },
    ];

    const gender = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" },
    ];
    return (
        <Box>
            <Grid templateColumns={{ lg: "repeat(9,1fr)" }} gap={4}>
                <GridItem colSpan={6} bg="white" p={5} borderRadius={5}>
                    <Box>
                        <Heading fontSize={18} fontWeight={600} color='#262b40'>
                            General Information
                        </Heading>
                        <Grid templateColumns="repeat(2, 1fr)" mt={4} gap={3}>
                            <GridItem colSpan={2}>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i className="fas fa-user"></i>}
                                    />
                                    <Input type='tel' placeholder='Full Name' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i className="fas fa-envelope"></i>}
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
                    <Box mt={7}>
                        <Heading fontSize={18} fontWeight={600} color='#262b40'>
                            Address
                        </Heading>
                        <Grid templateColumns="repeat(2, 1fr)" mt={4} gap={3}>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i className="fas fa-home"></i>}
                                    />
                                    <Input type='tel' placeholder='House/Street No' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i className="fas fa-city"></i>}
                                    />
                                    <Input type='tel' placeholder='City' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i className="fas fa-map"></i>}
                                    />
                                    <Input type='tel' placeholder='State' />
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <InputGroup>
                                    <InputLeftElement color="gray.400"
                                        pointerEvents='none'
                                        children={<i className="fas fa-map-marker-alt"></i>}
                                    />
                                    <Input type='tel' placeholder='Zip' />
                                </InputGroup>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box mt={7}>
                        <Heading fontSize={18} fontWeight={600} color='#262b40'>
                            Brands
                        </Heading>
                        <Grid templateColumns="repeat(1, 1fr)" mt={4} gap={3}>
                            <GridItem>
                                <Select options={options} isMulti className='selectCustom' />
                            </GridItem>
                        </Grid>
                    </Box>
                    <Button bg="brand.400" mt={4}>Save All</Button>
                </GridItem>
                <GridItem colSpan={3} borderRadius={5}>
                    <Box bg="white" pb={8} mb={4}>
                        <Box position="relative">
                            <Image borderTopRadius={5} height="180px" boxSize="100%" objectFit="cover" src='https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-shading-background-abstract-colorful-background-colorful-art-image_22644.jpg'>
                            </Image>
                            <Box position="absolute" top="95px" left="50%" transform="translateX(-50%)">
                                <Image boxSize="150px" objectFit="cover" borderRadius={600} border="5px solid" borderColor="gray.200" src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'>
                                </Image>
                            </Box>
                        </Box>
                        <VStack mt={20} textAlign="center">
                            <Text fontWeight={500} fontSize="24px">Admin</Text>
                            <Text fontSize="18px" fontWeight={500}>test@netmark.no</Text>
                            <Text>Bergen, Norway</Text>
                            <HStack fontSize={22} spacing={3} pt={3}>
                                <i className="fab fa-google"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                            </HStack>
                        </VStack>
                    </Box>
                    <Box bg="white" p={4}>
                        <Flex w="100%" align="center" gap={3}>
                            <Box minW="80px">
                                <Image boxSize="80px" objectFit="cover" borderRadius={4} src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'>
                                </Image>
                            </Box>
                            <InputGroup>
                                <Input display='none' type='file' placeholder='Zip' id='fileUpload' />
                                <label htmlFor="fileUpload">
                                    <Flex _hover={{ cursor: "pointer" }} gap={3} align="center">
                                        <AttachmentIcon fontSize={40} />
                                        <Box>
                                            <Text fontWeight={500} mb={1}>Choose Image</Text>
                                            <Text fontSize={14}>JPG, GIF or PNG. Max size of 800K</Text>
                                        </Box>
                                    </Flex>
                                </label>
                            </InputGroup>
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Profile;