import {
  Box, Text, Flex, Image, Img 
} from '@chakra-ui/react'

import Card from '../../comps/card'
import Flicking, {ViewportSlot} from "@egjs/react-flicking"
import "@egjs/react-flicking/dist/flicking.css"
import { Arrow } from "@egjs/flicking-plugins"
import "@egjs/flicking-plugins/dist/arrow.css"
import { Pagination } from "@egjs/flicking-plugins"
import "@egjs/flicking-plugins/dist/pagination.css"

const divisi = () => {
  const plugins = [new Pagination({ type: 'bullet' })];
  
  return (
    <Flex
      h="100vh"
      bgImage={['/phone.jpg', '/landscape.jpg', '/landscape.jpg', '/landscape.jpg']}
      bgPosition={['center', 'bottom', 'bottom', 'bottom']}
      bgSize={'cover'}
      position={'relative'}
      bgRepeat={'no-repeat'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      direction={'column'}
    >
      <Text color={'#ef4656'} fontSize={30} fontWeight={'bold'}>PILIH DIVISI</Text>   
      <Box mb={110} width={['100%', '100%', '70%', '90%']}>
        <Flicking circular={true} plugins={plugins}>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/acara'} image={'/logo divisi-Campi.png'} divisi={'ACARA'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/medrel'} image={'/logo divisi-Wyvern.png'} divisi={'MEDIA RELATION'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/publikasi'} image={'/logo divisi-Dryad.png'} divisi={'PUBLIKASI'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/seccom'} image={'/logo divisi-Cerberus.png'} divisi={'SECCOM'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/porto/website'} image={'/logo divisi-Rocuta.png'} divisi={'WEBSITE'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/porto/visual'} image={'/logo divisi-Elvyn.png'} divisi={'VISUAL'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/perkap'} image={'/logo divisi-Harpy.png'} divisi={'PERLENGKAPAN'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/porto/dokum'} image={'/logo divisi-Enfield.png'} divisi={'DOKUMENTASI'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/dekor'} image={'/logo divisi-Hippogriff.png'} divisi={'DEKORASI'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/porto/merch'} image={'/logo divisi-Kirin.png'} divisi={'MERCHANDISE'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/fm'} image={'/logo divisi-Kitsune.png'} divisi={'FRESH MONEY'}/>      
          </Flex>
          <Flex mr={5} ml={5}>
            <Card link={'/noporto/sponsor'} image={'/logo divisi-Jackalope.png'} divisi={'SPONSORSHIP'}/>      
          </Flex>
          <ViewportSlot>
            <div className="flicking-pagination"></div>
          </ViewportSlot>
        </Flicking>
      </Box>
    </Flex>
  );
}
 
export default divisi;