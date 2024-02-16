import React from 'react'

import { Button, 
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    DrawerOverlay,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BiMenuAltLeft} from "react-icons/bi"


const Header = () => {

    const {isOpen, onClose, onOpen} = useDisclosure();
  return (
    <>
        <Button
            pos={"fixed"}
            top={'4'}
            left={'4'}
            w = {"10"}
            h={'10'}
            p = {'0'}
            colorScheme='purple'
            borderRadius={"full"}
            onClick={onOpen}
            zIndex={'overlay'}
        >
            <BiMenuAltLeft size={'20'}/>
        </Button>

        <Drawer isOpen = {isOpen} onClose={onClose} placement='left'>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Video Hub</DrawerHeader>
                <VStack alignItems={"flex-start"}>
                    <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                        <Link to={"/videos"}>Videos</Link>
                    </Button>
                    <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                        <Link to={"/videos?category=free"}>Free Videos</Link>
                    </Button>
                    <Button colorScheme='purple' variant={"ghost"} onClick={onClose}>
                        <Link to={"/upload"}>Upload Video</Link>
                    </Button>
                </VStack>

                <HStack pos={"absolute"} bottom={"4"} left={'4'} justifyContent={"space-evenly"}>
                    <Button colorScheme='purple' onClick={onClose}>
                        <Link to={"/login"}>Login</Link>
                    </Button>
                    <Button variant={"outline"} colorScheme='purple' onClick={onClose}>
                        <Link to={"/signUp"}>Sign Up</Link>
                    </Button>
                </HStack>
            <DrawerBody>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header