import { Text, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import ImageWithRoundedColorBg from './ImageWithRoundedColorBg';

import { Link as reactLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
const Card = ({ imgSrc, title, textItalic, name, text, link }) => {
    return (
        <VStack spacing={5}>
            <ImageWithRoundedColorBg boxSize='70px'>{imgSrc}</ImageWithRoundedColorBg>
            <CardTitle>{title}</CardTitle>
            <Text fontSize={18} px={{ lg: 5 }} fontStyle={textItalic && "italic"}>{textItalic && `"${textItalic}"`}{text && text}</Text>
            {name && <Text px={{ lg: 5 }} fontStyle='italic' fontWeight={500}>{name}</Text>}
            {link && <Link as={reactLink} className='animatedHover' to={link?.url} color='blue.800' fontWeight={700} _hover={{ textDecoration: 'none' }} _after={{ bg: '#2a4365' }}>{link?.text} <ArrowForwardIcon /></Link>}
        </VStack>
    );
};

export default Card;