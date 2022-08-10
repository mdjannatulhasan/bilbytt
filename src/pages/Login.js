import { Divider, Flex, Grid, GridItem, Text, VStack, Link, Image } from '@chakra-ui/react';
import React from 'react';
import { Link as reactLink } from 'react-router-dom';
import PrimaryButton from '../components/atoms/PrimaryButton';
import SecTitle from '../components/atoms/SecTitle';
import TextLink from '../components/atoms/TextLink';
import HorizontalLogo from '../components/molecules/dashboard/HorizontalLogo';
import LoginInputField from '../components/molecules/login/LoginInputField';
import miscBg from './../images/dealership-sales.jpeg';
import google from './../images/ic_google logo.svg';

const Login = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' alignItems='center'>
            <GridItem backgroundImage={`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url(${miscBg})`} backgroundSize='cover' backgroundPosition='center' height='100vh' display='flex' alignItems='center'>

            </GridItem>
            <GridItem p={12} maxW='600px' w='100%' mx='auto'>
                <VStack spacing={2} align='flex-start'>
                    <HorizontalLogo small={true} justify='flex-start'></HorizontalLogo>
                    <SecTitle fontWeight={500}>Sign In</SecTitle>
                    <Text fontSize={18} fontWeight={500}>New User? <TextLink url='/signup'>Create new account</TextLink></Text>
                </VStack>
                <Grid templateColumns='repeat(1,1fr)' my={5} gap={5}>
                    <GridItem>
                        <LoginInputField
                            icon='fas fa-envelope'
                            type='mail'
                            placeholder='Your Email'
                            name='email'
                        />
                    </GridItem>
                    <GridItem>
                        <LoginInputField
                            icon='fas fa-key'
                            type='password'
                            placeholder='Type password'
                            name='password'
                        />
                    </GridItem>
                </Grid>
                <Flex justify='space-between' align='center'>
                    <TextLink url=''>
                        Forgot Password?
                    </TextLink>
                    <PrimaryButton>Sign in</PrimaryButton>
                </Flex>
                <Flex my={3} justify='space-between' align='center' gap={2}>
                    <Divider />
                    Or
                    <Divider />
                </Flex>
                <Link mt={4} as={reactLink} to='' border='1px solid' borderColor='gray.300' w='100%' display='block' p={2}>
                    <Flex justify='center'>
                        <Image src={google} mr={2}></Image>Login with google
                    </Flex>
                </Link>
            </GridItem>

        </Grid>
    );
};

export default Login;