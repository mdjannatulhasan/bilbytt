import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ListItemWithIcon from './ListItemWithIcon';

const ListWithImageAtTop = ({ subTitle, list, imgSrc }) => {
    return (
        <VStack spacing={3}>
            <Box fontSize={46} position='relative' _after={{ bg: 'blue.100', content: '""', width: '85px', height: '85px', position: 'absolute', left: '10px', top: '10px', zIndex: -1, borderRadius: '200' }} color="blue.800"><Image height='80px' src={imgSrc}></Image></Box>
            <Text pb={5} fontSize={18}>{subTitle}

            </Text>
            <VStack spacing={4} alignItems='flex-start' fontSize={17} fontWeight={600}>
                {list.map(item =>
                    <ListItemWithIcon color='brand.500' text={item}></ListItemWithIcon>
                )}
            </VStack>
        </VStack>
    );
};

export default ListWithImageAtTop;