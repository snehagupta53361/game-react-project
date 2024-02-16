import { Heading, Stack, VStack, Text, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {

    const videosArr = [1,2,3,4,5,6,7,8,];

    const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack
        direction={['column', 'row']}
        h={'100vh'}
    >
        <VStack w={'full'}>
            <video 
            src={videoSrc}
            controls
            controlsList='nodownload'
            style={{width: "100%"}}
            ></video>

            <VStack w={'full'} alignItems={'flex-start'} p={'8'} overflow={'auto'}>
               <Heading textTransform={'uppercase'}>Sample Video 1</Heading>
               <Text>This is description videos this is only for sample purpose.
               </Text>
            </VStack>
        </VStack>
        <VStack
            w={['full', 'xl']}
            h={'100vh'}
            p={'8'}
            alignItems={'stretch'}
            spacing={'8'}
            overflow={'auto'}
        >
        {
            videosArr.map((item, index)=>{
                return <Button variant={'ghost'} p={'8'} colorScheme='purple' onClick={()=>{
                    setVideoSrc(item);
                }}>Lecture {index+1} 
                </Button>
            })
        }
        </VStack>
    </Stack>
  )
}

export default Videos;