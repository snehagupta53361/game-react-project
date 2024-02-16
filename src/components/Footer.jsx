import React from 'react'

import {Box, Stack, VStack, HStack, Heading, Input, Button, Text} from "@chakra-ui/react"
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box minH={'40'} p={'4'} maxW={'full'} bgColor={'black'} color={'white'}>
        <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'8'}>
        <Heading textTransform={'uppercase'} size={'md'} textAlign={['center', 'left']}>Subscribe to get updates</Heading>

        <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input placeholder='Enter Email Here'
            border={'none'}
            borderRadius={'none'}
            outline={'none'}
            focusBorderColor={'none'}
            />
            <Button
                variant={'ghost'}
                p={'0'}
                colorScheme='purple'
                borderRadius={'0 2px 20px 0'}
            >
                <AiOutlineSend size={'20'}/>
            </Button>
        </HStack>
        </VStack>
        <VStack
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          w={'full'}
          p={'8'}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'} >Video Hub</Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'} p={'8'}>
          <Heading textTransform={'uppercase'} size={'md'}>Social Media</Heading>
          <Button textAlign={'center'} variant={'link'} colorScheme='white'>
            <a href='https://youtube.com' target='blank'>Youtube</a>
          </Button>
          <Button textAlign={'center'} variant={'link'} colorScheme='white'>
          <a href='https://youtube.com' target='blank'>Instagram</a>
          </Button>
          <Button textAlign={'center'} variant={'link'} colorScheme='white'>
          <a href='https://youtube.com' target='blank'>LinkedIn</a>
          </Button>
        </VStack>
        </Stack>
    </Box>
  )
}

export default Footer