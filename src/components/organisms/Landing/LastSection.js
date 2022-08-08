import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import SecTitle from '../../atoms/SecTitle';
import Card from '../../molecules/Landing/LandingCard';
import quoteSvg from './../../../images/quote.svg';

const LastSection = () => {
    return (
        <Box as="section" pb={24} pt={16}>
            <Container maxW='container.xl'>
                <Box textAlign='center' mb={10}>
                    <SecTitle>Kundeerfaringer</SecTitle>
                    <Text fontSize={21} py={4} maxW="600px" mx='auto'>
                        Båtsesongen nærmer seg og mange drømmer om å investere i egen båt, men hva slags båt er egentlig rett for deg?
                    </Text>
                </Box>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }} gap={8}>
                    <GridItem textAlign='center'>
                        <Card imgSrc={quoteSvg}
                            title='MER FOR INNBYTTEBILEN'
                            textItalic='Anbefales! Fikk ufattelig mer for innbyttebilen enn jeg fikk hos lokal forhandelren'
                            name='- Emil Wahl'
                        ></Card>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <Card imgSrc={quoteSvg}
                            title='EN LETTELSE Å KUNNE SLIPPE Å FORHANDLE MED FORHANDLERE'
                            textItalic='Prøvde lenge å forhandle meg til en reell pris for innbyttebilen, fikk bare skambud. Gjennom første budrunde hos Bilbytt, fikk jeg både bilen jeg ønsket meg og ikke minst høyeste budet jeg kunne få for bilen'
                            name='- Sondre Olsen'
                        ></Card>
                    </GridItem>
                    <GridItem textAlign='center'>
                        <Card imgSrc={quoteSvg}
                            title='SMART LØSNING!!'
                            textItalic='Samlet alle forhandlere for meg, slik at jeg kunne velge det tilbudet som passet meg best. Super enkelt!'
                            name='- Hanne Sørensen'
                        ></Card>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default LastSection;