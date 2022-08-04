import { Box, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyMessages = () => {
    return (
        <Container maxW="container.2xl" mt={2} height="100%">
            <Grid templateColumns="repeat(8, 1fr)" gap={2} height="100%">
                <GridItem colSpan={2} bg="#ffffff" p={3}>
                    <Box as={NavLink} to="/dashboard/message/imranKhan" display="block" borderBottom="1px solid" borderColor="gray.300" px={4} py={3} _activeLink={{ backgroundColor: "gray.100" }}>
                        <Flex align="center" justify="space-between">
                            <Flex gap={3} align="center">
                                <Box display="inline-block" borderRadius="500px" minW='50px'>
                                    <Image boxSize="50px" borderRadius="500px" objectFit='cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1659094054~exp=1659094654~hmac=facebe00405e9f59aafd9bc564ff23dcf553431497a7445daf063a05ebfa3f15" />
                                </Box>
                                <Box>
                                    <Text fontSize={20} fontWeight={600}>Imran Khan</Text>
                                    <Text fontSize={14} color="gray.500">Some latest text will be shown here</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box as={NavLink} to="/dashboard/message/armanKhan" borderBottom="1px solid" borderColor="transparent" px={4} py={3} display="block" _activeLink={{ backgroundColor: "gray.100" }}>
                        <Flex align="center" justify="space-between">
                            <Flex gap={3} align="center">
                                <Box display="inline-block" borderRadius="500px" minW='50px'>
                                    <Image boxSize="50px" borderRadius="500px" src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?w=1060&t=st=1659097480~exp=1659098080~hmac=2528a92a54a940a29551590e990ad5e62f23ba980ea4fd2326d1020dc1e61ffb" /></Box>
                                <Box>
                                    <Text fontSize={20} fontWeight={600}>Arman Khan</Text>
                                    <Text fontSize={14} color="gray.500">Some latest text will be shown here</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem colSpan={6} bg="#ffffff">
                    <Outlet />
                </GridItem>
            </Grid>
        </Container>
    );
};

export default MyMessages;