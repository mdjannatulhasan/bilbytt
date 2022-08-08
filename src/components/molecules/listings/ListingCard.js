import { Badge, Box, Flex, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import FavouriteIcon from '../../atoms/FavouriteIcon';

const Card = ({ data, modalTrigger }) => {
    return (
        <GridItem bg="#ffffff" position='relative' borderRadius={5} overflow="inherit">
            {data.recommended && <p class="ribbon">
                <Box as="span" className="text" fontSize={14}><strong class="bold">Recommended</strong></Box>
            </p>}
            <FavouriteIcon />
            <Box as={Flex} colSpan={2} gap={3} flexDirection={{ sm: "column", lg: 'row' }} justifyContent={{ lg: "flex-end" }} onClick={() => modalTrigger(data)} cursor="pointer">
                <Image objectFit="cover" borderTopRadius={5} boxSize="100%" height="200px" src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80' />
            </Box>
            <Box fontWeight={500} px={3} py={2} mt={2} onClick={() => modalTrigger(data)} cursor="pointer" >
                <VStack spacing={1} align="flex-start">
                    <Badge fontSize={11}>{data?.location?.zip} {data?.location?.state}</Badge>
                    <Text textTransform="capitalize">{data.title}</Text>
                </VStack>
                <HStack justify="space-between" mt={2}>
                    <Text><i class="far fa-calendar-alt"></i> {data?.year}</Text>
                    <Text><i class="fas fa-road"></i> {data?.totalTraveled}</Text>
                    <Text><i class="fas fa-dollar-sign"></i> {data?.price}</Text>
                </HStack>
            </Box>

        </GridItem>
    );
};

export default Card;