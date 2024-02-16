import { Container, Heading, Input, VStack, Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
    <VStack w={['full', '96']} h={'full'} alignItems={'stretch'} m={'auto'} my={'16'}>
    <Heading textTransform={'uppercase'}>Video Hub</Heading>
    <Avatar alignSelf={'center'} boxSize={'32'}/>
    <Input required type='text' placeholder={'Name'} colorScheme='purple' focusBorderColor='purple'/>
    <Input required type='email' placeholder={'Email'} colorScheme='purple' focusBorderColor='purple'/>
    <Input required type='password' placeholder={'password'} colorScheme='purple' outline={'none'} focusBorderColor='purple'/>
    <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
        <Link to={'/forgetPassword'}>forget Password?</Link>
    </Button>
    <Button colorScheme='purple' type='submit'>Sign Up</Button>
    <Text alignSelf={'flex-end'}>Already Signed Up?
    <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
        <Link to={'/login'}>Login</Link>
    </Button>
    </Text>
    </VStack>
    </form>     
    </Container>
  )
}

export default SignUp