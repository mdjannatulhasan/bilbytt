import { Box, Button, Container, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const FifthSection = () => {
    return (
        <Box as="section" py={16}>
            <Container maxW='container.xl'>
                <Grid templateColumns={{ lg: 'repeat(2,1fr)' }} gap={10} alignItems="center">
                    <GridItem>
                        <VStack spacing={5} alignItems='flex-start'>
                            <Heading fontSize={42}>Grønt billån til din elbil!</Heading>
                            <Text fontSize={20}>
                                Båtsesongen nærmer seg og mange drømmer om å investere i egen båt, men hva slags båt er egentlig rett for deg? Og hva skal du se etter? Vi har spurt daglig leder i Ferd Båt, Rune Westad om noen enkle tips.
                            </Text>
                            <Button variant='outline' borderColor='brand.500' height='auto' borderRadius={500} py={3} px={8} fontSize={18} color='brand.500' _hover={{ color: 'white', bg: 'brand.500' }}>Se andre lån</Button>
                        </VStack>
                    </GridItem>
                    <GridItem pl={{ lg: 6 }}>
                        <Box position='relative' display='inline-block' _before={{ bg: 'blue.100', position: 'absolute', width: '100%', height: '100%', content: '""', top: '16px', left: '16px', zIndex: "0", borderRadius: 16, }}>
                            <Image maxHeight='550px' width='100%' objectFit='cover' zIndex={5} position='relative' borderRadius={16} src='https://manuals.plus/wp-content/uploads/2021/08/featured-515.jpg?ezimgfmt=ng:webp/ngcb1'></Image>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default FifthSection;