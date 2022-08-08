import { VStack } from '@chakra-ui/react';
import React from 'react';
import OutlinedButton from '../../atoms/OutlinedButton';
import SectionBodyText from '../../atoms/SectionBodyText';
import SecTitle from '../../atoms/SecTitle';

const TitleTextButton = ({ title, text, button }) => {
    return (
        <VStack spacing={5} alignItems='flex-start'>
            <SecTitle>{title}</SecTitle>
            <SectionBodyText>{text}
            </SectionBodyText>
            <OutlinedButton url={button?.url}>{button.text}</OutlinedButton>
        </VStack>
    );
};

export default TitleTextButton;