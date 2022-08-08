import { Box, Container, Image, Grid, GridItem, Heading, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';

const ThirdSection = () => {
    return (
        <Box as="section" py={16}>
            <Container maxW='container.xl'>
                <Grid templateColumns={{ lg: 'repeat(2,1fr)' }} gap={10} alignItems="center">
                    <GridItem>
                        <Box position='relative' display='inline-block' _before={{ bg: 'blue.100', position: 'absolute', width: '100%', height: '100%', content: '""', top: '16px', right: '16px', zIndex: "0", borderRadius: 16, }}>
                            <Image maxHeight='550px' zIndex={5} position='relative' borderRadius={16} src='https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain'></Image>
                        </Box>
                    </GridItem>
                    <GridItem pl={{ lg: 6 }}>
                        <VStack spacing={5} alignItems='flex-start'>
                            <Heading fontSize={42}>5 tips til deg som drømmer om båt!</Heading>
                            <Text fontSize={20}>
                                Båtsesongen nærmer seg og mange drømmer om å investere i egen båt, men hva slags båt er egentlig rett for deg? Og hva skal du se etter? Vi har spurt daglig leder i Ferd Båt, Rune Westad om noen enkle tips.
                            </Text>
                            <Button variant='outline' borderColor='brand.500' height='auto' borderRadius={500} py={3} px={8} fontSize={18} color='brand.500' _hover={{ color: 'white', bg: 'brand.500' }}>Se andre lån</Button>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default ThirdSection;