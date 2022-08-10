import { SearchIcon } from '@chakra-ui/icons';
import { Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import React from 'react';
import CustomCheckbox from './CustomCheckbox';

const CheckboxList = ({ carBrandNames }) => {
    return (
        <>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.400' />}
                />
                <Input type='tel' placeholder='Search in car' />
            </InputGroup>
            <Stack spacing={1} mt={3}>
                <Heading as={'h4'} fontSize={18}>Brands</Heading>
                {
                    carBrandNames?.data?.brandList.map((brand, index) =>
                        <CustomCheckbox key={index} textInput={brand.brand} models={brand?.models} />
                    )
                }

            </Stack>
        </>
    );
};

export default CheckboxList;