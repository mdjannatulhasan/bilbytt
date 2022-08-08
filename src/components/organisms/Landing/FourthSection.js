import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Container, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SecTitle from '../../atoms/SecTitle';
import ListItemWithIcon from '../../molecules/Landing/ListItemWithIcon';
import ListWithImageAtTop from '../../molecules/Landing/ListWithImageAtTop';
import ListWithTitleAtTop from '../../molecules/Landing/ListWithTitleAtTop';
import logo from './../../../images/logoL.png';

const FourthSection = () => {
    return (
        <Box as='section' py={16} bg="#F2F6FE">
            <Container maxW='container.xl'>
                <SecTitle textAlign='center' mb={10}>Hvorfor innbytte gjennom bilbytt?</SecTitle>
                <Grid templateColumns={{ lg: 'repeat(3,1fr)' }} gap={6} alignItems="center">
                    <GridItem textAlign='center' bg='rgba(255, 255, 255, 0.66)' px={6} py={10} borderRadius={20}>
                        <ListWithTitleAtTop
                            title="Innbytte"
                            subTitle='Få mest mulig for bilen din ved innbytte'
                            list={[
                                'Kun én forhandler gir bud på bilen din',
                                'Du må selv få oversikt over markedet',
                                'Ingen konkurransedyktig tilbud',
                                'Innbytte i løpet av 1 - 2 virkedager',
                                'Ingen reklamasjonsplikt i etterkant',
                            ]}
                        />
                    </GridItem>
                    <GridItem textAlign='center' bg='white' px={6} py={10} borderRadius={20}>
                        <ListWithImageAtTop
                            imgSrc={logo}
                            subTitle='Få mest mulig for bilen din ved innbytte'
                            list={[
                                'Flere bilforhandlere konkurrerer om deg',
                                'Konkurransedyktig tilbud',
                                'Innbytte i løpet av 1 - 2 virkedager',
                                'Du har ingen reklamasjonsplikt',
                                'Vi ordner alt for deg',
                            ]}
                        />
                    </GridItem>
                    <GridItem textAlign='center' bg='rgba(255, 255, 255, 0.66)' px={6} py={10} borderRadius={20}>
                        <ListWithTitleAtTop
                            title="Selge selv"
                            subTitle='for å bytte til en annen bil'
                            list={[
                                'Du må først selge og så kjøpe en ny bil',
                                'Du må selv få oversikt over markedet',
                                'Prosessen tar i snitt 30 - 60 dager',
                                'Du sitter selv igjen med 2 års reklamasjon',
                                'Du må ordne alt selv',
                            ]}
                        />
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default FourthSection;