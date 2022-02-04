import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Kaki from '../comps/footer'
import React from 'react'
import { 
  Img, 
  Flex,
  Text,
  Button,
  HStack 
} from '@chakra-ui/react'
import Header from '../comps/header'

export default function Home() {
  return (
    <>
    <Header title={'MAXIMA 2022'}/>
    <Flex
      // border={'solid'}
      h="100vh"
      bgImage={['/phone.jpg', '/landscape.jpg', '/landscape.jpg', '/landscape.jpg']}
      bgPosition={['center', 'bottom', 'bottom', 'bottom']}
      bgSize={'cover'}
      position={'relative'}
      bgRepeat={'no-repeat'}
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
    >
      <Flex
        // border={'solid'}
        // w={'50%'}
        direction={'column'}>
      <Flex
        // border={'solid'}
        alignItems={'center'}
        direction={'column'}
        w={400}
      >
        <Img src='Logo_MXM.png'
        h="300px"
        w="300px"
        // left={'300px'}
        // bottom={'400px'}
        // position={'fixed'}
       />
       <Text
       fontSize='36px'
       color='#ef4656'
       fontWeight={'bold'}
       textAlign={'center'}
       mb={5}>
         OPEN RECRUITMENT
       </Text>
       <Button
        borderRadius={20}
        colorScheme={'orange'}
        w={180}
      >
        <Link href='/divisi'>DAFTAR</Link>
      </Button>
      
      </Flex>
      <Flex 
        // border={'solid'}
        alignItems={'center'}
        w={400}
        justifyContent={'center'}
        mt={10}
      ><HStack
        spacing={'24px'}
      >
        <Link href="https://www.instagram.com/maximaumn/"><a><Img src='ig_logo.png' 
          h={'40px'}
        /></a></Link>
        <Link href="https://timeline.line.me/user/_dcKA2yvVjcNfYDLhcKetgtujFRGIGuaMtxtf0XY?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"><a><Img src='line_logo.png' 
          h={'40px'}
        /></a></Link>
        <Link href="https://www.tiktok.com/@maximaumn"><a><Img src='tiktok_logo.png' 
          h={'40px'}
        /></a></Link>
        </HStack>
      </Flex>
      </Flex>
    </Flex>
    </>
  )
}
