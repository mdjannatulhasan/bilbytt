import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Flex, Heading, Image, Link, Text, Textarea, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink, useParams } from 'react-router-dom';

const SingleChatbox = () => {
    const { userName } = useParams()
    return (
        <Box>
            <Flex p={3} gap={2} justify="space-between" align="center" borderBottom="1px solid" borderColor="gray.200">
                <Flex gap={2}>
                    <Image boxSize="40px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1659094054~exp=1659094654~hmac=facebe00405e9f59aafd9bc564ff23dcf553431497a7445daf063a05ebfa3f15" />

                    <Box>
                        <Heading as="h4" fontSize={16}>Buy full fresh BMW car</Heading>
                        <Text fontWeight={500} color="gray.500">Imran Khan</Text>
                    </Box>
                </Flex>
                <Link as={ReactLink} color="blue.500" to="">Vis jobben</Link>
            </Flex>
            <Box p={3} pb={4}>
                <Box ml='auto' w="60%" maxW="600px">
                    <Text textAlign="right" fontSize={14} color="#b8bdc2" mr={3}>Profil exemple AS 19 January, 19:33</Text>
                    <Box px={3} py={1} bg="blue.500" borderRadius={10} color="#ffffff">
                        Hello
                    </Box>
                </Box>
                <Box mr='auto' w="60%" maxW="600px">
                    <Text textAlign="left" fontSize={14} color="#b8bdc2" mr={3}>Profil exemple AS 19 January, 19:33</Text>
                    <Box px={3} py={1} bg="gray.300" borderRadius={10}>
                        Hei
                        <br />
                        Jeg velger dere!
                    </Box>
                </Box>
                <Box ml='auto' w="60%" maxW="600px">
                    <Text textAlign="right" fontSize={14} color="#b8bdc2" mr={3}>Profil exemple AS 19 January, 19:33</Text>
                    <Box px={3} py={1} bg="blue.500" borderRadius={10} color="#ffffff">
                        Takk. Det setter jeg pris på!
                    </Box>
                </Box>
                <Box ml='auto' w="60%" maxW="600px" mt={1}>
                    <Text textAlign="right" fontSize={14} color="#b8bdc2" mr={3}>Profil exemple AS 19 January, 19:33</Text>
                    <Box px={3} py={1} bg="blue.500" borderRadius={10} color="#ffffff">
                        Takk. Det setter jeg pris på!
                    </Box>
                </Box>
            </Box>

            <Box borderTop='1px solid' borderColor="gray.300" p={3} pt={4}>
                <Textarea variant="filled" placeholder='Type Here'></Textarea>
                <Box textAlign="right">
                    <ButtonGroup mt={3}>
                        <Button><AttachmentIcon /> Attach Files</Button>
                        <Button>Send</Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Box>
    );
};

export default SingleChatbox;