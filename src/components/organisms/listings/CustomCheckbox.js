import { CheckIcon } from '@chakra-ui/icons';
import { chakra, Box, Flex, Text, useCheckbox, Checkbox } from '@chakra-ui/react';
import React from 'react';

const CustomCheckbox = (props) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
        useCheckbox(props);
    return (
        <chakra.label
            display='flex'
            flexDirection='column'
            maxW='200px'
            rounded='lg'
            cursor='pointer'
            {...htmlProps}
        >
            <input {...getInputProps()} hidden />
            <Flex alignItems='center' gridColumnGap={2} px={2} py="2px">
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    w={4}
                    h={4}
                    {...getCheckboxProps()}
                >
                    {state.isChecked ? <Box fontSize={16} color="#4682DF"><i className="fas fa-check-square"></i></Box> : <Box fontSize={16} color="gray.500"><i className="far fa-square"></i></Box>}
                </Flex>

                <Text {...getLabelProps()}>{props.textInput}</Text>
            </Flex>
            <Flex direction="column">
                {props?.models && state.isChecked &&
                    props?.models.map((model, index) => <Box pl={4}>
                        <CustomCheckbox key={index} textInput={model}></CustomCheckbox>
                    </Box>)
                }
            </Flex>
        </chakra.label>
    );
};

export default CustomCheckbox;