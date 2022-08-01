import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Proposals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const data = { tile: "Title 1", body: "New Text" };
    const [dataTemp, setData] = useState({});
    const modalTrigger = (data) => {
        setData(data);
        onOpen();
    }
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
                <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5}>
                    <Flex align="center" justify="space-between">
                        <Flex gap={3} align="center">
                            <Box display="inline-block" borderRadius="500px" border="6px solid" borderColor="gray.100"><Image boxSize="94px" borderRadius="500px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1659094054~exp=1659094654~hmac=facebe00405e9f59aafd9bc564ff23dcf553431497a7445daf063a05ebfa3f15" /></Box>
                            <Box>
                                <Text fontSize={20} fontWeight={600}>Imran Khan</Text>
                                <Text fontSize={16}>Sent you an offer</Text>
                                <HStack gap={2} mt={2}>
                                    <Badge>Toyota</Badge>
                                    <Badge>Ferrari</Badge>
                                    <Badge>Audi</Badge>
                                </HStack>
                            </Box>
                        </Flex>
                        <Flex gap={2}>
                            <Button background="green.100">See Offer</Button>
                            <Button background="red.100">Reject</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5}>
                    <Flex align="center" justify="space-between">
                        <Flex gap={3} align="center">
                            <Box display="inline-block" borderRadius="500px" border="6px solid" borderColor="gray.100"><Image boxSize="94px" borderRadius="500px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1659094054~exp=1659094654~hmac=facebe00405e9f59aafd9bc564ff23dcf553431497a7445daf063a05ebfa3f15" /></Box>
                            <Box>
                                <Text fontSize={20} fontWeight={600}>Imran Khan</Text>
                                <Text fontSize={16}>Sent you an offer</Text>
                                <HStack gap={2} mt={2}>
                                    <Badge>Toyota</Badge>
                                    <Badge>Ferrari</Badge>
                                    <Badge>Audi</Badge>
                                </HStack>
                            </Box>
                        </Flex>
                        <Flex gap={2}>
                            <Button background="green.100">See Offer</Button>
                            <Button background="red.100">Reject</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5}>
                    <Flex align="center" justify="space-between">
                        <Flex gap={3} align="center">
                            <Box display="inline-block" borderRadius="500px" border="6px solid" borderColor="gray.100"><Image boxSize="94px" borderRadius="500px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1659094054~exp=1659094654~hmac=facebe00405e9f59aafd9bc564ff23dcf553431497a7445daf063a05ebfa3f15" /></Box>
                            <Box>
                                <Text fontSize={20} fontWeight={600}>Imran Khan</Text>
                                <Text fontSize={16}>Sent you an offer</Text>
                                <HStack gap={2} mt={2}>
                                    <Badge>Toyota</Badge>
                                    <Badge>Ferrari</Badge>
                                    <Badge>Audi</Badge>
                                </HStack>
                            </Box>
                        </Flex>
                        <Flex gap={2}>
                            <Button background="green.100">See Offer</Button>
                            <Button background="red.100">Reject</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Box borderBottom="1px solid" borderColor="gray.300" px={4} py={5}>
                    <Flex align="center" justify="space-between">
                        <Flex gap={3} align="center">
                            <Box display="inline-block" borderRadius="500px" border="6px solid" borderColor="gray.100"><Image boxSize="94px" borderRadius="500px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1659094054~exp=1659094654~hmac=facebe00405e9f59aafd9bc564ff23dcf553431497a7445daf063a05ebfa3f15" /></Box>
                            <Box>
                                <Text fontSize={20} fontWeight={600}>Imran Khan</Text>
                                <Text fontSize={16}>Sent you an offer</Text>
                                <HStack gap={2} mt={2}>
                                    <Badge>Toyota</Badge>
                                    <Badge>Ferrari</Badge>
                                    <Badge>Audi</Badge>
                                </HStack>
                            </Box>
                        </Flex>
                        <Flex gap={2}>
                            <Button background="green.100">See Offer</Button>
                            <Button background="red.100">Reject</Button>
                        </Flex>
                    </Flex>
                </Box>

            </Stack>
            {/* <ModalNew onOpen={onOpen} data={dataTemp} onClose={onClose} isOpen={isOpen}></ModalNew> */}
        </Box>
    );
};

export default Proposals;