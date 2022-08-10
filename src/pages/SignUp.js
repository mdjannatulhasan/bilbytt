import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PrimaryButton from '../components/atoms/PrimaryButton';
import SecTitle from '../components/atoms/SecTitle';
import TextLink from '../components/atoms/TextLink';
import HorizontalLogo from '../components/molecules/dashboard/HorizontalLogo';
import LoginInputField from '../components/molecules/login/LoginInputField';
import miscBg from './../images/dealership-sales.jpeg';

const SignUp = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' alignItems='center'>
            <GridItem backgroundImage={`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url(${miscBg})`} backgroundSize='cover' backgroundPosition='center' height='100vh' display='flex' alignItems='center'>

            </GridItem>
            <GridItem p={12} maxW='600px' w='100%' mx='auto'>
                <VStack spacing={2} align='flex-start'>
                    <HorizontalLogo small={true} justify='flex-start'></HorizontalLogo>
                    <SecTitle fontWeight={500}>Create New Account</SecTitle>
                    <Text fontSize={18} fontWeight={500}>Already have an account? <TextLink url='/login'>Sign In</TextLink></Text>
                </VStack>
                <Grid templateColumns='repeat(2,1fr)' my={5} gap={5}>
                    <GridItem colSpan={2}>
                        <LoginInputField
                            icon='fas fa-user'
                            type='text'
                            placeholder='Full Name'
                            name='fullName'
                        />
                    </GridItem>
                    <GridItem colSpan={2}>
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
                    <GridItem>
                        <LoginInputField
                            icon='fas fa-key'
                            type='text'
                            placeholder='Retype password'
                            name='passwordRetype'
                        />
                    </GridItem>
                </Grid>
                <Text fontSize={14} mb={5}>By clicking Sign Up, I agree that I have read and accepted the <TextLink url='/login'>Terms of Use</TextLink> and <TextLink url='/login'>Privacy Policy</TextLink>.</Text>
                <PrimaryButton>Sign up</PrimaryButton>
            </GridItem>

        </Grid>
    );
};

export default SignUp;