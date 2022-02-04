import {
    Text, Flex, Img 
} from '@chakra-ui/react'

import Link from 'next/link'

const Card = ({link, image, divisi}) => {
  return (
    <Link href={link}>
      <Flex
      boxShadow={'md'}
      borderRadius={20}
      bgColor={'white'}
      w={[200, 200, 300, 300]}
      h={[300, 300, 350, 350]}
      direction={'column'}
      >
       <Flex>
        <Img src={image} 
          h={[200, 200, 300, 300]}
          w={[200, 200, 300, 300]}
        />
       </Flex>
        <Text
          
          textAlign={'center'}
          color={'#ef4656'}
          fontSize={20}
          fontWeight={'bold'}>{divisi}
        </Text>
      </Flex>
    </Link>
  );
}
 
export default Card;