import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ListItemWithIcon from './ListItemWithIcon';

const ListWithTitleAtTop = ({ title, subTitle, list }) => {
    return (
        <VStack spacing={5} alignItems='flex-start'>
            <Box textAlign='left'>
                <Text fontSize={20} fontWeight={600}>{title}</Text>
                <Text pb={5}>{subTitle}</Text>
            </Box>

            <VStack spacing={4} alignItems='flex-start'>
                {list.map((item, index) =>
                    <ListItemWithIcon key={index} color='brand.200' text={item}></ListItemWithIcon>
                )}
            </VStack>
        </VStack>
    );
};

export default ListWithTitleAtTop;