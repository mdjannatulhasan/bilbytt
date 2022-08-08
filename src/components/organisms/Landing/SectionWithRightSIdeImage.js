import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import TitleTextButton from '../../molecules/Landing/TitleTextButton';

const SectionWithRightSIdeImage = () => {
    return (
        <Box as="section" py={16}>
            <Container maxW='container.xl'>
                <Grid templateColumns={{ lg: 'repeat(2,1fr)' }} gap={10} alignItems="center">
                    <GridItem>
                        <TitleTextButton
                            title='Grønt billån til din elbil!'
                            text='Båtsesongen nærmer seg og mange drømmer om å investere i egen båt, men hva slags båt er egentlig rett for deg? Og hva skal du se etter? Vi har spurt daglig leder i Ferd Båt, Rune Westad om noen enkle tips.'
                            button={{ text: 'Se andre lån', url: '' }}
                        ></TitleTextButton>
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

export default SectionWithRightSIdeImage;