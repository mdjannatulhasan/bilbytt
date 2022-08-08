import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, Grid, GridItem, Heading, Text, VStack, Link, Image } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';
import quoteSvg from './../../../images/quote.svg';

const LastSection = () => {
    return (
        <Box as="section" pb={24} pt={16}>
            <Container maxW='container.xl'>
                <Box textAlign='center' mb={10}>
                    <Heading fontSize={42}>Kundeerfaringer</Heading>
                    <Text fontSize={21} py={4} maxW="600px" mx='auto'>
                        Båtsesongen nærmer seg og mange drømmer om å investere i egen båt, men hva slags båt er egentlig rett for deg?
                    </Text>
                </Box>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }} gap={8}>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box mb={3} fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '75px', height: '75px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image boxSize='70px' src={quoteSvg}></Image></Box>
                            <Heading as="h3" fontSize={23} px={8} fontWeight={600}>MER FOR INNBYTTEBILEN</Heading>
                            <Text fontSize={18} px={{ lg: 5 }} fontStyle='italic'>“Anbefales! Fikk ufattelig mer for innbyttebilen enn jeg fikk hos lokal forhandelren”</Text>
                            <Text px={{ lg: 5 }} fontStyle='italic' fontWeight={500}>- Emil Wahl</Text>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box mb={3} fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '75px', height: '75px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image boxSize='70px' src={quoteSvg}></Image></Box>
                            <Heading as="h3" fontSize={23} px={8} fontWeight={600}>EN LETTELSE Å KUNNE SLIPPE Å FORHANDLE MED FORHANDLERE</Heading>
                            <Text fontSize={18} px={{ lg: 5 }} fontStyle='italic'>“Prøvde lenge å forhandle meg til en reell pris for innbyttebilen, fikk bare skambud. Gjennom første budrunde hos Bilbytt, fikk jeg både bilen jeg ønsket meg og ikke minst høyeste budet jeg kunne få for bilen"</Text>
                            <Text px={{ lg: 5 }} fontStyle='italic' fontWeight={500}>- Sondre Olsen</Text>
                        </VStack>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <VStack spacing={5}>
                            <Box mb={3} fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '75px', height: '75px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image boxSize='70px' src={quoteSvg}></Image></Box>
                            <Heading as="h3" fontSize={23} px={8} fontWeight={600}>SMART LØSNING!!</Heading>
                            <Text fontSize={18} px={{ lg: 5 }} fontStyle='italic'>“Samlet alle forhandlere for meg, slik at jeg kunne velge det tilbudet som passet meg best. Super enkelt!”</Text>
                            <Text px={{ lg: 5 }} fontStyle='italic' fontWeight={500}>- Hanne Sørensen</Text>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default LastSection;