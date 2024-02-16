import {  Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'}/>  
            <form>
                <HStack>
                    <Input required type='file' css={{
                        "&::file-selector-button":{
                            height: '100%',
                            width: 'calc(100% + 36px)',
                            backgroundColor: 'white',
                            color: 'purple',
                            border: 'none',
                            cursor: "pointer"
                        }
                    }}/>
                    <Button colorScheme='purple' type='submit'>Upload</Button>
                </HStack>
            </form>      
        </VStack>
    </Container>
  )
}

export default Upload