import React from 'react'
import { Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";


const headingOptions = {
    pos: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: "4",
    textTransform: "uppercase",
    size: 'xl'
}
const Home = () => {
  return (
    <>
    <MyCarousel/>
    <Container minH={"100vh"} maxW={"container.xl"} p={'16'}>
        <Heading 
        textTransform={"uppercase"} p={'4'} w={'fit-content'} 
        borderBottom={'2px solid'}
        m={'auto'}
        >
        Services</Heading>

        <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
        >
            <Image src={img3} filter={'hue-rotate(-130deg)'} h={[40, 400]} borderRadius={'50%'}></Image>
            <Text
                letterSpacing={'widest'}
                lineHeight={'190%'}
                p={[4, 16]}
                textAlign={'center'}
            >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui fugit ipsam ab! Officia quasi odit omnis eveniet quia, veniam soluta obcaecati eum aspernatur error vitae animi blanditiis reprehenderit nam!
Debitis incidunt voluptas culpa quisquam perferendis, laboriosam rem beatae blanditiis, assumenda natus modi? At nihil deserunt voluptate, adipisci, unde, officiis quasi provident ut delectus soluta quod corrupti distinctio ab nobis.
Odit consequatur officia quibusdam reprehenderit saepe quis qui, distinctio aliquid quae eveniet numquam cumque praesentium provident eius. Accusantium, assumenda explicabo? Totam repudiandae nulla similique odio quo harum corrupti omnis nemo.
            </Text>
        </Stack>
    </Container>
    </>
  )
}
const MyCarousel = ()=>{
    return(
        <Carousel 
        autoPlay
        infiniteLoop
        interval={1000}
        showArrows = {false}
        showThumbs = {false}
        showStatus = {false}
        >
            <Box w={"full"} h={"100vh"}>
                <Image src={img1} h={'100vh'} w={'full'} objectFit={'cover'}/>
                <Heading bgColor={'black'} color={"white"} {...headingOptions}>Gaming is the future</Heading>
            </Box>
            <Box w={"full"} h={"100vh"}>
                <Image src={img2} h={'100vh'} w={'full'} objectFit={'cover'}/>
                <Heading bgColor={"black"} color={"white"} {...headingOptions}>Future is the Gaming</Heading>
            </Box>
            <Box w={"full"} h={"100vh"}>
                <Image src={img3} h={'100vh'} w={'full'} objectFit={'cover'}/>
                <Heading bgColor={"black"} color={"white"} {...headingOptions}>Gaming</Heading>
            </Box>
        </Carousel>
    )
}
export default Home