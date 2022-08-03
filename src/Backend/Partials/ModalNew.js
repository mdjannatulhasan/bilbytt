import { LockIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, GridItem, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Link, Badge } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';

const ModalNew = (props) => {
    const { isOpen, onClose, onOpen, data } = props;

    return (
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Box fontSize={13} fontWeight="500" color="gray.500">
                        #{data.id}
                    </Box>
                    {data.title} {data?.recommended && <Badge bg="#FFD629">Recommended</Badge>}
                    <Flex justify="space-between" fontSize={16} fontWeight="500" color="gray.500">
                        <Box as="span">{data?.location?.zip} {data?.location?.city}, {data?.location?.state} </Box>
                        <Box as="span" ml={2}>{data.createdAt}</Box>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <Tabs>
                        <TabList>
                            <Tab>Beskrivelse</Tab>
                            <Tab isDisabled _disabled={{ color: "gray.600" }}><LockIcon mr={2} /> Knotaktinfo</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Grid gap={2} templateColumns={{ lg: "repeat(6,1fr)" }}>
                                    <GridItem colSpan={4}>
                                        <Text>
                                            {data.body}
                                        </Text>
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <Image objectFit="cover" boxSize="160px" height="170px" src={data?.image} />
                                    </GridItem>
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </ModalBody>

                <ModalFooter>
                    <Flex justify="space-between" align="center" w="100%">
                        <Box fontSize={13} fontWeight="500" color="gray.500">
                            <Link as={reactLink} to="">Rapporter</Link>
                        </Box>
                        <HStack>
                            <Button variant='ghost' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme='blue' >Send Proposal</Button>
                        </HStack>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalNew;