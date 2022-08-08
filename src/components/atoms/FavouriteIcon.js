import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const FavouriteIcon = () => {
    const [heartColor, setHeartColor] = useState(false);
    const changeColor = () => {
        setHeartColor(!heartColor);
    }
    return (
        <Button onClick={changeColor} bg='transparent' p={0} color={heartColor ? 'red.500' : 'white'} position='absolute' right={0} top={0} fontSize={20} _hover={{ bg: 'transparent' }}>
            <i class="fas fa-heart"></i>
        </Button>
    );
};

export default FavouriteIcon;