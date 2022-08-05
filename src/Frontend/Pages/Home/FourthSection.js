import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const FourthSection = () => {
    return (
        <Box as='section' py={16} bg="#F2F6FE">
            <Container maxW='container.xl'>
                <VStack spacing={5} alignItems='flex-start'>
                    <Heading fontSize={42}>5 tips til deg som drømmer om båt!</Heading>
                    <Text fontSize={20}>
                        Båtsesongen nærmer seg og mange drømmer om å investere i egen båt, men hva slags båt er egentlig rett for deg? Og hva skal du se etter? Vi har spurt daglig leder i Ferd Båt, Rune Westad om noen enkle tips.
                    </Text>
                    <Button variant='outline' borderColor='brand.500' height='auto' borderRadius={500} py={3} px={8} fontSize={18} color='brand.500' _hover={{ color: 'white', bg: 'brand.500' }}>Se andre lån</Button>
                </VStack>
            </Container>
        </Box>
    );
};

export default FourthSection;