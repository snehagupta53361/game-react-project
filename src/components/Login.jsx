import { Container, Heading, Input, VStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
    <VStack w={['full', '96']} h={'full'} alignItems={'stretch'} m={'auto'} my={'16'}>
    <Heading textTransform={'uppercase'}>Welcome</Heading>
    <Input required type='Email' placeholder={'Email'} colorScheme='purple' focusBorderColor='purple'/>
    <Input required type='password' placeholder={'password'} colorScheme='purple' outline={'none'} focusBorderColor='purple'/>
    <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
        <Link to={'/forgetPassword'}>forget Password?</Link>
    </Button>
    <Button colorScheme='purple' type='submit'>Log In</Button>
    <Text alignSelf={'flex-end'}>New User?
    <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
        <Link to={'/signUp'}>Sign Up</Link>
    </Button>
    </Text>
    </VStack>
    </form>     
    </Container>
  )
}

export default Login