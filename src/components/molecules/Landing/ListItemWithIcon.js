import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

const ListItemWithIcon = ({ color, text }) => {
    return (
        <Box><CheckCircleIcon color={color} mr={2} /> {text}</Box>
    );
};

export default ListItemWithIcon;